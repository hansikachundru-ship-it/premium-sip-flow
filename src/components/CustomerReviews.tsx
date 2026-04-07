import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  image: string;
  rating: number;
  text: string;
  verified?: boolean;
}

const reviews: Review[] = [
  {
    name: "Vivin",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding quality and value. I've recommended this to all my friends and family.",
    verified: true,
  },
  {
    name: "Vikas Khanna",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Smoother than any matcha I've tried. No bitterness, just a clean taste.",
    verified: true,
  },
  {
    name: "Roni Sinha",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "I'm new to matcha and this didn't intimidate me at all. Very beginner-friendly.",
    verified: true,
  },
  {
    name: "Christy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "No grainy texture at all — a big issue with other brands. Love this.",
    verified: true,
  },
  {
    name: "Arjun",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Vibrant color and incredibly smooth taste. Best matcha I've had in India.",
    verified: true,
  },
  {
    name: "Priya M.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "My morning ritual is now complete. The froth is unreal with a bamboo whisk.",
    verified: true,
  },
  {
    name: "Karan S.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Switched from coffee to this — the energy is calm and sustained. No jitters.",
    verified: true,
  },
  {
    name: "Ananya R.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Packaging is gorgeous and the matcha tastes even better. Premium quality.",
    verified: true,
  },
];

const CustomerReviews = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const animRef = useRef<number>(0);
  const posRef = useRef(0);
  const speedRef = useRef(0.5);

  // Duplicate cards for seamless loop
  const duplicated = [...reviews, ...reviews];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const singleSetWidth = track.scrollWidth / 2;

    const step = () => {
      if (!paused) {
        posRef.current += speedRef.current;
        if (posRef.current >= singleSetWidth) {
          posRef.current -= singleSetWidth;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [paused]);

  return (
    <section className="py-8 md:py-10 bg-blush overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 mb-6">
        <h2 className="font-display text-crimson text-xl sm:text-2xl md:text-3xl font-extrabold text-center uppercase tracking-wide">
          What Our Customers Say
        </h2>
        <p className="font-body text-crimson/50 text-xs sm:text-sm text-center mt-1">
          Hear from our happy customers
        </p>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-4 w-max will-change-transform"
          style={{ paddingLeft: "16px" }}
        >
          {duplicated.map((review, i) => (
            <div
              key={i}
              className="w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 bg-crimson rounded-2xl p-5 flex flex-col items-center text-center shadow-md"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-blush/30">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-blush text-sm font-bold leading-tight">
                {review.name}
              </h3>
              {review.verified && (
                <span className="text-blush/40 text-[10px] font-body mt-0.5 uppercase tracking-wider">
                  Verified Buyer
                </span>
              )}
              <div className="flex gap-0.5 mt-2 mb-2">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-blush/80 text-blush/80" />
                ))}
              </div>
              <p className="font-body text-blush/70 text-xs leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
