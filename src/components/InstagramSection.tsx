import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const reelLinks = [
  "https://www.instagram.com/reel/DTi_Y3vk6fq/",
  "https://www.instagram.com/reel/DUsv4NyklRe/",
  "https://www.instagram.com/reel/DT-R4MWkmSL/",
  "https://www.instagram.com/reel/DVi4HQ5Enb1/",
  "https://www.instagram.com/reel/DWA-p1zkYg5/",
  "https://www.instagram.com/reel/DV6i3uDD1Nm/",
];

const reelColors = [
  "bg-crimson/10",
  "bg-matcha/15",
  "bg-crimson/15",
  "bg-matcha/20",
  "bg-crimson/10",
  "bg-matcha/15",
];

import React from "react";

const InstagramSection = React.forwardRef<HTMLElement>((_, ref) => {
  const doubled = [...reelLinks, ...reelLinks];
  const doubledColors = [...reelColors, ...reelColors];

  return (
    <section ref={ref} className="py-14 md:py-20 bg-blush overflow-hidden">
      <div className="text-center mb-8 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-crimson text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 whitespace-nowrap"
        >
          we're kinda cute on the 'gram
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-charcoal/60 text-base"
        >
          join our community to stay updated with our creations
        </motion.p>
      </div>

      {/* Moving reels */}
      <div className="overflow-hidden mb-8">
        <div className="animate-marquee flex gap-3">
          {doubled.map((reel, i) => (
            <a
              key={i}
              href={reel}
              target="_blank"
              rel="noopener noreferrer"
              className={`${doubledColors[i % doubledColors.length]} rounded-xl w-32 h-44 md:w-40 md:h-56 flex-shrink-0 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow hover:scale-[1.02] transition-transform`}
            >
              <Instagram className="w-6 h-6 text-crimson/40" />
            </a>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://www.instagram.com/siplatcha"
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
