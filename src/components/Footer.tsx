import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import latchaLogoFooter from "@/assets/latcha-logo-footer.png";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Wave divider */}
      <div className="bg-blush -mb-px overflow-hidden">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: '50px' }}>
          <path
            d="M0,60 C180,90 360,30 540,60 C720,90 900,30 1080,60 C1260,90 1440,50 1440,50 L1440,100 L0,100 Z"
            fill="#9E272D"
          />
          <path
            d="M0,70 C180,100 360,40 540,70 C720,100 900,40 1080,70 C1260,100 1440,60 1440,60 L1440,100 L0,100 Z"
            fill="#B22F36"
          />
        </svg>
      </div>

      <div className="text-blush py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16 xl:px-20" style={{ backgroundColor: '#B22F36' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <img src={latchaLogoFooter} alt="Latcha" className="h-12 sm:h-14 md:h-16 w-auto object-contain mb-4 sm:mb-5" />
              <p className="font-body text-blush/70 text-sm sm:text-[15px] leading-relaxed">
                India's 1st Premium Matcha & Cafe Chain. Sourced from Uji, Japan. Crafted with intention. Served with grace.
              </p>
            </div>

            {/* About */}
            <div>
              <h4 className="font-display text-[13px] sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 sm:mb-5">About</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {["Shop", "Matcha", "Accessories", "Hampers", "Menu", "Café"].map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-blush/70 text-sm sm:text-[15px] hover:text-blush transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-display text-[13px] sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 sm:mb-5">Information</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {["About Us", "Terms of Service", "Shipping & Returns", "Refund Policy", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-blush/70 text-sm sm:text-[15px] hover:text-blush transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-display text-[13px] sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 sm:mb-5">Contact Us</h4>
              <div className="space-y-2.5 sm:space-y-3">
                <a href="mailto:info@tbbagency.com" className="flex items-center gap-2.5 font-body text-blush/70 text-sm sm:text-[15px] hover:text-blush transition-colors">
                  <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" /> info@tbbagency.com
                </a>
                <a href="tel:+919346040150" className="flex items-center gap-2.5 font-body text-blush/70 text-sm sm:text-[15px] hover:text-blush transition-colors">
                  <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0" /> +91 9346040150
                </a>
                <p className="flex items-start gap-2.5 font-body text-blush/70 text-sm sm:text-[15px]">
                  <MapPin className="w-4 h-4 sm:w-[18px] sm:h-[18px] mt-0.5 flex-shrink-0" />
                  <span>Latcha JP Nagar, Outer Ring Rd, beside Typsy Bull, Rose Garden, JP Nagar Phase 6, J. P. Nagar, Bengaluru, Karnataka 560078</span>
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4 sm:mt-5">
                <a href="https://www.instagram.com/siplatcha" target="_blank" rel="noopener noreferrer" className="bg-blush/10 hover:bg-blush/20 rounded-full p-2.5 sm:p-3 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </a>
                <a href="https://www.instagram.com/siplatcha" target="_blank" rel="noopener noreferrer" className="font-body text-blush/70 text-sm sm:text-[15px] hover:text-blush transition-colors">
                  @siplatcha
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blush/20 pt-6 sm:pt-8 text-center">
            <p className="font-body text-blush/50 text-xs sm:text-sm">
              2026 Latcha. All rights reserved. Made with love and matcha.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
