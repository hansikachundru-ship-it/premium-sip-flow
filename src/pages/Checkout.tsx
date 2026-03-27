import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useCartStore } from "@/stores/cartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { ShoppingBag, CheckCircle } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCartStore();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<any>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setShowAuth(false);
        setForm((f) => ({
          ...f,
          name: session.user.user_metadata?.full_name || f.name,
          phone: session.user.user_metadata?.phone || f.phone,
        }));
      }
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setForm((f) => ({
          ...f,
          name: session.user.user_metadata?.full_name || f.name,
          phone: session.user.user_metadata?.phone || f.phone,
        }));
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handlePlaceOrder = async () => {
    if (!user) {
      setShowAuth(true);
      return;
    }
    if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) return;

    setPlacing(true);
    try {
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          total_amount: totalPrice(),
          delivery_name: form.name,
          delivery_phone: form.phone,
          delivery_address: form.address,
          delivery_city: form.city,
          delivery_pincode: form.pincode,
          payment_method: form.payment,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      const orderItems = items.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        product_name: item.name,
        product_image: item.image || null,
        quantity: item.quantity,
        price: item.price,
      }));

      const { error: itemsError } = await supabase.from("order_items").insert(orderItems);
      if (itemsError) throw itemsError;

      setConfirmedOrder({ ...order, items: orderItems });
      setOrderConfirmed(true);
      clearCart();
    } catch (err) {
      console.error("Order error:", err);
    } finally {
      setPlacing(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-blush" />;

  if (items.length === 0 && !orderConfirmed) {
    return (
      <div className="min-h-screen bg-blush">
        <Navbar />
        <main className="pt-16 pb-16 px-6 max-w-2xl mx-auto text-center">
          <ShoppingBag className="w-16 h-16 text-crimson/20 mx-auto mb-4" />
          <h1 className="font-display text-crimson text-xl font-bold mb-2">Your cart is empty</h1>
          <button onClick={() => navigate("/shop")} className="mt-4 border-2 border-crimson text-crimson font-display text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-crimson hover:text-blush transition-colors">
            Continue Shopping
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderConfirmed) {
    return (
      <div className="min-h-screen bg-blush">
        <Navbar />
        <main className="pt-12 pb-16 px-6 max-w-2xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-matcha mx-auto mb-4" />
          <h1 className="font-display text-crimson text-2xl font-extrabold mb-2">Order Confirmed!</h1>
          <p className="font-body text-crimson/60 text-sm mb-6">Thank you for your order. We'll have it delivered soon.</p>
          <div className="bg-blush-light rounded-2xl p-6 border border-crimson/10 text-left mb-6">
            <h2 className="font-display text-crimson text-sm font-bold uppercase tracking-wider mb-3">Order Summary</h2>
            {confirmedOrder?.items?.map((item: any, i: number) => (
              <div key={i} className="flex justify-between py-2 border-b border-crimson/5 font-body text-sm text-crimson">
                <span>{item.product_name} × {item.quantity}</span>
                <span>Rs. {(item.price * item.quantity).toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className="flex justify-between pt-3 font-display text-crimson font-bold text-sm">
              <span>Total</span>
              <span>Rs. {confirmedOrder?.total_amount?.toLocaleString("en-IN")}</span>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <button onClick={() => navigate("/account")} className="border-2 border-crimson text-crimson font-display text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-crimson hover:text-blush transition-colors">
              View Orders
            </button>
            <button onClick={() => navigate("/shop")} className="bg-crimson text-blush font-display text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-crimson-dark transition-colors">
              Continue Shopping
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blush">
      <Navbar />
      <main className="pt-8 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="font-display text-crimson text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-8">Checkout</h1>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="bg-blush-light rounded-2xl p-5 border border-crimson/10 sticky top-24">
              <h2 className="font-display text-crimson text-sm font-bold uppercase tracking-wider mb-4">Order Summary</h2>
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 py-2 border-b border-crimson/5">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-crimson/10 flex-shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center"><ShoppingBag className="w-4 h-4 text-crimson/30" /></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-display text-crimson text-xs font-bold">{item.name}</p>
                      <p className="font-body text-crimson/60 text-xs">Qty: {item.quantity} · Rs. {(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 pt-3 border-t border-crimson/10">
                <span className="font-display text-crimson text-sm font-bold uppercase">Total</span>
                <span className="font-display text-crimson text-lg font-bold">Rs. {totalPrice().toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          {/* Delivery & Payment Form */}
          <div className="md:col-span-3 order-1 md:order-2 space-y-6">
            {!user && (
              <div className="bg-crimson/5 rounded-2xl p-5 border border-crimson/10 text-center">
                <p className="font-body text-crimson text-sm mb-3">Please sign in to place your order</p>
                <button onClick={() => setShowAuth(true)} className="bg-crimson text-blush font-display text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-crimson-dark transition-colors">
                  Sign In / Sign Up
                </button>
              </div>
            )}

            <div className="bg-blush-light rounded-2xl p-6 border border-crimson/10">
              <h2 className="font-display text-crimson text-sm font-bold uppercase tracking-wider mb-4">Delivery Address</h2>
              <div className="space-y-3">
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-blush border border-crimson/15 text-crimson font-body text-sm placeholder:text-crimson/30 focus:outline-none focus:border-crimson/40" />
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-blush border border-crimson/15 text-crimson font-body text-sm placeholder:text-crimson/30 focus:outline-none focus:border-crimson/40" />
                <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Full Address" rows={3} className="w-full px-4 py-3 rounded-xl bg-blush border border-crimson/15 text-crimson font-body text-sm placeholder:text-crimson/30 focus:outline-none focus:border-crimson/40 resize-none" />
                <div className="grid grid-cols-2 gap-3">
                  <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" className="w-full px-4 py-3 rounded-xl bg-blush border border-crimson/15 text-crimson font-body text-sm placeholder:text-crimson/30 focus:outline-none focus:border-crimson/40" />
                  <input value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} placeholder="Pincode" className="w-full px-4 py-3 rounded-xl bg-blush border border-crimson/15 text-crimson font-body text-sm placeholder:text-crimson/30 focus:outline-none focus:border-crimson/40" />
                </div>
              </div>
            </div>

            <div className="bg-blush-light rounded-2xl p-6 border border-crimson/10">
              <h2 className="font-display text-crimson text-sm font-bold uppercase tracking-wider mb-4">Payment Method</h2>
              <div className="space-y-2">
                {[
                  { value: "cod", label: "Cash on Delivery" },
                  { value: "upi", label: "UPI" },
                  { value: "card", label: "Credit / Debit Card" },
                ].map((method) => (
                  <label key={method.value} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${form.payment === method.value ? "border-crimson bg-crimson/5" : "border-crimson/10 bg-blush"}`}>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${form.payment === method.value ? "border-crimson" : "border-crimson/30"}`}>
                      {form.payment === method.value && <div className="w-2 h-2 rounded-full bg-crimson" />}
                    </div>
                    <span className="font-body text-crimson text-sm">{method.label}</span>
                    <input type="radio" name="payment" value={method.value} checked={form.payment === method.value} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="hidden" />
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={placing || !user || !form.name || !form.phone || !form.address || !form.city || !form.pincode}
              className="w-full bg-crimson text-blush font-display font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-crimson-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {placing ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </div>
      </main>
      <Footer />
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  );
};

export default Checkout;