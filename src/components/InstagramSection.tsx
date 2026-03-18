import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const reelPlaceholders = [
  { emoji: "🍵", color: "bg-matcha/20" },
  { emoji: "💚", color: "bg-crimson/10" },
  { emoji: "✨", color: "bg-matcha/15" },
  { emoji: "🎁", color: "bg-crimson/15" },
  { emoji: "🍃", color: "bg-matcha/20" },
  { emoji: "☕", color: "bg-crimson/10" },
  { emoji: "🧋", color: "bg-matcha/15" },
  { emoji: "💫", color: "bg-crimson/15" },
];

const InstagramSection = () => {
  const doubled = [...reelPlaceholders, ...reelPlaceholders];

  return (
    <section className="py-20 md:py-28 bg-blush overflow-hidden">
      <div className="text-center mb-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-crimson text-3xl md:text-5xl font-extrabold mb-3"
        >
          we're kinda cute on the 'gram 📸
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-charcoal/60 text-base"
        >
          follow the matcha journey — it's lowkey aesthetic
        </motion.p>
      </div>

      {/* Moving reels */}
      <div className="overflow-hidden mb-10">
        <div className="animate-marquee flex gap-4">
          {doubled.map((reel, i) => (
            <div
              key={i}
              className={`${reel.color} rounded-2xl w-40 h-56 md:w-48 md:h-72 flex-shrink-0 flex items-center justify-center shadow-md`}
            >
              <span className="text-5xl">{reel.emoji}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://instagram.com/latcha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-crimson text-blush font-display font-bold text-sm px-8 py-3.5 rounded-full hover:bg-crimson-dark transition-colors uppercase tracking-wider"
        >
          <Instagram className="w-5 h-5" />
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
