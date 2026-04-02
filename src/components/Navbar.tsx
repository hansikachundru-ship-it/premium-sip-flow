import { useState, useEffect } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import latchaLogoHero from "@/assets/latcha-logo-hero.png";
import { useCartStore } from "@/stores/cartStore";
import SearchOverlay from "@/components/SearchOverlay";
import CartDrawer from "@/components/CartDrawer";
import AuthModal from "@/components/AuthModal";
import { supabase } from "@/integrations/supabase/client";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Matcha", href: "/shop#matcha" },
  { label: "Menu", href: "/menu" },
  { label: "Café", href: "/cafe" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { openCart, totalItems } = useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleProfileClick = () => {
    if (user) {
      navigate("/account");
    } else {
      setAuthOpen(true);
    }
  };

  const itemCount = totalItems();

  return (
    <>
      {/* Hero Header Band */}
      <div className="bg-crimson relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-4 flex items-end justify-between">
          {/* Left text */}
          <p className="hidden md:block text-blush/70 text-[10px] uppercase tracking-[0.2em] leading-snug font-body max-w-[160px] font-light pb-1">
            India's 1st Premium Matcha<br />& Café Chain
          </p>

          {/* Center logo */}
          <a href="/" className="flex items-center justify-center -mt-1 sm:-mt-2">
            <img
              src={latchaLogoHero}
              alt="Latcha"
              className="h-10 sm:h-14 md:h-20 lg:h-24 w-auto object-contain mix-blend-lighten"
            />
          </a>

          {/* Right - icons + text */}
          <div className="flex items-end gap-2 sm:gap-4 pb-0.5 sm:pb-1">
            <p className="hidden md:block text-blush/70 text-[10px] uppercase tracking-[0.2em] leading-snug font-body text-right max-w-[160px] font-light pb-0">
              Sourced from Uji,<br />Japan. AAA Grade.
            </p>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button onClick={() => setSearchOpen(true)} className="text-blush/70 hover:text-blush transition-colors" aria-label="Search">
                <Search className="w-4 h-4" />
              </button>
              <button onClick={handleProfileClick} className="text-blush/70 hover:text-blush transition-colors hidden md:block" aria-label="Account">
                <User className="w-4 h-4" />
              </button>
              <button onClick={openCart} className="text-blush/70 hover:text-blush transition-colors relative" aria-label="Cart">
                <ShoppingBag className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-blush text-crimson text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center animate-in zoom-in-50 duration-200">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blush sticky top-0 z-50 border-t border-crimson/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Mobile toggle */}
          <div className="md:hidden flex items-center justify-center h-10">
            <button
              className="text-crimson"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center justify-center gap-8 h-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-crimson text-[12px] font-medium uppercase tracking-[0.2em] hover:text-crimson-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-crimson after:transition-all hover:after:w-full font-display"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-blush border-t border-crimson/15 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-crimson text-sm font-medium uppercase tracking-[0.15em] hover:text-crimson-dark transition-colors font-display py-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { handleProfileClick(); setMobileOpen(false); }}
              className="block text-crimson text-sm font-medium uppercase tracking-[0.15em] hover:text-crimson-dark transition-colors font-display py-1"
            >
              {user ? "My Account" : "Log In"}
            </button>
          </div>
        )}
      </nav>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Navbar;
