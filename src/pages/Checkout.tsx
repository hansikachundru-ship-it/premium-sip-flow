import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useCartStore } from "@/stores/cartStore";
import { createShopifyCheckout } from "@/lib/shopify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { ShoppingBag, CheckCircle, Lock } from "lucide-react";

const INDIAN_STATES = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Delhi","Jammu and Kashmir","Ladakh","Puducherry","Chandigarh","Andaman and Nicobar Islands","Dadra and Nagar Haveli and Daman and Diu","Lakshadweep",
];

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
    country: "India",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    payment: "cod",
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setShowAuth(false);
        const fullName: string = session.user.user_metadata?.full_name || "";
        const [first, ...rest] = fullName.split(" ");
        setForm((f) => ({
          ...f,
          firstName: f.firstName || first || "",
          lastName: f.lastName || rest.join(" ") || "",
          phone: f.phone || session.user.user_metadata?.phone || "",
        }));
      }
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        const fullName: string = session.user.user_metadata?.full_name || "";
        const [first, ...rest] = fullName.split(" ");
        setForm((f) => ({
          ...f,
          firstName: f.firstName || first || "",
          lastName: f.lastName || rest.join(" ") || "",
          phone: f.phone || session.user.user_metadata?.phone || "",
        }));
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const formValid = form.firstName && form.lastName && form.address && form.city && form.state && form.pincode && form.phone;

  const handlePlaceOrder = async () => {
    if (!user || !formValid) return;
    setPlacing(true);
    try {
      const missing = items.filter((i) => !i.variantId);
      if (missing.length > 0) {
        toast.error(
          `Not available for checkout yet: ${missing.map((i) => i.name).join(", ")}`
        );
        return;
      }

      // Shopify is the source of truth for orders and payments.
      // We create a real Shopify cart and redirect to Shopify's hosted
      // checkout — no local order is created until Shopify confirms payment
      // (via webhook, if wired up later).
      const checkoutUrl = await createShopifyCheckout(
        items.map((i) => ({ variantId: i.variantId as string, quantity: i.quantity }))
      );

      clearCart();
      window.location.href = checkoutUrl;
    } catch (err) {
      console.error("Checkout error:", err);
      toast.error(err instanceof Error ? err.message : "Could not start checkout");
    } finally {
      setPlacing(false);
    }
  };

  if (loading) return <div className="min-h-screen bg-blush" />;

  if (items.length === 0 && !orderConfirmed) {
    return (
      <div className="min-h-screen bg-blush">
        <Navbar />
        <main className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
          <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 text-crimson/20 mx-auto mb-3 sm:mb-4" />
          <h1 className="font-display text-crimson text-lg sm:text-xl font-bold mb-2">Your cart is empty</h1>
          <button onClick={() => navigate("/shop")} className="mt-3 sm:mt-4 border-2 border-crimson text-crimson font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-crimson hover:text-blush transition-colors">
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
        <main className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 max-w-2xl mx-auto text-center">
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-matcha mx-auto mb-3 sm:mb-4" />
          <h1 className="font-display text-crimson text-xl sm:text-2xl font-extrabold mb-2">Order Confirmed</h1>
          <p className="font-body text-crimson/60 text-xs sm:text-sm mb-4 sm:mb-6">Thank you for your order. We'll have it delivered soon.</p>
          <div className="bg-blush-light rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-crimson/10 text-left mb-4 sm:mb-6">
            <h2 className="font-display text-crimson text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-3">Order Summary</h2>
            {confirmedOrder?.items?.map((item: any, i: number) => (
              <div key={i} className="flex justify-between py-1.5 sm:py-2 border-b border-crimson/5 font-body text-xs sm:text-sm text-crimson">
                <span>{item.product_name} × {item.quantity}</span>
                <span>Rs. {(item.price * item.quantity).toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className="flex justify-between pt-2 sm:pt-3 font-display text-crimson font-bold text-xs sm:text-sm">
              <span>Total</span>
              <span>Rs. {confirmedOrder?.total_amount?.toLocaleString("en-IN")}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <button onClick={() => navigate("/account")} className="border-2 border-crimson text-crimson font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-crimson hover:text-blush transition-colors">
              View Orders
            </button>
            <button onClick={() => navigate("/shop")} className="bg-crimson text-blush font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-crimson-dark transition-colors">
              Continue Shopping
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // STEP 1: Auth gate — show only sign-in card, no address or payment.
  if (!user) {
    return (
      <div className="min-h-screen bg-blush">
        <Navbar />
        <main className="pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 max-w-2xl mx-auto">
          <h1 className="font-display text-crimson text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-5 sm:mb-8">Checkout</h1>

          <div className="bg-blush-light rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-crimson/10 mb-5">
            <h2 className="font-display text-crimson text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Order Summary</h2>
            <div className="space-y-2 sm:space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-2.5 sm:gap-3 py-1.5 sm:py-2 border-b border-crimson/5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-crimson/10 flex-shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"><ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-crimson/30" /></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-crimson text-[11px] sm:text-xs font-bold truncate">{item.name}</p>
                    <p className="font-body text-crimson/60 text-[10px] sm:text-xs">Qty: {item.quantity} · Rs. {(item.price * item.quantity).toLocaleString("en-IN")}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-crimson/10">
              <span className="font-display text-crimson text-xs sm:text-sm font-bold uppercase">Total</span>
              <span className="font-display text-crimson text-base sm:text-lg font-bold">Rs. {totalPrice().toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="bg-blush-light rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-crimson/10 text-center">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-crimson/40 mx-auto mb-3" />
            <h2 className="font-display text-crimson text-base sm:text-lg font-bold uppercase tracking-wider mb-1.5">Sign In to Continue</h2>
            <p className="font-body text-crimson/60 text-xs sm:text-sm mb-5">Please sign in or create an account to enter your delivery address and complete your order.</p>
            <button
              onClick={() => setShowAuth(true)}
              className="bg-crimson text-blush font-display text-[11px] sm:text-xs font-bold uppercase tracking-widest px-8 sm:px-10 py-3 sm:py-3.5 rounded-full hover:bg-crimson-dark transition-colors"
            >
              Sign In / Sign Up
            </button>
          </div>
        </main>
        <Footer />
        <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
      </div>
    );
  }

  // STEP 2: Authenticated — show Shopify-style delivery + payment.
  const inputClass = "w-full px-4 py-3 rounded-xl bg-blush border border-crimson/20 text-crimson font-body text-sm placeholder:text-crimson/40 focus:outline-none focus:border-crimson/50 transition-colors";

  return (
    <div className="min-h-screen bg-blush">
      <Navbar />
      <main className="pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto">
        <h1 className="font-display text-crimson text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-5 sm:mb-8">Checkout</h1>

        <div className="grid md:grid-cols-5 gap-5 sm:gap-8">
          {/* Order Summary */}
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="bg-blush-light rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-crimson/10 sticky top-24">
              <h2 className="font-display text-crimson text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4">Order Summary</h2>
              <div className="space-y-2 sm:space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-2.5 sm:gap-3 py-1.5 sm:py-2 border-b border-crimson/5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-crimson/10 flex-shrink-0">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center"><ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-crimson/30" /></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-crimson text-[11px] sm:text-xs font-bold truncate">{item.name}</p>
                      <p className="font-body text-crimson/60 text-[10px] sm:text-xs">Qty: {item.quantity} · Rs. {(item.price * item.quantity).toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-crimson/10">
                <span className="font-display text-crimson text-xs sm:text-sm font-bold uppercase">Total</span>
                <span className="font-display text-crimson text-base sm:text-lg font-bold">Rs. {totalPrice().toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          {/* Delivery + Payment */}
          <div className="md:col-span-3 order-1 md:order-2 space-y-5 sm:space-y-6">
            {/* Delivery */}
            <div className="bg-blush-light rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-crimson/10">
              <h2 className="font-display text-crimson text-sm sm:text-base font-bold uppercase tracking-wider mb-4">Delivery</h2>
              <div className="space-y-3">
                <div className="relative">
                  <label className="absolute left-4 top-1.5 text-[10px] uppercase tracking-wider text-crimson/50 font-body">Country/Region</label>
                  <select
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className={`${inputClass} pt-6 pb-2 appearance-none`}
                  >
                    <option>India</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name" className={inputClass} />
                  <input value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" className={inputClass} />
                </div>

                <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Address" className={inputClass} />
                <input value={form.apartment} onChange={(e) => setForm({ ...form, apartment: e.target.value })} placeholder="Apartment, suite, etc. (optional)" className={inputClass} />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="City" className={inputClass} />
                  <select
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className={`${inputClass} appearance-none ${!form.state ? "text-crimson/40" : ""}`}
                  >
                    <option value="">State</option>
                    {INDIAN_STATES.map((s) => <option key={s} value={s} className="text-crimson">{s}</option>)}
                  </select>
                  <input value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} placeholder="PIN code" className={inputClass} />
                </div>

                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className={inputClass} />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-blush-light rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-crimson/10">
              <h2 className="font-display text-crimson text-sm sm:text-base font-bold uppercase tracking-wider mb-1">Payment</h2>
              <p className="font-body text-crimson/60 text-xs mb-4">All transactions are secure and encrypted.</p>

              <div className="space-y-2.5">
                <label className={`block rounded-xl border-2 transition-colors cursor-pointer ${form.payment === "razorpay" ? "border-crimson bg-crimson/5" : "border-crimson/15 bg-blush"}`}>
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${form.payment === "razorpay" ? "border-crimson" : "border-crimson/30"}`}>
                        {form.payment === "razorpay" && <div className="w-2 h-2 rounded-full bg-crimson" />}
                      </div>
                      <span className="font-body text-crimson text-sm font-semibold">Razorpay Secure (UPI, Cards, Wallets)</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold text-crimson/60">
                      <span className="px-1.5 py-0.5 rounded bg-crimson/10">UPI</span>
                      <span className="px-1.5 py-0.5 rounded bg-crimson/10">VISA</span>
                      <span className="px-1.5 py-0.5 rounded bg-crimson/10">MC</span>
                      <span className="px-1.5 py-0.5 rounded bg-crimson/10">+18</span>
                    </div>
                  </div>
                  <input type="radio" name="payment" value="razorpay" checked={form.payment === "razorpay"} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="hidden" />
                  {form.payment === "razorpay" && (
                    <div className="px-4 pb-4 pt-1 font-body text-crimson/70 text-xs">
                      You'll be redirected to Razorpay Secure (UPI, Cards, Wallets) to complete your purchase.
                    </div>
                  )}
                </label>

                <label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${form.payment === "cod" ? "border-crimson bg-crimson/5" : "border-crimson/15 bg-blush"}`}>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${form.payment === "cod" ? "border-crimson" : "border-crimson/30"}`}>
                    {form.payment === "cod" && <div className="w-2 h-2 rounded-full bg-crimson" />}
                  </div>
                  <span className="font-body text-crimson text-sm font-semibold">Cash on Delivery</span>
                  <input type="radio" name="payment" value="cod" checked={form.payment === "cod"} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="hidden" />
                </label>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={placing || !formValid}
              className="w-full bg-crimson text-blush font-display font-bold text-xs sm:text-sm uppercase tracking-widest py-4 rounded-full hover:bg-crimson-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {placing ? "Placing Order..." : form.payment === "razorpay" ? "Pay Now" : "Place Order"}
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
