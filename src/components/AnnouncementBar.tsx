import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const messages = [
  "India's 1st Premium Matcha Brand. Straight from Uji, Japan",
  "FREE shipping on orders above Rs.999",
  "New Hampers just dropped. Perfect for your bestie",
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-crimson text-blush font-display text-xs md:text-sm py-2.5 px-4 relative flex items-center justify-center gap-3">
      <button
        onClick={() => setCurrent((c) => (c - 1 + messages.length) % messages.length)}
        className="text-blush/70 hover:text-blush transition-colors"
        aria-label="Previous announcement"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <span className="text-center font-medium tracking-wide">{messages[current]}</span>
      <button
        onClick={() => setCurrent((c) => (c + 1) % messages.length)}
        className="text-blush/70 hover:text-blush transition-colors"
        aria-label="Next announcement"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 text-blush/50 hover:text-blush transition-colors"
        aria-label="Close announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
