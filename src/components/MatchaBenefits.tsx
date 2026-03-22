import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Steady energy without caffeine crashes",
  "Rich in antioxidants for skin & immunity",
  "Boosts metabolism and supports detox",
  "Calms the mind with natural L-theanine",
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
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>
          </motion.div>

          {/* Text - Right Side */}
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-matcha text-sm uppercase tracking-[0.3em] mb-3"
            >
              Not just a drink
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-crimson text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
            >
              A full body upgrade
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-body text-charcoal/70 text-base md:text-lg mb-8 leading-relaxed"
            >
              Sourced from Uji, Japan — our AAA Grade ceremonial matcha is packed with nutrients that your body actually uses. It's a match if you:
            </motion.p>

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
              Shop Now →
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchaBenefits;
