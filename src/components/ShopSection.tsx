import { motion } from "framer-motion";
import heroProduct from "@/assets/hero-product.png";
import heroDrinks from "@/assets/hero-drinks.png";
import heroHampers from "@/assets/hero-hampers.png";

const sections = [
  {
    title: "MATCHA",
    desc: "Premium AAA ceremonial grade matcha, sourced directly from Uji, Japan. Smooth, vibrant, and crafted for everyday drinking. Whether you whisk it traditional or shake it iced, this is matcha the way it's meant to be.",
    image: heroProduct,
    cta: "Shop Matcha",
    reverse: false,
  },
  {
    title: "MATCHA DRINKS",
    desc: "We offer a range of signature matcha drinks crafted to perfection. From classic iced lattes to indulgent cloud lattes, every sip is smooth, bold, and made with real ceremonial grade matcha. Your new daily ritual starts here.",
    image: heroDrinks,
    cta: "Explore Drinks",
    reverse: true,
  },
  {
    title: "GIFT HAMPERS",
    desc: "The perfect matcha gift for every occasion. Our curated hampers bring together premium matcha, accessories, and treats — beautifully packed and ready to impress. Give the gift of good matcha.",
    image: heroHampers,
    cta: "Shop Hampers",
    reverse: false,
  },
];

const ShopSection = () => {
  return (
    <section className="bg-blush">
      {sections.map((item, i) => (
        <div
          key={item.title}
          className={`grid grid-cols-1 md:grid-cols-2 min-h-[420px] ${
            item.reverse ? "" : ""
          }`}
        >
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: item.reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col justify-center px-8 md:px-16 lg:px-20 py-12 md:py-16 ${
              item.reverse ? "md:order-2" : "md:order-1"
            }`}
          >
            <h2 className="font-display text-crimson text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide mb-4">
              {item.title}
            </h2>
            <p className="font-body text-charcoal/70 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              {item.desc}
            </p>
            <a
              href="#"
              className="inline-block border-2 border-charcoal text-charcoal font-display text-xs md:text-sm font-bold uppercase tracking-widest px-6 py-3 hover:bg-charcoal hover:text-blush transition-colors w-fit"
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
              className="w-full h-full object-cover min-h-[300px] md:min-h-[420px]"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ShopSection;
