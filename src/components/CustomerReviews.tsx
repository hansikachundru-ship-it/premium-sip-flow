import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  name: string;
  image: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Vivin",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding quality and value. I've recommended this to all my friends and family.",
  },
  {
    name: "Vikas Khanna",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "I've tried a few matcha brands before but this one felt smoother. No strong bitterness, just a clean taste.",
  },
  {
    name: "Roni Sinha",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "I'm new to matcha and this didn't intimidate me at all. Very beginner-friendly.",
  },
  {
    name: "Christy",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "No grainy texture at all, which was a big issue with other brands I tried. Love this.",
  },
  {
    name: "Arjun",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The color is so vibrant and the taste is incredibly smooth. Best matcha I've had in India.",
  },
];

const CustomerReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16 bg-blush">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
        <h2 className="font-display text-[#1a6b3c] text-2xl sm:text-3xl md:text-4xl font-extrabold text-center uppercase tracking-wide">
          What Our Customers Say
        </h2>
        <p className="font-body text-[#1a6b3c]/70 text-sm sm:text-base text-center mt-2 mb-8 md:mb-10">
          Hear from our happy customers
        </p>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#1a6b3c]/20 text-[#1a6b3c] flex items-center justify-center hover:bg-white shadow-sm transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 border border-[#1a6b3c]/20 text-[#1a6b3c] flex items-center justify-center hover:bg-white shadow-sm transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-2"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] max-w-[300px] flex-shrink-0 bg-blush border-2 border-[#1a6b3c]/40 rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-lg hover:border-[#1a6b3c]/70 hover:-translate-y-1 transition-all duration-300"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="w-40 h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-[#1a6b3c] text-base sm:text-lg font-bold">
                  {review.name}
                </h3>
                <div className="flex gap-0.5 mt-1.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-body text-[#1a6b3c]/70 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
