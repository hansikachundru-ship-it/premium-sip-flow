import { motion } from "framer-motion";
import heroProduct from "@/assets/hero-product.png";
import heroDrinks from "@/assets/hero-drinks.png";
import heroHampers from "@/assets/hero-hampers.png";

const sections = [
  {
    title: "MATCHA",
    subtitle: "Ceremonial Grade from Uji, Japan",
    desc: "Premium AAA ceremonial grade matcha, sourced directly from Uji, Japan. Smooth, vibrant, and crafted for everyday drinking. Whether you whisk it traditional or shake it iced, this is matcha the way it's meant to be. Every batch is carefully tested to ensure the highest quality and freshest flavour in every cup.",
    details: [
      "First harvest stone ground",
      "No additives or sweeteners",
      "Rich in L theanine and antioxidants",
      "Vibrant green colour guaranteed",
      "Perfect for lattes and whisking",
    ],
    image: heroProduct,
    cta: "Shop Matcha",
    reverse: false,
  },
  {
    title: "MATCHA DRINKS",
    subtitle: "Crafted to Perfection",
    desc: "We offer a range of signature matcha drinks crafted to perfection. From classic iced lattes to indulgent cloud lattes, every sip is smooth, bold, and made with real ceremonial grade matcha. Your new daily ritual starts here. Each drink is carefully balanced for the perfect blend of flavour, texture, and that unmistakable matcha goodness.",
    details: [
      "Iced and hot options available",
      "Made with real ceremonial matcha",
      "Customisable sweetness levels",
      "Oat, almond, and soy milk options",
      "Seasonal specials and signatures",
    ],
    image: heroDrinks,
    cta: "Explore Drinks",
    reverse: true,
  },
  {
    title: "GIFT HAMPERS",
    subtitle: "Curated for Every Occasion",
    desc: "The perfect matcha gift for every occasion. Our curated hampers bring together premium matcha, accessories, and treats, beautifully packed and ready to impress. Give the gift of good matcha. Whether it's a birthday, anniversary, or just because, our hampers are designed to make someone's day a whole lot greener.",
    details: [
      "Premium packaging included",
      "Personalised gift notes",
      "Multiple hamper sizes available",
      "Accessories and treats included",
      "Perfect for any celebration",
    ],
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
          className={`grid grid-cols-1 md:grid-cols-2`}
        >
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: item.reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col justify-center px-8 md:px-12 lg:px-16 py-6 md:py-8 ${
              item.reverse ? "md:order-2" : "md:order-1"
            }`}
          >
            <p className="font-body text-crimson/60 text-xs md:text-sm uppercase tracking-widest mb-2">
              {item.subtitle}
            </p>
            <h2 className="font-display text-crimson text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide mb-4">
              {item.title}
            </h2>
            <p className="font-body text-charcoal/70 text-sm md:text-base leading-relaxed mb-5 max-w-md">
              {item.desc}
            </p>
            <ul className="font-body text-charcoal/60 text-xs md:text-sm space-y-1.5 mb-6 max-w-md">
              {item.details.map((detail) => (
                <li key={detail} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson/40 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block border-2 border-crimson text-crimson font-display text-xs md:text-sm font-bold uppercase tracking-widest px-6 py-3 hover:bg-crimson hover:text-blush transition-colors w-fit"
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
              className="w-full h-full object-cover aspect-square md:aspect-auto md:min-h-[420px] lg:min-h-[480px]"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ShopSection;
