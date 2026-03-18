import { motion } from "framer-motion";
import founderImg from "@/assets/founder.png";
import patternBlush from "@/assets/pattern-blush.png";

const StorySection = () => {
  return (
    <section
      className="py-20 md:py-28 bg-blush-light px-6 relative"
      style={{ backgroundImage: `url(${patternBlush})`, backgroundSize: '400px', backgroundRepeat: 'repeat' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <img
            src={founderImg}
            alt="Amareen, Founder of Latcha"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center md:text-left"
        >
          <p className="font-display text-matcha text-sm uppercase tracking-[0.3em] mb-4">Why Latcha?</p>
          <blockquote className="font-body text-charcoal text-lg md:text-xl leading-relaxed mb-6 italic">
            "I created Latcha to bring the best of Japan's matcha to India in a way that moves beyond grades, showcasing nuances of regions, cultivars, and flavors. It's for people who appreciate true quality worthy of their taste."
          </blockquote>
          <p className="font-display text-crimson text-lg font-bold">Amareen</p>
          <p className="font-body text-charcoal/60 text-sm">Founder + CEO</p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
