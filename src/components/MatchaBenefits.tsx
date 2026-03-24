import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Slow-release energy via natural caffeine + L-theanine — calm focus, no jitters",
  "High EGCG antioxidants for daily cellular wellness",
  "Silk-smooth umami finish — works hot, iced, or whisked",
  "Stone-milled fresh in small batches to preserve the benefits",
];

const MatchaBenefits = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-blush">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Video - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <video
                src="/videos/matcha-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-[380px] md:h-[520px] object-cover"
              />
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-matcha text-xs uppercase tracking-[0.3em] mb-3"
            >
              The Matcha Upgrade You've Been Missing
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-crimson text-xl md:text-2xl lg:text-3xl font-extrabold mb-5 leading-tight whitespace-nowrap"
            >
              Not just any Matcha<br />It's Latcha Uji Reserve Matcha
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-charcoal/70 text-sm md:text-base mb-8 leading-loose"
            >
              <p>Most matcha is bitter, dull, and grown for volume. Ours isn't. Latcha sources exclusively from the Uji region of Japan — where the world's finest matcha has been grown for centuries. — blending two native cultivars, Okumidori and Samidori, for a cup that's layered, silk-smooth, with perfect Umami depth.</p>
            </motion.div>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-matcha/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-matcha-dark" />
                  </div>
                  <span className="font-body text-charcoal/80 text-sm md:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              href="#"
              className="inline-block bg-crimson text-blush font-display font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-crimson-dark transition-colors"
            >
              Shop Matcha →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchaBenefits;
