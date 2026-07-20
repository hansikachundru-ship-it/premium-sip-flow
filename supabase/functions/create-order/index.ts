import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "https://esm.sh/zod@3.23.8";

// Server-side authoritative price catalog. Client-supplied prices are ignored.
const PRODUCT_CATALOG: Record<string, { name: string; price: number }> = {
  m1: { name: "Latcha Reserve Matcha", price: 1899 },
  b1: { name: "Latcha Reserve - Duo", price: 3500 },
  b2: { name: "Latcha Reserve - Trio", price: 4500 },
  b3: { name: "Latcha Reserve Kit", price: 3000 },
};

const BodySchema = z.object({
  items: z
    .array(
      z.object({
        product_id: z.string().min(1).max(64),
        quantity: z.number().int().min(1).max(999),
        product_image: z.string().max(2048).optional().nullable(),
      })
    )
    .min(1)
    .max(50),
  delivery_name: z.string().trim().min(1).max(200),
  delivery_phone: z.string().trim().min(1).max(30),
  delivery_address: z.string().trim().min(1).max(500),
  delivery_city: z.string().trim().min(1).max(200),
  delivery_pincode: z.string().trim().min(1).max(20),
  payment_method: z.enum(["shopify", "cod", "razorpay"]).default("shopify"),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    // Verify user session
    const userClient = createClient(supabaseUrl, anonKey, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const userId = userData.user.id;

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid request", details: parsed.error.flatten() }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const body = parsed.data;

    // Compute prices from the server-side catalog only.
    let total = 0;
    const priced = body.items.map((it) => {
      const entry = PRODUCT_CATALOG[it.product_id];
      if (!entry) throw new Error(`Unknown product: ${it.product_id}`);
      total += entry.price * it.quantity;
      return {
        product_id: it.product_id,
        product_name: entry.name,
        product_image: it.product_image ?? null,
        quantity: it.quantity,
        price: entry.price,
      };
    });

    const admin = createClient(supabaseUrl, serviceKey);
    const { data: order, error: orderErr } = await admin
      .from("orders")
      .insert({
        user_id: userId,
        total_amount: total,
        delivery_name: body.delivery_name,
        delivery_phone: body.delivery_phone,
        delivery_address: body.delivery_address,
        delivery_city: body.delivery_city,
        delivery_pincode: body.delivery_pincode,
        payment_method: body.payment_method,
      })
      .select()
      .single();
    if (orderErr) throw orderErr;

    const { error: itemsErr } = await admin
      .from("order_items")
      .insert(priced.map((p) => ({ ...p, order_id: order.id })));
    if (itemsErr) throw itemsErr;

    return new Response(JSON.stringify({ order_id: order.id, total_amount: total }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("create-order error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
