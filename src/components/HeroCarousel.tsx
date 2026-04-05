import latchaCollection from "@/assets/latcha-collection.png";

const HeroCarousel = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={latchaCollection}
        alt="Latcha Collection"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default HeroCarousel;
