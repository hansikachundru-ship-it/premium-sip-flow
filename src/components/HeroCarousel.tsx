import heroLanding from "@/assets/hero-landing.png";

const HeroCarousel = () => {
  return (
    <section className="relative overflow-hidden bg-crimson h-[55vh] sm:h-[65vh] md:h-[80vh]">
      <img
        src={heroLanding}
        alt="Latcha hero"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroCarousel;
