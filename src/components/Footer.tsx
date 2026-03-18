import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Curvy wave divider */}
      <div className="bg-blush">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="#B22F36"
          />
        </svg>
      </div>

      <div className="bg-crimson text-blush pt-8 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="font-display text-2xl font-extrabold tracking-wider mb-4">LATCHA</h3>
              <p className="font-body text-blush/70 text-sm leading-relaxed">
                India's 1st Premium Matcha Brand. Sourced from Uji, Japan. Crafted with intention. Sipped with love 💚
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] mb-4">Shop</h4>
              <ul className="space-y-2">
                {["Matcha", "Accessories", "Merch", "Hampers", "Bundles"].map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-blush/70 text-sm hover:text-blush transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] mb-4">Information</h4>
              <ul className="space-y-2">
                {["About Us", "Terms of Service", "Shipping & Returns", "Refund Policy", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-blush/70 text-sm hover:text-blush transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] mb-4">Reach Us</h4>
              <div className="space-y-3">
                <a href="mailto:hello@latcha.in" className="flex items-center gap-2 font-body text-blush/70 text-sm hover:text-blush transition-colors">
                  <Mail className="w-4 h-4" /> hello@latcha.in
                </a>
                <a href="tel:+919769055679" className="flex items-center gap-2 font-body text-blush/70 text-sm hover:text-blush transition-colors">
                  <Phone className="w-4 h-4" /> +91-9769055679
                </a>
                <p className="flex items-start gap-2 font-body text-blush/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  309, Parvati Premises, Sun Mill Complex, Lower Parel (W), Mumbai 400013
                </p>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="https://instagram.com/latcha" target="_blank" rel="noopener noreferrer" className="bg-blush/10 hover:bg-blush/20 rounded-full p-2.5 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blush/20 pt-6 text-center">
            <p className="font-body text-blush/50 text-xs">
              © 2026 Latcha. All rights reserved. Made with 💚 and matcha.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
