import { motion } from "framer-motion";
import type { MenuItem } from "./MenuData";
import SweetnessBar, { parseSweetness } from "./SweetnessBar";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" as const },
  }),
};

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
  variant?: "light" | "dark";
}

const MenuItemCard = ({ item, index, variant = "light" }: MenuItemCardProps) => {
  const isDark = variant === "dark";

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`group relative flex items-center gap-4 md:gap-6 px-4 py-4 rounded-2xl transition-colors ${
        isDark ? "hover:bg-blush/5" : "hover:bg-crimson/5"
      }`}
    >
      {/* Product Image */}
      {item.image ? (
        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden bg-crimson/5">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      ) : (
        <div className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl flex items-center justify-center ${
          isDark ? "bg-blush/10" : "bg-matcha/10"
        }`} />
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className={`font-display font-semibold text-sm md:text-base ${isDark ? "text-blush" : "text-crimson"}`}>
            {item.name}
          </h3>
          {item.badge && (
            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${
              isDark ? "bg-blush text-crimson" : "bg-crimson text-blush"
            }`}>
              {item.badge}
            </span>
          )}
        </div>
        <p
          className={`text-xs md:text-sm mt-0.5 ${isDark ? "text-blush/60" : "text-crimson/60"}`}
          style={{ fontFamily: "var(--font-handwriting)" }}
        >
          {item.desc}
        </p>
        {item.sweetness && (
          <p
            className={`text-xs md:text-sm mt-1 ${isDark ? "text-blush/60" : "text-crimson/60"}`}
            style={{ fontFamily: "var(--font-handwriting)" }}
          >
            Sweetness: {item.sweetness}
          </p>
        )}
      </div>

      {/* Bottom divider */}
      <div className={`absolute bottom-0 left-4 right-4 h-px ${isDark ? "bg-blush/10" : "bg-crimson/10"}`} />
    </motion.div>
  );
};

export default MenuItemCard;
