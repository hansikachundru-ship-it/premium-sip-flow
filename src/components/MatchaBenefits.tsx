import { motion } from "framer-motion";
import matchaTins from "@/assets/matcha-tins.png";

const benefits = [
  "Pesticide-free",
  "Zero additives",
  "No added colour",
  "Small-batch ground",
  "AAA Uji Grade",
  "Smooth & Creamy",
];

const MatchaBenefits = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-blush">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-stretch gap-6 sm:gap-8 md:gap-10">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-full">
              <img
                src={matchaTins}
                alt="Latcha Matcha Powder tins"
                className="w-full h-[280px] sm:h-[350px] md:h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-matcha text-sm sm:text-base md:text-lg uppercase tracking-widest mb-2 sm:mb-3"
            >
              THE MATCHA UPGRADE YOU'VE BEEN MISSING
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-crimson text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
            >
              <span className="whitespace-nowrap">More Than a Drink.</span><br />
              <span>It's Latcha</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-charcoal/70 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-justify"
            >
              <p>Most matcha is bitter, dull, and grown for volume. Ours isn't. Latcha sources exclusively from the Uji region of Japan — where the world's finest matcha has been grown for centuries — blending two native cultivars, Okumidori and Samidori, for a cup that's layered, silk-smooth, with perfect Umami depth.</p>
            </motion.div>

            {/* Benefit Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-10">
              {benefits.map((benefit, i) => (
                <motion.span
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="bg-crimson text-blush font-display font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider px-4 sm:px-6 py-2.5 sm:py-3 rounded-full"
                >
                  {benefit}
                </motion.span>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              href="/shop#matcha"
              className="inline-block border-2 border-crimson text-crimson font-display font-bold text-sm sm:text-base uppercase tracking-widest px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-crimson hover:text-blush transition-colors"
            >
              Shop Matcha
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchaBenefits;
