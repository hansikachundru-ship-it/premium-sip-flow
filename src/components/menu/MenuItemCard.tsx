import { motion } from "framer-motion";
import type { MenuItem } from "./MenuData";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
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
      className="py-3"
    >
      <h3 className={`font-display font-bold text-base md:text-lg ${isDark ? "text-blush" : "text-crimson"}`}>
        {item.name}
        {item.badge && (
          <span className={`ml-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full align-middle ${
            isDark ? "bg-blush text-crimson" : "bg-crimson text-blush"
          }`}>
            {item.badge}
          </span>
        )}
      </h3>
      {/* Dotted separator */}
      <div className={`mt-1 border-b border-dotted ${isDark ? "border-blush/30" : "border-crimson/30"}`} />
      <p
        className={`text-sm mt-1.5 ${isDark ? "text-blush/70" : "text-crimson/70"}`}
        style={{ fontFamily: "var(--font-handwriting)" }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
};

export default MenuItemCard;
