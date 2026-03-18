import { motion } from "framer-motion";

const categories = [
  {
    title: "Matcha Varieties",
    items: [
      { name: "Uji Matcha", price: "Rs.2,400", tag: "bestseller" },
      { name: "Yame Matcha", price: "Rs.1,800", tag: null },
      { name: "Nishio Matcha", price: "Rs.1,800", tag: "new" },
      { name: "Chill Trio Bundle", price: "Rs.5,730", tag: "save 10%" },
    ],
  },
  {
    title: "Accessories",
    items: [
      { name: "Takayama Chasen", price: "Rs.1,800", tag: null },
      { name: "Matcha Shaker", price: "Rs.999", tag: null },
      { name: "Resin Whisk", price: "Rs.999", tag: "popular" },
      { name: "Mini Chasen", price: "Rs.999", tag: null },
    ],
  },
  {
    title: "Merch",
    items: [
      { name: "Matcha Addict Cap", price: "Rs.1,299", tag: "hot" },
      { name: "ADAM Tote", price: "Rs.1,099", tag: null },
      { name: "Matcha Lover Tote", price: "Rs.879", tag: null },
      { name: "Superbrew Tote Bag", price: "Rs.599", tag: "budget pick" },
    ],
  },
];

const ShopSection = () => {
  return (
    <section className="py-20 md:py-28 bg-blush px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display text-matcha text-sm uppercase tracking-[0.3em] mb-3">
            another day, another matcha
          </p>
          <h2 className="font-display text-crimson text-3xl md:text-5xl font-extrabold">
            Shop the vibe
          </h2>
        </motion.div>

        {categories.map((cat, ci) => (
          <div key={cat.title} className="mb-14">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display text-charcoal text-xl md:text-2xl font-bold mb-6"
            >
              {cat.title}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {cat.items.map((item, i) => (
                <motion.a
                  key={item.name}
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-blush-light rounded-3xl p-5 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="bg-blush-dark/30 rounded-2xl h-36 md:h-44 mb-4 flex items-center justify-center overflow-hidden">
                    <span className="font-display text-crimson/20 text-sm uppercase tracking-widest">coming soon</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-body text-charcoal text-sm font-semibold leading-tight">{item.name}</p>
                      <p className="font-display text-crimson text-base font-bold mt-1">{item.price}</p>
                    </div>
                    {item.tag && (
                      <span className="bg-matcha/15 text-matcha-dark text-[10px] font-bold uppercase px-2 py-1 rounded-full whitespace-nowrap">
                        {item.tag}
                      </span>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
