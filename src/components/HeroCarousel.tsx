import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroMatchaBg from "@/assets/hero-matcha-bg.png";
import heroCafeStorefront from "@/assets/hero-cafe-storefront.png";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % 2), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-crimson">
      <AnimatePresence mode="wait">
        {current === 0 ? (
          <motion.div
            key="matcha"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative min-h-[70vh] md:min-h-[80vh] flex items-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroMatchaBg})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 px-6 md:px-16 py-12 max-w-2xl">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-display text-blush text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
                style={{ textTransform: "none" }}
              >
                Matcha, But Make It Premium
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-body text-blush/80 text-base md:text-lg mb-8 max-w-md tracking-wide"
                style={{ textTransform: "none" }}
              >
                First Spring Harvest | Stone Milled | Smooth & Creamy
              </motion.p>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                href="#"
                className="inline-block bg-blush text-crimson font-display font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-blush-dark transition-colors uppercase tracking-wider"
              >
                Shop Matcha
              </motion.a>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="cafe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-crimson"
          >
            <div className="relative z-10 w-full flex flex-col md:flex-row items-center px-6 md:px-16 py-12 gap-8 md:gap-12">
              {/* Left text */}
              <div className="flex-1 max-w-lg">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-display text-blush text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
                >
                  Experience Latcha IRL here in Bangalore, JP Nagar
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="font-body text-blush/80 text-base md:text-lg mb-8 max-w-md tracking-wide"
                  style={{ textTransform: "none" }}
                >
                  Matcha your way to our flagship store with your besties
                </motion.p>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  href="/menu"
                  className="inline-block bg-blush text-crimson font-display font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-blush-dark transition-colors uppercase tracking-wider"
                >
                  Check Menu
                </motion.a>
              </div>
              {/* Right image */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex-1 flex justify-center md:justify-end"
              >
                <img
                  src={heroCafeStorefront}
                  alt="Latcha café storefront"
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-md md:max-w-lg rounded-2xl object-cover shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + 2) % 2)}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-blush/20 hover:bg-blush/40 text-blush rounded-full p-2 transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % 2)}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-blush/20 hover:bg-blush/40 text-blush rounded-full p-2 transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-blush w-8" : "bg-blush/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
