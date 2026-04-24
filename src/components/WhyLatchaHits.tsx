import { motion } from "framer-motion";
import { Zap, Brain, Leaf, Heart, Sun, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Calm energy, no crash",
    description:
      "L-theanine and caffeine work together for smooth, focused energy without the jitters or afternoon crash that coffee gives you.",
  },
  {
    icon: Brain,
    title: "Sharper focus",
    description:
      "L-theanine promotes a state of alert calm so you're switched on without feeling wired. Your most productive mornings start here.",
  },
  {
    icon: Leaf,
    title: "Antioxidant powerhouse",
    description:
      "Matcha contains 10x more antioxidants than regular green tea. EGCG catechins help protect your cells and fight inflammation daily.",
  },
  {
    icon: Heart,
    title: "Good for your heart",
    description:
      "Regular matcha consumption is linked to lower LDL cholesterol and reduced risk of heart disease. A daily ritual your heart will thank you for.",
  },
  {
    icon: Sun,
    title: "Skin that glows",
    description:
      "High chlorophyll content helps detox from the inside out. Antioxidants fight free radical damage, the kind that ages your skin.",
  },
  {
    icon: Shield,
    title: "Pesticide-free & pure",
    description:
      "Latcha's matcha is AAA Uji grade, first spring harvest, stone milled. No additives, no fillers, no compromise. Just matcha as it should be.",
  },
];

const WhyLatchaHits = () => {
  return (
    <section className="pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-20 lg:px-28 xl:px-32 bg-blush">
      <div className="max-w-[1400px] mx-auto bg-crimson rounded-2xl sm:rounded-3xl px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-display text-blush text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight tracking-wide">
            Why Latcha Hits Different
          </h2>
          <p className="font-body text-blush/60 text-xs sm:text-sm md:text-base lg:text-lg">
            Every sip is doing more than you think
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-blush border border-crimson/15 rounded-2xl p-6 sm:p-7 md:p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-crimson/10 flex items-center justify-center mb-4 sm:mb-5">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-crimson" strokeWidth={2} />
                </div>
                <h3 className="font-display text-crimson text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="font-body text-crimson/70 text-sm sm:text-base leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyLatchaHits;
