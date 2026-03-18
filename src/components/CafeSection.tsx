import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { useRef } from "react";

import cafeHero from "@/assets/cafe-hero.jpg";
import cafeGallery1 from "@/assets/cafe-gallery-1.jpg";
import cafeGallery2 from "@/assets/cafe-gallery-2.jpg";
import cafeGallery3 from "@/assets/cafe-gallery-3.jpg";
import cafeGallery4 from "@/assets/cafe-gallery-4.jpg";

const galleryImages = [
  { src: cafeGallery1, alt: "Friends enjoying matcha together" },
  { src: cafeGallery2, alt: "Matcha latte art and pastries" },
  { src: cafeGallery3, alt: "Cozy cafe interior ambience" },
  { src: cafeGallery4, alt: "Capturing the matcha moment" },
];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Latcha+JP+Nagar+Bengaluru";

const flagshipPoints = [
  "Instagram worthy",
  "Social and shareable",
  "Visually striking",
  "Culturally inspired",
];

const CafeSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-blush-light">
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
            className="font-body text-blush/80 text-base md:text-lg mt-1"
          >
            JP Nagar, Bengaluru
          </motion.p>
        </div>
      </motion.div>

      {/* Scrollable Gallery */}
      <div className="py-10 md:py-16 px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-crimson text-sm uppercase tracking-[0.3em] mb-6 text-center"
        >
          Inside the cafe
        </motion.p>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 w-64 h-72 md:w-80 md:h-96 snap-center rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Info Grid: Map + Hours + Flagship */}
      <div className="max-w-6xl mx-auto px-6 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Google Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg bg-card border border-border"
        >
          <div className="relative h-52 md:h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8!2d77.59!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzM2LjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Latcha Cafe Location"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-crimson" />
              <span className="font-body text-sm text-foreground">
                JP Nagar, Bengaluru
              </span>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-crimson hover:text-crimson-dark transition-colors uppercase tracking-wider"
            >
              Open in Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Opening Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl shadow-lg bg-crimson text-blush p-8 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-blush/80" />
            <h3 className="font-display text-xl font-bold uppercase tracking-wider">
              Opening Hours
            </h3>
          </div>
          <div className="space-y-3 font-body">
            <div className="flex justify-between items-center border-b border-blush/20 pb-3">
              <span className="font-semibold text-sm uppercase tracking-wide">
                Monday to Sunday
              </span>
              <span className="text-sm text-blush/90">
                11:00 AM to 1:00 AM
              </span>
            </div>
            <p className="text-xs text-blush/60 pt-1">
              Open every day, including holidays
            </p>
          </div>
        </motion.div>

        {/* Flagship Store Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 rounded-2xl bg-blush p-8 md:p-12 shadow-sm border border-border"
        >
          <p className="font-display text-crimson text-xs uppercase tracking-[0.3em] mb-2">
            Interiors
          </p>
          <h2 className="font-display text-crimson text-2xl md:text-4xl font-extrabold mb-6">
            Our Flagship Store, Bengaluru
          </h2>
          <div className="bg-blush-light rounded-xl p-6 md:p-8">
            <p className="font-body text-foreground/80 text-base mb-4">
              Latcha is designed to be:
            </p>
            <ul className="space-y-2.5">
              {flagshipPoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 font-body text-foreground/70 text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CafeSection;
