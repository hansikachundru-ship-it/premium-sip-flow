import { useEffect, useRef, useState } from "react";
import shaneezImage from "@/assets/review-shaneez.png";
import sahanaImage from "@/assets/review-sahana.png";
import tanishiImage from "@/assets/review-tanishi.png";
import anushaImage from "@/assets/review-anusha.png";
import arjunImage from "@/assets/review-arjun.png";

interface Review {
  name: string;
  image: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Shaneez Halim",
    image: shaneezImage,
    text: "Absolutely loved this place. I tried the cloud matcha latte and the matcha soft serve, and both were fantastic. The matcha flavor is smooth, rich, and not overly sweet—clearly high quality. The cloud latte was super creamy and comforting, and the soft serve was perfectly balanced and refreshing. If you're a matcha fan, this spot is a must. I'll definitely be back.",
    rating: 5,
  },
  {
    name: "Anusha Shivanna",
    image: anushaImage,
    text: "Matcha has a smooth, earthy flavor with a mild natural sweetness. It gives calm and long-lasting energy without the jitters of coffee. The taste feels refreshing and clean",
    rating: 5,
  },
  {
    name: "Tanishi Chugh",
    image: tanishiImage,
    text: "The place was all cute and pink. Tried their matcha monster and raspberry matcha latte, and both were too good. Also tried their matcha soft serve and it was so yummmm. Gonna go there again for sure to try their famous cookie butter matcha",
    rating: 5,
  },
  {
    name: "Arjun",
    image: arjunImage,
    text: "okay so I started drinking this because of the instagram reels and I don't regret it at all. No sugar no additives and it actually tastes good?? I make iced matcha latte every day with oat milk. my skin has also been better but that might be coincidence haha. 10/10 would recommend",
    rating: 5,
  },
  {
    name: "Sahana M",
    image: sahanaImage,
    text: "This matcha place has got a clean, aesthetic vibe that's perfect for a quick catch-up or a solo chill session. Their matcha is smooth, well-balanced, and not overly bitter, which shows good quality powder. The menu keeps it simple with classic and fun matcha-based drinks that are easy to love. Definitely worth checking out if you're craving a calm cafe experience with great matcha then this place is worth it",
    rating: 5,
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
      <div className="w-full px-4 sm:px-6 md:px-10 mb-6">
        <h2 className="font-display text-crimson text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-wide">
          Welcome To The Latcha Club
        </h2>
        <p className="font-body text-crimson/60 text-xs sm:text-sm md:text-base lg:text-lg text-center mt-1">
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
