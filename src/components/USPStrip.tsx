const usps = [
  "NO ARTIFICIAL COLOURS",
  "NO PRESERVATIVES",
  "NO ADDED SUGAR",
  "VEGAN & GLUTEN FREE",
  "100% ORGANIC",
  "AAA GRADE",
  "SOURCED FROM UJI, JAPAN",
  "FIRST HARVEST",
];

const USPStrip = () => {
  const items = [...usps, ...usps];

  return (
    <div className="bg-matcha overflow-hidden py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((usp, i) => (
          <span key={i} className="font-display text-blush text-sm md:text-base font-bold tracking-[0.15em] uppercase mx-6 flex items-center gap-3">
            {usp}
            <span className="text-blush/40">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default USPStrip;
