import { motion } from "framer-motion";
import { Zap, Flame, Leaf, Sparkles, Heart } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Steady Energy",
    desc: "Natural caffeine + L-theanine = smooth, focused energy. No jitters, no crash. Just vibes ⚡",
  },
  {
    icon: Flame,
    title: "Enhanced Metabolism",
    desc: "Boosts your metabolism naturally — matcha really said 'let's glow up from the inside' 🔥",
  },
  {
    icon: Leaf,
    title: "Cellular Detox",
    desc: "Loaded with antioxidants that help your body detox. It's like a spa day, but sippable 🍃",
  },
  {
    icon: Sparkles,
    title: "Superbrew",
    desc: "137x more antioxidants than regular green tea. Yeah, matcha doesn't play around ✨",
  },
  {
    icon: Heart,
    title: "Overall Wellness",
    desc: "Calms the mind, boosts immunity, and keeps you feeling your best. Self-care in a cup 💚",
  },
];

const MatchaBenefits = () => {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-blush">
      <div className="max-w-6xl mx-auto text-center">
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
          className="font-display text-crimson text-3xl md:text-5xl font-extrabold mb-16"
        >
          A full body upgrade! 🧬
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-blush-light rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-matcha/15 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-matcha/25 transition-colors">
                <b.icon className="w-7 h-7 text-matcha" />
              </div>
              <h3 className="font-display text-charcoal text-lg font-bold mb-2">{b.title}</h3>
              <p className="font-body text-charcoal/70 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchaBenefits;
