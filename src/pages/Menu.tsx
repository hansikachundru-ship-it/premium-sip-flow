import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import patternCrimson from "@/assets/pattern-crimson-new.png";
import patternBlush from "@/assets/pattern-blush-new.png";
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

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "classic" && (
            <motion.section
              key="classic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="py-12 md:py-20 px-4"
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-crimson">
                    Classic Iced Matcha Lattes
                  </h2>
                  <div className="mt-3 flex items-center justify-center gap-3 text-sm text-crimson/70 font-body">
                    <span>3G Matcha</span>
                    <span className="w-1 h-1 rounded-full bg-crimson/40" />
                    <span>Regular @ ₹349</span>
                    <span className="w-1 h-1 rounded-full bg-crimson/40" />
                    <span>Oat Milk @ ₹399</span>
                  </div>
                  <div className="w-16 h-[3px] bg-crimson mx-auto mt-4 rounded-full" />
                </div>

                <div className="space-y-1">
                  {classicLattes.map((item, i) => (
                    <MenuItemCard key={item.num} item={item} index={i} variant="light" />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8 mx-4 px-5 py-3 bg-matcha/10 rounded-xl border border-matcha/20 text-center"
                >
                  <p className="text-sm font-semibold text-matcha-dark font-display">Extra Matcha Shot – Add On</p>
                  <p className="text-xs text-matcha-dark/70 font-body">2G of premium grade matcha @ ₹80</p>
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeTab === "cloud" && (
            <motion.section
              key="cloud"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="relative py-12 md:py-20 px-4 overflow-hidden"
              style={{
                backgroundImage: `url(${patternCrimson})`,
                backgroundSize: "400px",
              }}
            >
              <div className="absolute inset-0 bg-crimson/90" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-blush/50 text-xs uppercase tracking-[0.25em] font-body">The Latcha Club</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-blush mt-2">
                    Speciality Cloud Lattes
                  </h2>
                  <p className="text-blush/60 text-sm mt-1" style={{ fontFamily: "var(--font-handwriting)" }}>
                    Perfect Dessert Matcha Drinks
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-3 text-sm text-blush/60 font-body">
                    <span>3G Matcha</span>
                    <span className="w-1 h-1 rounded-full bg-blush/40" />
                    <span>Regular @ ₹375</span>
                    <span className="w-1 h-1 rounded-full bg-blush/40" />
                    <span>Oat Milk @ ₹445</span>
                  </div>
                  <div className="w-16 h-[3px] bg-blush/40 mx-auto mt-4 rounded-full" />
                </div>

                <div className="space-y-1">
                  {cloudLattes.map((item, i) => (
                    <MenuItemCard key={item.num} item={item} index={i} variant="dark" />
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === "soft" && (
            <motion.section
              key="soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="py-12 md:py-20 px-4 relative"
              style={{
                backgroundImage: `url(${patternBlush})`,
                backgroundSize: "300px",
              }}
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-crimson/50 text-xs uppercase tracking-[0.25em] font-body">The Latcha Club</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-crimson mt-2">
                    Premium Soft Serves
                  </h2>
                  <p className="text-crimson/60 text-sm mt-2 font-body">Any standard flavor @ ₹249</p>
                  <div className="w-16 h-[3px] bg-crimson mx-auto mt-4 rounded-full" />
                </div>

                <div className="space-y-1">
                  {softServes.map((item, i) => (
                    <MenuItemCard key={item.num} item={item} index={i} variant="light" />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-8 mx-auto max-w-md px-6 py-4 bg-matcha/10 rounded-2xl border border-matcha/20 text-center"
                >
                  <p className="text-sm font-semibold text-matcha-dark font-display">Matcha Affogato – Add On @ ₹80</p>
                  <p className="text-xs text-matcha-dark/70 font-body mt-1" style={{ fontFamily: "var(--font-handwriting)" }}>
                    Add 2G of premium grade matcha whisk on top of our premium soft serves
                  </p>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
