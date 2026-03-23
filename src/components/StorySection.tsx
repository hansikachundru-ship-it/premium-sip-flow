import { motion } from "framer-motion";
import founderImg from "@/assets/founder.png";

const StorySection = () => {
  return (
    <section className="py-20 md:py-32 bg-blush px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5"
          >
            <p className="font-display text-matcha text-xs uppercase tracking-[0.35em] mb-5">
              Our Origin
            </p>

            <h2 className="font-display text-crimson text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
              Born From a Love for Matcha.
            </h2>

            <div className="space-y-5">
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
            <div className="mt-10 flex flex-col sm:flex-row gap-8">
              <div>
                <p className="font-display text-crimson text-base font-bold">Rajasree Yarlagadda</p>
                <p className="font-body text-charcoal/45 text-sm">Co-founder</p>
              </div>
              <div>
                <p className="font-display text-crimson text-base font-bold">Seeya Shree</p>
                <p className="font-body text-charcoal/45 text-sm">Co-founder</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="w-full md:w-2/5 flex items-start justify-center"
          >
            <img
              src={founderImg}
              alt="Latcha Founders"
              className="w-full max-w-sm object-cover rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
