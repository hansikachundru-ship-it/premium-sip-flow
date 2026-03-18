import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroProduct from "@/assets/hero-product.png";
import heroHampers from "@/assets/hero-hampers.png";
import heroDrinks from "@/assets/hero-drinks.png";

const slides = [
  {
    image: heroProduct,
    title: "matcha, but make it ✨premium✨",
    subtitle: "AAA Grade Uji Reserve — First Harvest, No Bitterness",
    cta: "Shop Matcha",
  },
  {
    image: heroHampers,
    title: "gift the green goodness 🎁",
    subtitle: "Curated hampers that slap — perfect for every occasion",
    cta: "Shop Hampers",
  },
  {
    image: heroDrinks,
    title: "your new obsession just dropped 🍵",
    subtitle: "Iced, hot, or blended — matcha your way, bestie",
    cta: "View Menu",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-crimson">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col md:flex-row items-center min-h-[70vh] md:min-h-[80vh]"
        >
          {/* Text */}
          <div className="flex-1 px-6 md:px-16 py-12 md:py-0 text-center md:text-left order-2 md:order-1">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-display text-blush text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-body text-blush/80 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              href="#"
              className="inline-block bg-blush text-crimson font-display font-bold text-sm md:text-base px-8 py-3.5 rounded-full hover:bg-blush-dark transition-colors uppercase tracking-wider"
            >
              {slides[current].cta}
            </motion.a>
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center p-8 md:p-12 order-1 md:order-2">
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              src={slides[current].image}
              alt={slides[current].title}
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl animate-float"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nav arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-blush/20 hover:bg-blush/40 text-blush rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-blush/20 hover:bg-blush/40 text-blush rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
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
