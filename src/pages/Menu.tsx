import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import patternBlushLight from "@/assets/pattern-blush-hearts.png";
import patternCrimson from "@/assets/pattern-crimson-new.png";
import MenuItemCard from "@/components/menu/MenuItemCard";
import { classicLattes, cloudLattes, softServes } from "@/components/menu/MenuData";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "classic", label: "Iced Matcha Lattes" },
  { id: "cloud", label: "Cloud Lattes" },
  { id: "soft", label: "Soft Serves" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const Menu = () => {
  const [activeTab, setActiveTab] = useState<TabId>("classic");

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${patternBlushLight})`, backgroundSize: "300px", backgroundColor: "hsl(var(--blush))" }}>
      
      <Navbar />

      <main>
        {/* "Our Menu" Header */}
        <div className="text-center py-6 sm:py-8 md:py-12 px-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-crimson tracking-wide">
              <span className="border-2 border-crimson/30 px-4 sm:px-6 py-1.5 sm:py-2 inline-block rounded-lg">Our Menu</span>
            </h1>
          <p className="text-xs sm:text-sm text-crimson/70 mt-2 sm:mt-3 font-body font-normal tracking-wide">
            Handcrafted matcha drinks made with premium Japanese matcha
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="sticky top-0 z-30" style={{ backgroundImage: `url(${patternBlushLight})`, backgroundSize: "300px", backgroundColor: "hsl(var(--blush))" }}>
          <div className="max-w-5xl mx-auto flex gap-1 sm:gap-2 px-2 sm:px-4 py-3 sm:py-4 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 sm:flex-1 px-3 sm:px-2 md:px-5 py-2.5 sm:py-3 md:py-4 text-[9px] sm:text-[11px] md:text-sm font-display font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-crimson text-blush"
                    : "bg-crimson/5 text-crimson/60 hover:text-crimson hover:bg-crimson/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Card Area */}
        <div className="pb-8 sm:pb-12 md:pb-20 px-3 sm:px-4 pt-0">
          <AnimatePresence mode="wait">
            {activeTab === "classic" && (
              <MenuCard
                key="classic"
                variant="crimson"
                title="Classic Iced Matcha Lattes"
                subtitle="Handcrafted with premium grade matcha"
                priceLine="3G Matcha  ·  Regular @ ₹349  ·  Oat Milk @ ₹399"
                items={classicLattes}
                itemVariant="dark"
                footer={
                  <div className="mt-4 sm:mt-6 px-4 sm:px-5 py-2.5 sm:py-3 bg-matcha/10 rounded-xl border border-matcha/20 text-center">
                    <p className="text-xs sm:text-sm font-semibold text-matcha-dark font-display">Extra Matcha Shot – Add On</p>
                    <p className="text-[10px] sm:text-xs text-matcha-dark/70 font-body">2G of premium grade matcha @ ₹80</p>
                  </div>
                }
              />
            )}

            {activeTab === "cloud" && (
              <MenuCard
                key="cloud"
                variant="crimson"
                title="Speciality Cloud Lattes"
                subtitle="Perfect Dessert Matcha Drinks"
                priceLine="3G Matcha  ·  Regular @ ₹375  ·  Oat Milk @ ₹445"
                items={cloudLattes}
                itemVariant="dark"
              />
            )}

            {activeTab === "soft" && (
              <MenuCard
                key="soft"
                variant="crimson"
                title="Premium Soft Serves"
                subtitle=""
                priceLine="Any standard flavor @ ₹249"
                items={softServes}
                itemVariant="dark"
                footer={
                  <div className="mt-4 sm:mt-6 px-4 sm:px-5 py-2.5 sm:py-3 bg-matcha/10 rounded-xl border border-matcha/20 text-center">
                    <p className="text-xs sm:text-sm font-semibold text-matcha-dark font-display">Matcha Affogato – Add On @ ₹80</p>
                    <p className="text-[10px] sm:text-xs text-matcha-dark/70 font-body mt-1" style={{ fontFamily: "var(--font-handwriting)" }}>
                      Add 2G of premium grade matcha whisk on top of our premium soft serves
                    </p>
                  </div>
                }
              />
            )}

          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

/* ─── Menu Card Component ─── */

interface MenuCardProps {
  variant: "blush" | "crimson";
  title: string;
  subtitle: string;
  priceLine: string;
  tagline?: string;
  items: import("@/components/menu/MenuData").MenuItem[];
  itemVariant: "light" | "dark";
  footer?: React.ReactNode;
}

const MenuCard = ({
  variant,
  title,
  subtitle,
  priceLine,
  tagline,
  items,
  itemVariant,
  footer,
}: MenuCardProps) => {
  const isCrimson = variant === "crimson";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      className="max-w-5xl mx-auto"
    >
      <div
        className={`relative rounded-2xl sm:rounded-3xl border-2 overflow-hidden shadow-2xl ${
          isCrimson
            ? "bg-crimson border-crimson-dark/30"
            : "bg-blush border-crimson/15"
        }`}
        style={{
          backgroundImage: isCrimson
            ? `url(${patternCrimson})`
            : undefined,
          backgroundSize: isCrimson ? "400px" : undefined,
        }}
      >
        {isCrimson && <div className="absolute inset-0 bg-crimson/90" />}

        <div className="relative z-10 px-4 sm:px-6 md:px-10 py-6 sm:py-10 md:py-14">
          {/* Header */}
          <div className="text-center mb-5 sm:mb-8">
            {tagline && (
              <span className={`text-[10px] sm:text-xs uppercase tracking-[0.25em] font-body ${
                isCrimson ? "text-blush/50" : "text-crimson/50"
              }`}>
                {tagline}
              </span>
            )}
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mt-1 ${
              isCrimson ? "text-blush" : "text-crimson"
            }`}>
              • {title} •
            </h2>
            {subtitle && (
              <p
                className={`text-xs sm:text-sm mt-1.5 sm:mt-2 ${isCrimson ? "text-blush/60" : "text-crimson/60"}`}
                style={{ fontFamily: "var(--font-handwriting)" }}
              >
                {subtitle}
              </p>
            )}
            {priceLine && (
              <div className={`mt-2 sm:mt-3 flex items-center justify-center gap-3 text-[10px] sm:text-xs md:text-sm font-body ${
                isCrimson ? "text-blush/60" : "text-crimson/70"
              }`}>
                <span>{priceLine}</span>
              </div>
            )}
            <div className={`w-16 sm:w-24 h-[2px] mx-auto mt-4 sm:mt-5 rounded-full ${
              isCrimson ? "bg-blush/30" : "bg-crimson/20"
            }`} />
          </div>

          {/* Menu Items */}
          <div className="space-y-0">
            {items.map((item, i) => (
              <MenuItemCard key={item.num} item={item} index={i} variant={itemVariant} />
            ))}
          </div>

          {footer}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
