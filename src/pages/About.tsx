import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any },
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.section {...fadeUp} className={`max-w-[760px] mx-auto px-6 md:px-8 text-center ${className}`}>
    {children}
  </motion.section>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-display text-matcha text-[21px] md:text-[22px] uppercase tracking-[0.35em] mb-5 text-center">
    {children}
  </p>
);

const About = () => {
  return (
    <div className="min-h-screen bg-blush">
      <SEO
        title="About Latcha — Our Story & Uji Matcha Origin"
        description="Matcha without the mystery. Learn how Latcha brings first-harvest Uji matcha from Japan to India, and the story behind our specialty café."
        path="/about"
      />
      <Navbar />


      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-48 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[760px] mx-auto text-center"
        >
          <Eyebrow>About Latcha</Eyebrow>
          <h1 className="font-display text-crimson text-[30px] font-extrabold uppercase leading-[1.1] whitespace-nowrap mb-8 md:mb-10">
            Matcha, without the mystery.
          </h1>
          <div className="space-y-5 text-charcoal/60 font-body text-base md:text-lg leading-relaxed text-center">
            <p>
              Most matcha brands want you to feel like you're missing something. A grade you don't
              understand, a ceremony you're doing wrong, a word you can't pronounce. We think that's
              backwards.
            </p>
            <p>
              Latcha exists to make matcha more approachable and less complicated, without ever
              compromising on quality.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Aha Moment */}
      <Section className="pt-0 pb-48">
        <Eyebrow>The Aha Moment</Eyebrow>
        <h2 className="font-display text-crimson text-[30px] font-extrabold uppercase leading-[1.1] whitespace-nowrap mb-8">
          One farm changed everything.
        </h2>
        <div className="space-y-5 text-charcoal/60 font-body text-base md:text-lg leading-relaxed text-center">
          <p>
            It happened in the heart of Uji, one of the best matcha-growing regions in the world.
            We tasted hundreds of matcha samples, but one farm stood out.
          </p>
          <p>
            Perfectly balanced, with none of the bitterness you brace yourself for, and a green so
            vibrant it barely looked real.
          </p>
          <p className="font-medium text-charcoal/75">That was the moment we knew.</p>
          <p>
            Indian consumers deserved to taste matcha at this quality — not a watered-down version,
            not something lost in translation.
          </p>
          <p className="italic">So we took the risk and brought it all the way to Bangalore.</p>
        </div>
      </Section>

      {/* Founder Quote */}
      <motion.section {...fadeUp} className="pt-0 pb-48 px-6 md:px-8">
        <div className="max-w-[860px] mx-auto text-center">
          <Eyebrow>A Note From Our Founder</Eyebrow>
          <blockquote className="relative">
            <span
              aria-hidden
              className="block text-crimson/15 font-display text-7xl md:text-9xl leading-none mb-2 select-none"
              style={{ fontFamily: "var(--font-handwriting)" }}
            >
              "
            </span>
            <p
              className="text-crimson text-2xl md:text-4xl lg:text-[42px] leading-[1.25] italic font-normal -mt-6 md:-mt-10"
              style={{ fontFamily: "var(--font-handwriting)" }}
            >
              My goal is to offer matcha of exceptional quality, without any bitterness, and to
              share with you all the love I have for this drink.
            </p>
            <footer className="mt-10 md:mt-12">
              <div className="w-10 h-px bg-crimson/40 mx-auto mb-4" />
              <p className="font-display text-crimson text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                Rajasree Yarlagadda
              </p>
              <p className="font-body text-charcoal/50 text-xs md:text-sm mt-1">Co-founder, Latcha</p>
            </footer>
          </blockquote>
        </div>
      </motion.section>

      {/* Our World */}
      <Section className="pt-0 pb-48">
        <Eyebrow>Our World</Eyebrow>
        <h2 className="font-display text-crimson text-[30px] font-extrabold uppercase leading-[1.1] whitespace-nowrap mb-8">
          Soft. Feminine. Calm.
        </h2>
        <div className="space-y-5 text-charcoal/60 font-body text-base md:text-lg leading-relaxed text-center">
          <p>
            Latcha is built around a soft, feminine, and minimalist universe.
          </p>
          <p>
            Every cup, every label, and every detail is designed to feel calm rather than
            overwhelming — the same way we want matcha itself to feel.
          </p>
        </div>
      </Section>

      {/* What's Next */}
      <Section className="pt-0 pb-48">
        <Eyebrow>What's Next</Eyebrow>
        <h2 className="font-display text-crimson text-[30px] font-extrabold uppercase leading-[1.1] whitespace-nowrap mb-8">
          This is just the beginning.
        </h2>
        <div className="space-y-5 text-charcoal/60 font-body text-base md:text-lg leading-relaxed text-center">
          <p>
            We will be expanding Latcha with new flavours, new accessories, and an ever-growing
            Latcha universe.
          </p>
          <p className="font-medium text-charcoal/75">Stay tuned.</p>
        </div>
      </Section>

      <div className="h-8" />

      <Footer />
    </div>
  );
};

export default About;
