import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-blush px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          {/* Left - Big Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5"
          >
            <p className="font-display text-matcha text-xs uppercase tracking-[0.35em] mb-5">
              Our Origin
            </p>

            <h2 className="font-display text-crimson text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.1]">
              Born From a Love for Matcha.
            </h2>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="w-full md:w-3/5"
          >
            <div className="space-y-3">
              <p className="font-body text-charcoal/55 text-sm md:text-base leading-relaxed">
                We'd tried matcha everywhere. New York, Seoul, Tokyo. Every sip felt like a ritual. Then we came back home to India, ordered one at a café, and it tasted like sweetened green dust.
              </p>

              <p className="font-body text-charcoal/55 text-sm md:text-base leading-relaxed font-medium">
                That gap bothered us.
              </p>

              <p className="font-body text-charcoal/55 text-sm md:text-base leading-relaxed">
                Matcha had taken over the world for good reason. It's extraordinary. But in India, nobody was doing it right. Not even close.
              </p>

              <p className="font-body text-charcoal/55 text-sm md:text-base leading-relaxed font-semibold">
                So we built Latcha to change that.
              </p>

              <p className="font-body text-charcoal/55 text-sm md:text-base leading-relaxed">
                We go directly to Uji, Japan, the birthplace of matcha, and source only AAA ceremonial grade. No blends. No shortcuts. No compromises. Just the real thing, made approachable for the Indian palate.
              </p>

              <p className="font-body text-charcoal/55 text-sm md:text-base leading-relaxed italic">
                Because everyone deserves to know what matcha actually tastes like.
              </p>
            </div>

            {/* Founders */}
            <div className="mt-6">
              <p className="font-display text-crimson text-base font-bold">Rajasree Yarlagadda & Seeya Shree</p>
              <p className="font-body text-charcoal/45 text-sm">Co-founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
