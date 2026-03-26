import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ReelItem {
  link: string;
  video?: string;
}

const reelItems: ReelItem[] = [
  { link: "https://www.instagram.com/reels/DTi_Y3vk6fq/", video: "/videos/reel-preview.mp4" },
  { link: "https://www.instagram.com/reel/DUsv4NyklRe/", video: "/videos/reel-preview-2.mp4" },
  { link: "https://www.instagram.com/reel/DT-R4MWkmSL/" },
  { link: "https://www.instagram.com/reel/DVi4HQ5Enb1/" },
  { link: "https://www.instagram.com/reel/DWA-p1zkYg5/" },
  { link: "https://www.instagram.com/reel/DV6i3uDD1Nm/" },
  { link: "https://www.instagram.com/reels/DTi_Y3vk6fq/", video: "/videos/reel-preview.mp4" },
  { link: "https://www.instagram.com/reel/DUsv4NyklRe/" },
];

const reelColors = [
  "bg-crimson/10",
  "bg-matcha/15",
  "bg-crimson/15",
  "bg-matcha/20",
  "bg-crimson/10",
  "bg-matcha/15",
  "bg-crimson/15",
  "bg-matcha/10",
];

const InstagramSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const animRef = useRef<number>();
  const speed = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      setOffset((prev) => {
        const halfWidth = track.scrollWidth / 2;
        const next = prev + speed;
        // When we've scrolled through the first set, seamlessly reset
        return next >= halfWidth ? 0 : next;
      });
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Double the items for seamless loop
  const allReels = [...reelItems, ...reelItems];
  const allColors = [...reelColors, ...reelColors];

  return (
    <section className="py-16 md:py-24 bg-blush overflow-hidden">
      <div className="text-center mb-10 md:mb-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-crimson text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 whitespace-nowrap"
        >
          we're kinda cute on the 'gram
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-charcoal/60 text-sm md:text-base lg:text-lg"
        >
          join our community to stay updated with our creations
        </motion.p>
      </div>

      {/* Smooth circular carousel */}
      <div className="overflow-hidden mb-10 md:mb-14">
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-5 will-change-transform"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {allReels.map((reel, i) => (
            <a
              key={i}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${allColors[i % allColors.length]} rounded-2xl w-44 h-60 md:w-52 md:h-72 lg:w-56 lg:h-80 flex-shrink-0 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 overflow-hidden relative`}
            >
              {reel.video ? (
                <video
                  src={reel.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <Instagram className="w-7 h-7 md:w-8 md:h-8 text-crimson/40" />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://www.instagram.com/siplatcha"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-crimson text-blush font-display font-bold text-sm md:text-base px-10 py-4 rounded-full hover:bg-crimson-dark transition-colors uppercase tracking-wider"
        >
          <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
