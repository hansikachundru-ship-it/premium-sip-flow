import heroLanding from "@/assets/hero-landing.png";

const HeroCarousel = () => {
  return (
    <section className="relative overflow-hidden bg-crimson">
      <img
        src={heroLanding}
        alt="Latcha hero"
        className="w-full h-auto block md:h-[80vh] md:object-cover"
      />
    </section>
  );
};

export default HeroCarousel;
