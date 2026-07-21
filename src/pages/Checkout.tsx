import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useCartStore } from "@/stores/cartStore";
import { createShopifyCheckout } from "@/lib/shopify";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import { ShoppingBag, Lock, ExternalLink } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCartStore();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);
  const [placing, setPlacing] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) setShowAuth(false);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleContinue = async () => {
    if (!user) return;
    setPlacing(true);
    try {
      const missing = items.filter((i) => !i.variantId);
      if (missing.length > 0) {
        toast.error(`Not available for checkout yet: ${missing.map((i) => i.name).join(", ")}`);
        return;
      }
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

  if (items.length === 0) {
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

        {!user ? (
          <div className="bg-blush-light rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-crimson/10 text-center">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-crimson/40 mx-auto mb-3" />
            <h2 className="font-display text-crimson text-base sm:text-lg font-bold uppercase tracking-wider mb-1.5">Sign In to Continue</h2>
            <p className="font-body text-crimson/60 text-xs sm:text-sm mb-5">Please sign in or create an account to continue to secure checkout.</p>
            <button
              onClick={() => setShowAuth(true)}
              className="bg-crimson text-blush font-display text-[11px] sm:text-xs font-bold uppercase tracking-widest px-8 sm:px-10 py-3 sm:py-3.5 rounded-full hover:bg-crimson-dark transition-colors"
            >
              Sign In / Sign Up
            </button>
          </div>
        ) : (
          <div className="bg-blush-light rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-crimson/10 text-center">
            <p className="font-body text-crimson/70 text-xs sm:text-sm mb-5">
              You'll be redirected to our secure Shopify checkout to enter your delivery address and complete payment. Razorpay Secure (UPI, Cards, Wallets) and other options are available there.
            </p>
            <button
              onClick={handleContinue}
              disabled={placing}
              className="inline-flex items-center gap-2 bg-crimson text-blush font-display font-bold text-xs sm:text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-crimson-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {placing ? "Redirecting..." : (<><ExternalLink className="w-4 h-4" /> Continue to Secure Checkout</>)}
            </button>
          </div>
        )}
      </main>
      <Footer />
      <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
    </div>
  );
};

export default Checkout;
