import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-blush px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-matcha text-xs uppercase tracking-[0.35em] mb-6 text-center"
        >
          Our Origin
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-charcoal/80 text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16"
        >
          Born From a Love for Matcha.
        </motion.h2>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 text-center"
        >
          <p className="font-body text-charcoal/55 text-base md:text-lg leading-relaxed">
            We'd tried matcha everywhere. New York, Seoul, Tokyo. Every sip felt like a ritual. Then we came back home to India, ordered one at a café, and it tasted like sweetened green dust.
          </p>

          <p className="font-body text-charcoal/55 text-base md:text-lg leading-relaxed font-medium">
            That gap bothered us.
          </p>

          <p className="font-body text-charcoal/55 text-base md:text-lg leading-relaxed">
            Matcha had taken over the world for good reason. It's extraordinary. But in India, nobody was doing it right. Not even close.
          </p>

          <p className="font-body text-charcoal/55 text-base md:text-lg leading-relaxed font-semibold">
            So we built Latcha to change that.
          </p>

          <p className="font-body text-charcoal/55 text-base md:text-lg leading-relaxed">
            We go directly to Uji, Japan, the birthplace of matcha, and source only AAA ceremonial grade. No blends. No shortcuts. No compromises. Just the real thing, made approachable for the Indian palate.
          </p>

          <p className="font-body text-charcoal/55 text-base md:text-lg leading-relaxed italic">
            Because everyone deserves to know what matcha actually tastes like.
          </p>
        </motion.div>

        {/* Founders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-14 md:mt-20 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div>
              <p className="font-display text-crimson text-lg font-bold">Rajasree Yarlagadda</p>
              <p className="font-body text-charcoal/45 text-sm">Co-founder</p>
            </div>
            <div>
              <p className="font-display text-crimson text-lg font-bold">Seeya Shree</p>
              <p className="font-body text-charcoal/45 text-sm">Co-founder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
