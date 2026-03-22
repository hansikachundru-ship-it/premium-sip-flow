import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";

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
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
      >
        <img
          src={cafeHero}
          alt="Latcha Cafe interior, warm and inviting matcha bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-display text-blush text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            The Latcha Cafe
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="font-body mt-1 text-base text-blush/80 md:text-lg"
          >
            JP Nagar, Bengaluru
          </motion.p>
        </div>
      </motion.div>

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
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blush to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
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

      {/* Info Grid: Map + Hours + Flagship */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 pb-16 md:grid-cols-2 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
        >
          <div className="relative h-52 md:h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d77.59!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzM2LjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              className="h-full w-full border-0 pointer-events-none"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Latcha Cafe Location"
            />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 block"
              aria-label="Open directions in Google Maps"
            />
          </div>
          <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-crimson" />
              <span className="font-body text-sm text-foreground">
                JP Nagar, Bengaluru
              </span>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-crimson transition-colors hover:text-crimson-dark"
            >
              Open in Google Maps
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-center rounded-2xl bg-crimson p-8 text-blush shadow-lg"
        >
          <div className="mb-6 flex items-center gap-3">
            <Clock className="h-5 w-5 text-blush/80" />
            <h3 className="font-display text-xl font-bold uppercase tracking-wider">
              Opening Hours
            </h3>
          </div>
          <div className="space-y-3 font-body">
            <div className="flex items-center justify-between border-b border-blush/20 pb-3">
              <span className="text-sm font-semibold uppercase tracking-wide">
                Monday to Sunday
              </span>
              <span className="text-sm text-blush/90">
                11:00 AM to 1:00 AM
              </span>
            </div>
            <p className="pt-1 text-xs text-blush/60">
              Open every day, including holidays
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CafeSection;
