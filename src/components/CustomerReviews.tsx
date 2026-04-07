import { useEffect, useRef, useState } from "react";

interface Review {
  name: string;
  image: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Vivin",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
    text: "Outstanding quality and value. I've recommended this to all my friends and family.",
  },
  {
    name: "Vikas Khanna",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&crop=face",
    text: "Smoother than any matcha I've tried. No strong bitterness, just a clean taste.",
  },
  {
    name: "Roni Sinha",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=face",
    text: "I'm new to matcha and this didn't intimidate me at all. Very beginner-friendly.",
  },
  {
    name: "Christy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face",
    text: "No grainy texture at all — a big issue with other brands I tried. Love this.",
  },
  {
    name: "Arjun",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=face",
    text: "Vibrant color and incredibly smooth taste. Best matcha I've had in India.",
  },
  {
    name: "Maleka Ramchandani",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&crop=face",
    text: "Best purchase I've made this year. The customer service was exceptional and delivery was fast.",
  },
  {
    name: "Karan S.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
    text: "Switched from coffee — the energy is calm and sustained. No jitters at all.",
  },
  {
    name: "Kezia Abrahams",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop&crop=face",
    text: "I'm so impressed with the attention to detail. This has become my go-to brand!",
  },
];

const YellowStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#F5A623" xmlns="http://www.w3.org/2000/svg">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 mb-6">
        <h2 className="font-display text-crimson text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-wide">
          What Our Customers Say
        </h2>
        <p className="font-body text-crimson text-xs sm:text-sm md:text-base lg:text-lg text-center mt-1">
          Hear from our happy customers
        </p>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div ref={trackRef} className="flex gap-5 w-max will-change-transform pl-4">
          {duplicated.map((review, i) => (
            <div
              key={i}
              className="w-[280px] sm:w-[300px] flex-shrink-0 bg-crimson rounded-2xl p-4 pb-5 flex flex-col items-center text-center shadow-md"
            >
              {/* Square image */}
              <div className="w-[calc(100%-16px)] aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="font-display text-blush text-base font-bold leading-tight">
                {review.name}
              </h3>

              {/* Stars */}
              <div className="flex gap-0.5 mt-2 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <YellowStar key={s} />
                ))}
              </div>

              {/* Review text */}
              <p className="font-body text-blush/75 text-sm leading-relaxed italic">
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
