import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import latchaLogo from "@/assets/latcha-logo.png";
import patternCrimson from "@/assets/pattern-crimson.png";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Curvy wave divider - tight like reference */}
      <div className="bg-blush -mb-px">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0 30C120 50 240 10 360 30C480 50 600 10 720 30C840 50 960 10 1080 30C1200 50 1320 10 1440 30V60H0V30Z"
            fill="#B22F36"
          />
        </svg>
      </div>

      <div
        className="text-blush pt-8 pb-12 px-6 relative"
        style={{
          backgroundColor: '#B22F36',
          backgroundImage: `url(${patternCrimson})`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <img src={latchaLogo} alt="Latcha" className="h-14 w-auto object-contain mb-4 brightness-0 invert" />
              <p className="font-body text-blush/70 text-sm leading-relaxed">
                India's 1st Premium Matcha & Cafe Chain. Sourced from Uji, Japan. ✿ Crafted with intention. Served with grace.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] mb-4">Shop</h4>
              <ul className="space-y-2">
                {["Shop", "Matcha", "Accessories", "Hampers", "Menu", "Café"].map((link) => (
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
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a href="mailto:info@tbbagency.com" className="flex items-center gap-2 font-body text-blush/70 text-sm hover:text-blush transition-colors">
                  <Mail className="w-4 h-4" /> info@tbbagency.com
                </a>
                <a href="tel:+919346040150" className="flex items-center gap-2 font-body text-blush/70 text-sm hover:text-blush transition-colors">
                  <Phone className="w-4 h-4" /> +91 9346040150
                </a>
                <p className="flex items-start gap-2 font-body text-blush/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Latcha JP Nagar, Outer Ring Rd, beside Typsy Bull, Rose Garden, JP Nagar Phase 6, J. P. Nagar, Bengaluru, Karnataka 560078
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.instagram.com/siplatcha" target="_blank" rel="noopener noreferrer" className="bg-blush/10 hover:bg-blush/20 rounded-full p-2.5 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/siplatcha" target="_blank" rel="noopener noreferrer" className="font-body text-blush/70 text-sm hover:text-blush transition-colors">
                  @siplatcha
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blush/20 pt-6 text-center">
            <p className="font-body text-blush/50 text-xs">
              2026 Latcha. All rights reserved. Made with love and matcha.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
