import { useEffect, useRef, useState } from "react";

interface Review {
  name: string;
  image: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Vivin",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    text: "Outstanding quality and value. I've recommended this to all my friends and family. The taste is unlike anything else.",
  },
  {
    name: "Vikas Khanna",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    text: "Smoother than any matcha I've tried before. No strong bitterness, just a clean and delicate taste every single time.",
  },
  {
    name: "Roni Sinha",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    text: "I'm completely new to matcha and this didn't intimidate me at all. Very beginner-friendly and easy to prepare.",
  },
  {
    name: "Christy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    text: "No grainy texture at all — that was always a big issue with other brands I tried. Absolutely love this.",
  },
  {
    name: "Arjun",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    text: "The color is so vibrant and the taste is incredibly smooth. Easily the best matcha I've had in India.",
  },
  {
    name: "Priya M.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    text: "My morning ritual is now complete. The froth you get with a bamboo whisk is absolutely unreal.",
  },
  {
    name: "Karan S.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    text: "Switched from coffee to this and haven't looked back. The energy is calm and sustained with zero jitters.",
  },
  {
    name: "Kezia Abrahams",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    text: "I'm so impressed with the attention to detail — from packaging to taste. This has become my go-to brand!",
  },
];

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-blush/80">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CustomerReviews = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);

  const duplicated = [...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;

    const step = () => {
      if (!paused) {
        posRef.current += 0.4;
        if (posRef.current >= half) posRef.current -= half;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [paused]);

  return (
    <section className="pt-6 pb-10 md:pt-8 md:pb-12 bg-blush overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 mb-5">
        <h2 className="font-display text-crimson text-xl sm:text-2xl md:text-3xl font-extrabold text-center uppercase tracking-wide">
          What Our Customers Say
        </h2>
        <p className="font-body text-crimson/45 text-xs sm:text-sm text-center mt-1">
          Hear from our happy customers
        </p>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={trackRef} className="flex gap-4 w-max will-change-transform pl-4">
          {duplicated.map((review, i) => (
            <div
              key={i}
              className="w-[340px] sm:w-[370px] flex-shrink-0 bg-crimson rounded-2xl shadow-md p-4 flex items-center gap-4"
            >
              {/* Square image */}
              <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex gap-[2px] mb-1.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
                <p className="font-body text-blush/75 text-[11px] leading-[1.5] line-clamp-3">
                  {review.text}
                </p>
                <p className="font-display text-blush text-xs font-semibold mt-2">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
