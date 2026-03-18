import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import patternCrimson from "@/assets/pattern-crimson-new.png";
import patternBlush from "@/assets/pattern-blush-new.png";
import classicDrinks from "@/assets/menu-classic-drinks.png";
import cloudDrinks from "@/assets/menu-cloud-drinks.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const classicLattes = [
  { num: 1, name: "Pure Iced Matcha Latte", desc: "Premium grade matcha shaken with milk. Unsweetened, clean, and bold." },
  { num: 2, name: "Honey Iced Matcha Latte", desc: "Premium grade matcha lightly sweetened with natural honey." },
  { num: 3, name: "Vanilla Silk Iced Matcha Latte", desc: "Premium grade matcha with a subtle hint of French vanilla." },
  { num: 4, name: "Strawberry Iced Matcha Latte", desc: "Lightly sweet, fruity, and smooth with premium grade matcha." },
  { num: 5, name: "Blueberry Vanilla Iced Matcha Latte", desc: "A perfect balance of Premium Matcha, Blueberry & Vanilla." },
  { num: 6, name: "Raspberry Iced Matcha Latte", desc: "Subtle tangy & fruity punch of raspberry with premium matcha." },
  { num: 7, name: "Mango Iced Matcha Latte", desc: "A perfect combination of tropical mango paired with premium matcha for a refreshing sip.", badge: "Best Seller" },
  { num: 8, name: "Toffee Caramel Iced Matcha Latte", desc: "Rich toffee caramel blended with premium matcha." },
];

const cloudLattes = [
  { num: 1, name: "Banana Pudding Cloud Iced Matcha Latte", desc: "Creamy banana, soft biscuit notes, and smooth premium matcha.", sweetness: "4/5 (Medium Sweet)", badge: "Best Seller" },
  { num: 2, name: "Cookie Butter Cloud Iced Matcha Latte", desc: "Buttery cookie cream swirled with smooth premium matcha.", sweetness: "5/5 (Sweet)", badge: "Best Seller" },
  { num: 3, name: "Rosy Cloud Iced Matcha Latte", desc: "Delicate rose notes cloud layered over smooth premium matcha.", sweetness: "3/5 (Mild Sweet)" },
  { num: 4, name: "Peach Cobbler Cloud Iced Matcha Latte", desc: "Juicy peach cobbler dessert notes layered over smooth premium matcha.", sweetness: "3/5 (Mild Sweet)" },
];

const softServes = [
  { num: 1, name: "Vanilla Silk Premium Soft Serve", desc: "Creamy perfectly balanced vanilla soft serve.", sweetness: "3/5 (Mild Sweet)" },
  { num: 2, name: "Strawberry Crush Premium Soft Serve", desc: "Creamy perfectly balanced fruity strawberry milk soft serve.", sweetness: "4/5 (Sweet)" },
  { num: 3, name: "Vanilla & Strawberry Swirl Premium Soft Serve", desc: "Creamy perfectly balanced fruity strawberry milk soft serve.", sweetness: "4/5 (Sweet)" },
];

const SweetnessBar = ({ level }: { level: number }) => (
  <div className="flex items-center gap-1 mt-1">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full ${i <= level ? "bg-matcha" : "bg-blush-dark/30"}`}
      />
    ))}
  </div>
);

const parseSweetness = (s?: string): number => {
  if (!s) return 0;
  const match = s.match(/(\d)\/5/);
  return match ? parseInt(match[1]) : 0;
};

const Menu = () => {
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
              className="mt-4 text-blush/80 text-lg md:text-xl font-body max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-handwriting)" }}
            >
              Handcrafted matcha drinks made with premium Japanese matcha
            </motion.p>
          </div>
        </section>

        {/* Classic Iced Matcha Lattes */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Menu List */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-crimson">
                    Classic Iced Matcha Lattes
                  </h2>
                  <div className="mt-2 flex items-center gap-3 text-sm text-crimson/70 font-body">
                    <span>3G Matcha</span>
                    <span className="w-1 h-1 rounded-full bg-crimson/40" />
                    <span>Regular @ ₹349</span>
                    <span className="w-1 h-1 rounded-full bg-crimson/40" />
                    <span>Oat Milk @ ₹399</span>
                  </div>
                  <div className="w-16 h-[3px] bg-crimson mt-4 rounded-full" />
                </motion.div>

                <div className="mt-8 space-y-1">
                  {classicLattes.map((item, i) => (
                    <motion.div
                      key={item.num}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="group relative px-5 py-4 rounded-2xl hover:bg-crimson/5 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl font-display font-bold text-crimson/20 group-hover:text-crimson/40 transition-colors">
                          {String(item.num).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-display font-semibold text-crimson text-base md:text-lg">
                              {item.name}
                            </h3>
                            {item.badge && (
                              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-crimson text-blush rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-crimson/60 mt-0.5 font-body" style={{ fontFamily: "var(--font-handwriting)" }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-5 right-5 h-px bg-crimson/10" />
                    </motion.div>
                  ))}
                </div>

                {/* Add-on */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-6 mx-5 px-5 py-3 bg-matcha/10 rounded-xl border border-matcha/20"
                >
                  <p className="text-sm font-semibold text-matcha-dark font-display">Extra Matcha Shot – Add On</p>
                  <p className="text-xs text-matcha-dark/70 font-body">2G of premium grade matcha @ ₹80</p>
                </motion.div>
              </div>

              {/* Drink Images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={classicDrinks}
                  alt="Classic Iced Matcha Lattes collection"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divider Pattern */}
        <div
          className="h-32 md:h-40"
          style={{
            backgroundImage: `url(${patternBlush})`,
            backgroundSize: "300px",
          }}
        />

        {/* Speciality Cloud Iced Matcha Lattes */}
        <section
          className="py-16 md:py-24 px-4 relative overflow-hidden"
          style={{
            backgroundImage: `url(${patternCrimson})`,
            backgroundSize: "400px",
          }}
        >
          <div className="absolute inset-0 bg-crimson/90" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Drink Images */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
              >
                <img
                  src={cloudDrinks}
                  alt="Speciality Cloud Matcha Lattes collection"
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Menu List */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-blush/50 text-xs uppercase tracking-[0.25em] font-body">The Latcha Club</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-blush mt-2">
                    Speciality Cloud Lattes
                  </h2>
                  <p className="text-blush/60 text-sm font-body mt-1" style={{ fontFamily: "var(--font-handwriting)" }}>
                    Perfect Dessert Matcha Drinks
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-sm text-blush/60 font-body">
                    <span>3G Matcha</span>
                    <span className="w-1 h-1 rounded-full bg-blush/40" />
                    <span>Regular @ ₹375</span>
                    <span className="w-1 h-1 rounded-full bg-blush/40" />
                    <span>Oat Milk @ ₹445</span>
                  </div>
                  <div className="w-16 h-[3px] bg-blush/40 mt-4 rounded-full" />
                </motion.div>

                <div className="mt-8 space-y-1">
                  {cloudLattes.map((item, i) => (
                    <motion.div
                      key={item.num}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="group relative px-5 py-4 rounded-2xl hover:bg-blush/5 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl font-display font-bold text-blush/20 group-hover:text-blush/40 transition-colors">
                          {String(item.num).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-display font-semibold text-blush text-base md:text-lg">
                              {item.name}
                            </h3>
                            {item.badge && (
                              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blush text-crimson rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-blush/60 mt-0.5" style={{ fontFamily: "var(--font-handwriting)" }}>
                            {item.desc}
                          </p>
                          {item.sweetness && (
                            <div className="flex items-center gap-2 mt-1.5">
                              <SweetnessBar level={parseSweetness(item.sweetness)} />
                              <span className="text-[11px] text-blush/50 font-body">{item.sweetness}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-5 right-5 h-px bg-blush/10" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Soft Serves */}
        <section
          className="py-16 md:py-24 px-4 relative"
          style={{
            backgroundImage: `url(${patternBlush})`,
            backgroundSize: "300px",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-crimson/50 text-xs uppercase tracking-[0.25em] font-body">The Latcha Club</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-crimson mt-2">
                Premium Soft Serves
              </h2>
              <p className="text-crimson/60 text-sm mt-2 font-body">Any standard flavor @ ₹249</p>
              <div className="w-16 h-[3px] bg-crimson mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {softServes.map((item, i) => (
                <motion.div
                  key={item.num}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-crimson/10"
                >
                  <div className="w-12 h-12 rounded-2xl bg-matcha/10 flex items-center justify-center mb-4">
                    <span className="text-lg font-display font-bold text-matcha">{String(item.num).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display font-semibold text-crimson text-base">{item.name}</h3>
                  <p className="text-sm text-crimson/60 mt-1" style={{ fontFamily: "var(--font-handwriting)" }}>
                    {item.desc}
                  </p>
                  {item.sweetness && (
                    <div className="flex items-center gap-2 mt-3">
                      <SweetnessBar level={parseSweetness(item.sweetness)} />
                      <span className="text-[11px] text-crimson/50 font-body">{item.sweetness}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Matcha Affogato Add-on */}
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;
