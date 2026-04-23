import { useEffect, useRef, useState } from "react";

interface Review {
  name: string;
  image: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Priya Ramesh",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=face",
    text: "honestly was so skeptical at first because I've tried so many matchas and they're always so bitter?? but this one is actually smooth and creamy. i make it every morning now and my whole routine has changed lol. also the packaging is so cute i keep it on my desk",
    rating: 5,
  },
  {
    name: "Arjun M.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=face",
    text: "Good product. Taste is very different from what I expected, in a good way. I usually drink coffee but my girlfriend got me into this. Only thing is I wish they had smaller pack to try first before buying full size. Will order again though",
    rating: 4,
  },
  {
    name: "Sneha Krishnan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face",
    text: "OBSESSED. I visited the JP nagar cafe first and then ordered online because I couldn't stop thinking about it. the powder mixes so well no lumps nothing. worth every rupee honestly",
    rating: 5,
  },
  {
    name: "Rahul T.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&crop=face",
    text: "taste is authentic, you can tell its good quality matcha. I've had japanese matcha before when i travelled and this is very close to that. delivery was also fast. minus one star only because i spilled it opening the tin lol that's my fault not theirs",
    rating: 4,
  },
  {
    name: "Ananya Sharma",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop&crop=face",
    text: "okay so I started drinking this because of the instagram reels and I don't regret it at all. No sugar no additives and it actually tastes good?? I make iced matcha latte every day with oat milk. my skin has also been better but that might be coincidence haha. 10/10 would recommend",
    rating: 5,
  },
  {
    name: "Vikram D.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
    text: "Very good matcha. I am not big reviewer but felt like writing this because quality is genuinely surprising for Indian brand. Stone milled you can feel the difference in texture. My wife also likes it now she was not interested before. Half star less only because tin is little hard to open",
    rating: 4.5,
  },
];

const YellowStar = ({ half = false }: { half?: boolean }) => {
  if (half) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="halfStarGrad">
            <stop offset="50%" stopColor="#F5A623" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="url(#halfStarGrad)"
          stroke="#F5A623"
          strokeWidth="1"
        />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#F5A623" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

const EmptyStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<YellowStar key={i} />);
    else if (rating >= i - 0.5) stars.push(<YellowStar key={i} half />);
    else stars.push(<EmptyStar key={i} />);
  }
  return stars;
};

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 mb-6 flex flex-col items-center">
        <h2 className="font-display text-crimson text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-wide whitespace-nowrap mx-auto">
          Welcome To The Latcha Club
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
                {renderStars(review.rating)}
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
