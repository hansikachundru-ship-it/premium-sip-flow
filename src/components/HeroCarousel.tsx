import { Link } from "react-router-dom";
import heroLanding from "@/assets/hero-landing.jpeg";

const HeroCarousel = () => {
  return (
    <section className="relative overflow-hidden bg-crimson">
      <img
        src={heroLanding}
        alt="Latcha premium Uji matcha lifestyle scene"
        className="w-full h-auto block md:h-[80vh] md:object-cover"
      />

      <div className="absolute inset-x-0 bottom-2 sm:bottom-3 md:bottom-4 flex justify-center pointer-events-none">
        <Link
          to="/shop"
          className="pointer-events-auto bg-blush text-crimson font-display uppercase tracking-[0.2em] text-[12px] sm:text-sm md:text-base px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-full hover:bg-crimson hover:text-blush transition-colors duration-300 shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default HeroCarousel;
