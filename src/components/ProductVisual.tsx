import { motion } from "framer-motion";
import heroProduct from "@/assets/hero-product.png";
import heroDrinks from "@/assets/hero-drinks.png";
import heroHampers from "@/assets/hero-hampers.png";

const ProductVisual = () => {
  return (
    <section className="py-20 md:py-28 bg-blush-light overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-crimson text-3xl md:text-5xl font-extrabold mb-4"
        >
          green never felt this good 💚
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-charcoal/60 text-base md:text-lg mb-12 max-w-lg mx-auto"
        >
          crafted in Uji. sipped in India. obsessed over everywhere.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { img: heroProduct, label: "Matcha Powder" },
            { img: heroDrinks, label: "Matcha Drinks" },
            { img: heroHampers, label: "Gift Hampers" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group"
            >
              <div className="bg-blush rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-display text-charcoal text-lg font-bold mt-4">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductVisual;
