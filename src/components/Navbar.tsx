import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import latchaLogo from "@/assets/latcha-logo-original.png";

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
      {/* Crimson divider line */}
      <div className="h-[3px] bg-crimson" />
      <nav className="bg-blush sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-crimson"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={latchaLogo} alt="Latcha" className="h-8 md:h-10 w-auto object-contain" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-crimson text-[13px] font-medium uppercase tracking-[0.15em] hover:text-crimson-dark transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-crimson after:transition-all hover:after:w-full"
                style={{ fontFamily: "var(--font-nav)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-crimson hover:text-crimson-dark transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-crimson hover:text-crimson-dark transition-colors hidden md:block" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="text-crimson hover:text-crimson-dark transition-colors relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-crimson text-blush text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-blush border-t border-crimson/20 px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-crimson text-sm font-medium uppercase tracking-[0.15em] hover:text-crimson-dark transition-colors"
                style={{ fontFamily: "var(--font-nav)" }}
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
