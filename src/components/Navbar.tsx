import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import latchaLogo from "@/assets/latcha-logo.png";

const navLinks = ["Shop", "Matcha", "Accessories", "Hampers", "Menu", "Café"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-blush-light sticky top-0 z-50 border-b border-blush-dark/20">
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
          <img src={latchaLogo} alt="Latcha" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="font-body text-charcoal text-sm font-medium hover:text-crimson transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-crimson after:transition-all hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-charcoal hover:text-crimson transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-charcoal hover:text-crimson transition-colors hidden md:block" aria-label="Account">
            <User className="w-5 h-5" />
          </button>
          <button className="text-charcoal hover:text-crimson transition-colors relative" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-crimson text-blush text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-blush-light border-t border-blush-dark/20 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block font-body text-charcoal text-base font-medium hover:text-crimson transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
