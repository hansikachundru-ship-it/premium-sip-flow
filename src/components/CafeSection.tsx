import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink, Wifi } from "lucide-react";

import cafeHero from "@/assets/cafe-hero.jpg";
import cafeGallery5 from "@/assets/cafe-gallery-5.png";
import cafeGallery6 from "@/assets/cafe-gallery-6.png";
import cafeGallery7 from "@/assets/cafe-gallery-7.png";
import cafeGallery8 from "@/assets/cafe-gallery-8.png";
import cafeGallery9 from "@/assets/cafe-gallery-9.png";
import cafeGallery12 from "@/assets/cafe-gallery-12.png";
import cafeGallery14 from "@/assets/cafe-gallery-14.png";
import cafeGallery15 from "@/assets/cafe-gallery-15.png";
import cafeGallery17 from "@/assets/cafe-gallery-17.png";
import cafeGallery18 from "@/assets/cafe-gallery-18.png";
import cafeGallery20 from "@/assets/cafe-gallery-20.png";

const galleryImages = [
  { src: cafeGallery12, alt: "Barista whisking matcha" },
  { src: cafeGallery6, alt: "Matcha drinks and soft serve on table" },
  { src: cafeGallery7, alt: "Matcha latte with pink mirror" },
  { src: cafeGallery14, alt: "Barista pouring matcha at counter" },
  { src: cafeGallery17, alt: "Two matcha lattes on red counter" },
  { src: cafeGallery15, alt: "Pink strawberry soft serve close-up" },
  { src: cafeGallery9, alt: "Customer with matcha drinks and flowers" },
  { src: cafeGallery18, alt: "Customer enjoying matcha in cafe" },
  { src: cafeGallery20, alt: "Vanilla soft serve with sprinkles" },
  { src: cafeGallery5, alt: "Barista pouring matcha latte" },
  { src: cafeGallery8, alt: "Cute cafe wall decor and shelves" },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Latcha+JP+Nagar+Bengaluru";

const CafeSection = () => {
  return (
    <section className="bg-blush">
      {/* Store Locator Header */}
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-12 md:pt-32 md:pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-5xl font-extrabold text-crimson mb-8 text-center"
        >
          Our Cafe
        </motion.h1>

        {/* Store Locator Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-lg border border-border bg-card min-h-[450px]">
          {/* Left Panel - Store Info */}
          <div className="md:col-span-2 p-6 flex flex-col">
            <p className="font-display text-sm font-bold text-foreground/60 uppercase tracking-wider mb-4">
              Nearby (1)
            </p>

            {/* Store Card */}
            <div className="rounded-xl border border-border bg-blush/50 p-4 mb-4">
              <div className="flex gap-4">
                <img
                  src={cafeHero}
                  alt="Latcha Cafe JP Nagar"
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    JP Nagar
                  </h3>
                  <p className="font-body text-xs text-foreground/60 mt-0.5">
                    Bengaluru
                  </p>
                  <p className="font-body text-xs font-semibold text-matcha mt-1">
                    Open
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-foreground/40">
                    <Wifi className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-foreground/50" />
                  <span className="font-body text-xs text-foreground/60">JP Nagar, Bengaluru</span>
                </div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-crimson text-blush font-display text-xs font-bold px-4 py-2 rounded-full hover:bg-crimson-dark transition-colors"
                >
                  Show Directions
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="rounded-xl bg-crimson p-5 text-blush mt-auto">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-4 w-4 text-blush/80" />
                <h4 className="font-display text-sm font-bold uppercase tracking-wider">
                  Opening Hours
                </h4>
              </div>
              <div className="space-y-2 font-body">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide">
                    Monday – Sunday
                  </span>
                  <span className="text-xs text-blush/90">
                    11:00 AM – 1:00 AM
                  </span>
                </div>
                <p className="text-[10px] text-blush/50">
                  Open every day, including holidays
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Map */}
          <div className="md:col-span-3 relative min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d77.59!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzM2LjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Latcha Cafe Location"
            />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 block md:hidden"
              aria-label="Open directions in Google Maps"
            />
          </div>
        </div>
      </div>

      {/* Auto-scrolling Gallery */}
      <div className="py-10 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-display text-2xl font-extrabold text-crimson md:text-4xl"
        >
          Inside The Cafe
        </motion.h2>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blush to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blush to-transparent z-10 pointer-events-none" />
          <div
            className="flex gap-4 animate-marquee-gallery"
            style={{ width: "max-content" }}
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="h-60 w-52 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg md:h-80 md:w-64"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeSection;
