import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import latchaLogoHero from "@/assets/latcha-logo-hero.png";

const navLinks = [
  { label: "Shop", href: "#" },
  { label: "Matcha", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Hampers", href: "#" },
  { label: "Menu", href: "/menu" },
  { label: "Café", href: "/cafe" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Hero Header Band */}
      <div className="bg-crimson relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 md:py-6 flex items-center justify-between">
          {/* Left text */}
          <p className="hidden md:block text-blush/70 text-[10px] uppercase tracking-[0.2em] leading-snug font-body max-w-[180px]">
            India's 1st Premium Matcha<br />& Café Chain
          </p>

          {/* Center logo */}
          <a href="/" className="flex items-center justify-center">
            <img
              src={latchaLogoHero}
              alt="Latcha"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain"
            />
          </a>

          {/* Right - icons + text */}
          <div className="flex items-center gap-4">
            <p className="hidden md:block text-blush/70 text-[10px] uppercase tracking-[0.2em] leading-snug font-body text-right max-w-[180px]">
              Sourced from Uji,<br />Japan. AAA Grade.
            </p>
            <div className="flex items-center gap-3">
              <button className="text-blush/70 hover:text-blush transition-colors" aria-label="Search">
                <Search className="w-4 h-4" />
              </button>
              <button className="text-blush/70 hover:text-blush transition-colors hidden md:block" aria-label="Account">
                <User className="w-4 h-4" />
              </button>
              <button className="text-blush/70 hover:text-blush transition-colors relative" aria-label="Cart">
                <ShoppingBag className="w-4 h-4" />
                <span className="absolute -top-1.5 -right-1.5 bg-blush text-crimson text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  0
                </span>
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
                className="block text-crimson text-sm font-medium uppercase tracking-[0.15em] hover:text-crimson-dark transition-colors font-display"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
