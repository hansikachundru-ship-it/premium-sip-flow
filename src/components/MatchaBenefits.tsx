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
    <section className="py-10 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-blush">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-16">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <img
                src={matchaTins}
                alt="Latcha Matcha Powder tins"
                className="w-full h-[280px] sm:h-[350px] md:h-[520px] object-cover"
              />
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-matcha text-xs sm:text-sm tracking-[0.3em] mb-2 sm:mb-3"
              style={{ fontFamily: "'General Sans', sans-serif" }}
            >
              The Matcha Upgrade You've Been Missing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-crimson text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-5 leading-tight"
            >
              More Than a Drink.<br />It's Latcha
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-charcoal/70 text-sm sm:text-base md:text-lg mb-5 sm:mb-8 leading-relaxed sm:leading-loose"
            >
              <p>Most matcha is bitter, dull, and grown for volume. Ours isn't. Latcha sources exclusively from the Uji region of Japan — where the world's finest matcha has been grown for centuries. — blending two native cultivars, Okumidori and Samidori, for a cup that's layered, silk-smooth, with perfect Umami depth.</p>
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
                  className="bg-crimson text-blush font-display font-bold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider px-3 sm:px-5 py-2 sm:py-2.5 rounded-full"
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
              className="inline-block border-2 border-crimson text-crimson font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-crimson hover:text-blush transition-colors"
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
