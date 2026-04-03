import { motion } from "framer-motion";
import heroProduct from "@/assets/hero-product.png";
import heroDrinks from "@/assets/hero-drinks.png";

const sections = [
  {
    title: "MATCHA",
    subtitle: "Latcha's Signature from Uji, Japan",
    desc: "Latcha's signature Matcha is a blend of Uji's native cultivars Okumidori and Samidori. shade-grown until the leaves are dense with chlorophyll, sweetness, and that deep umami character you can't fake. Stone-milled fresh in small batches and tested to ensure the highest quality and freshness in every cup",
    details: [
      "First harvest stone ground",
      "No additives or sweeteners",
      "Rich in L-theanine and antioxidants",
      "Vibrant green colour guaranteed",
      "Perfect for usucha, koicha and modern Lattes",
    ],
    image: heroProduct,
    cta: "Shop Matcha",
    reverse: false,
  },
  {
    title: "MATCHA DRINKS",
    subtitle: "Crafted to Perfection",
    desc: "We offer a range of signature matcha drinks crafted to perfection. From classic iced lattes to indulgent cloud lattes, every sip is smooth, bold, and made with real Latcha's Signature Uji Matcha. Your new daily ritual starts here. Each drink is carefully balanced for the perfect blend of flavour, texture, and that unmistakable matcha goodness.",
    details: [
      "Speciality Premium Matcha Latte",
      "Made with Latcha's Signature Uji Matcha",
      "Customisable sweetness levels",
      "Milk Options: Oat Milk made with Australian Oats & Regular Milk",
      "Seasonal specials and signatures",
    ],
    image: heroDrinks,
    cta: "Explore Drinks",
    reverse: true,
  },
];

const ShopSection = () => {
  return (
    <section className="bg-blush">
      {sections.map((item) => (
        <div
          key={item.title}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: item.reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-20 xl:px-24 py-6 md:py-8 ${
              item.reverse ? "md:order-2" : "md:order-1"
            }`}
          >
            <p className="font-body text-crimson/60 text-sm sm:text-base md:text-lg uppercase tracking-widest mb-1.5 sm:mb-2">
              {item.subtitle}
            </p>
            <h2 className="font-display text-crimson text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide mb-3 sm:mb-4">
              {item.title}
            </h2>
            <p className="font-body text-charcoal/70 text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-5 text-justify">
              {item.desc}
            </p>
            <ul className="font-body text-charcoal/70 text-base sm:text-lg md:text-xl space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 max-w-md">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson/40 flex-shrink-0 mt-1.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <a
              href={item.cta === "Explore Drinks" ? "/menu" : item.cta === "Shop Merch" ? "/shop#merch" : "/shop#matcha"}
              className="inline-block border-2 border-crimson text-crimson font-display text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest px-5 sm:px-6 py-2.5 sm:py-3 hover:bg-crimson hover:text-blush transition-colors w-fit"
            >
              {item.cta}
            </a>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`overflow-hidden ${
              item.reverse ? "md:order-1" : "md:order-2"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[420px] lg:min-h-[480px]"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ShopSection;
