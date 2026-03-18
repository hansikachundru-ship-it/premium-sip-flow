import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import patternBlushLight from "@/assets/pattern-blush-light.png";
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
    <div className="min-h-screen bg-blush">
      <AnnouncementBar />
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative py-20 md:py-28 overflow-hidden"
          style={{
            backgroundImage: `url(${patternCrimson})`,
            backgroundSize: "400px",
          }}
        >
          <div className="absolute inset-0 bg-crimson/80" />
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-display font-bold text-blush tracking-tight"
            >
              Our Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-blush/80 text-lg md:text-xl max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-handwriting)" }}
            >
              Handcrafted matcha drinks made with premium Japanese matcha
            </motion.p>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="sticky top-0 z-30 bg-blush/95 backdrop-blur-md border-b border-crimson/10">
          <div className="max-w-4xl mx-auto flex justify-center gap-1 px-4 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-2.5 text-xs md:text-sm font-display font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-crimson text-blush shadow-lg"
                    : "text-crimson/60 hover:text-crimson hover:bg-crimson/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Card Area — pattern background */}
        <div
          className="py-12 md:py-20 px-4"
          style={{
            backgroundImage: `url(${patternBlushLight})`,
            backgroundSize: "300px",
          }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "classic" && (
              <MenuCard
                key="classic"
                variant="blush"
                title="Classic Iced Matcha Lattes"
                subtitle="Handcrafted with premium grade matcha"
                priceLine="3G Matcha  ·  Regular @ ₹349  ·  Oat Milk @ ₹399"
                items={classicLattes}
                itemVariant="light"
                footer={
                  <div className="mt-6 px-5 py-3 bg-matcha/10 rounded-xl border border-matcha/20 text-center">
                    <p className="text-sm font-semibold text-matcha-dark font-display">Extra Matcha Shot – Add On</p>
                    <p className="text-xs text-matcha-dark/70 font-body">2G of premium grade matcha @ ₹80</p>
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
                variant="blush"
                title="Premium Soft Serves"
                subtitle=""
                priceLine="Any standard flavor @ ₹249"
                tagline="The Latcha Club"
                items={softServes}
                itemVariant="light"
                footer={
                  <div className="mt-6 px-5 py-3 bg-matcha/10 rounded-xl border border-matcha/20 text-center">
                    <p className="text-sm font-semibold text-matcha-dark font-display">Matcha Affogato – Add On @ ₹80</p>
                    <p className="text-xs text-matcha-dark/70 font-body mt-1" style={{ fontFamily: "var(--font-handwriting)" }}>
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
      className="max-w-3xl mx-auto"
    >
      <div
        className={`relative rounded-3xl border-2 overflow-hidden shadow-2xl ${
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
        {/* Overlay for crimson variant */}
        {isCrimson && <div className="absolute inset-0 bg-crimson/90" />}

        <div className="relative z-10 px-6 md:px-10 py-10 md:py-14">
          {/* Header */}
          <div className="text-center mb-8">
            {tagline && (
              <span className={`text-xs uppercase tracking-[0.25em] font-body ${
                isCrimson ? "text-blush/50" : "text-crimson/50"
              }`}>
                {tagline}
              </span>
            )}
            <h2 className={`text-3xl md:text-4xl font-display font-bold mt-1 ${
              isCrimson ? "text-blush" : "text-crimson"
            }`}>
              • {title} •
            </h2>
            {subtitle && (
              <p
                className={`text-sm mt-2 ${isCrimson ? "text-blush/60" : "text-crimson/60"}`}
                style={{ fontFamily: "var(--font-handwriting)" }}
              >
                {subtitle}
              </p>
            )}
            <div className={`mt-3 flex items-center justify-center gap-3 text-sm font-body ${
              isCrimson ? "text-blush/60" : "text-crimson/70"
            }`}>
              <span>{priceLine}</span>
            </div>
            {/* Decorative divider */}
            <div className={`w-24 h-[2px] mx-auto mt-5 rounded-full ${
              isCrimson ? "bg-blush/30" : "bg-crimson/20"
            }`} />
          </div>

          {/* Menu Items */}
          <div className="space-y-0">
            {items.map((item, i) => (
              <MenuItemCard key={item.num} item={item} index={i} variant={itemVariant} />
            ))}
          </div>

          {/* Footer */}
          {footer}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
