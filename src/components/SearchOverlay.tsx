import { useState, useEffect, useRef } from "react";
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ProductResult {
  id: string;
  name: string;
  price: string;
  category: string;
  section: string;
}

const allProducts: ProductResult[] = [
  { id: "m1", name: "Uji Okumidori Ceremonial Matcha", price: "Rs. 1,499", category: "matcha", section: "matcha" },
  { id: "m2", name: "Uji Samidori Ceremonial Matcha", price: "Rs. 1,699", category: "matcha", section: "matcha" },
  { id: "m3", name: "Uji Premium Blend Ceremonial Matcha", price: "Rs. 1,299", category: "matcha", section: "matcha" },
  { id: "b1", name: "Matcha Starter Kit", price: "Rs. 2,499", category: "bundles", section: "bundles" },
  { id: "b2", name: "Matcha Lover's Bundle", price: "Rs. 3,299", category: "bundles", section: "bundles" },
  { id: "b3", name: "Ultimate Matcha Experience", price: "Rs. 4,499", category: "bundles", section: "bundles" },
  { id: "a1", name: "Bamboo Chasen Whisk", price: "Rs. 899", category: "accessories", section: "accessories" },
  { id: "a2", name: "Ceramic Chawan Bowl", price: "Rs. 1,199", category: "accessories", section: "accessories" },
  { id: "a3", name: "Bamboo Chashaku Scoop", price: "Rs. 499", category: "accessories", section: "accessories" },
  { id: "r1", name: "Latcha Signature Tote Bag", price: "Rs. 699", category: "merch", section: "merch" },
  { id: "r2", name: "Latcha Ceramic Tumbler", price: "Rs. 1,099", category: "merch", section: "merch" },
  { id: "r3", name: "Latcha Matcha Sticker Pack", price: "Rs. 299", category: "merch", section: "merch" },
];

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = query.length > 0
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleProductClick = (product: ProductResult) => {
    onClose();
    navigate(`/shop#${product.section}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-charcoal/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-blush rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-crimson/10">
              <Search className="w-5 h-5 text-crimson/50" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent font-body text-crimson text-sm outline-none placeholder:text-crimson/40"
              />
              <button onClick={onClose} className="text-crimson/50 hover:text-crimson">
                <X className="w-5 h-5" />
              </button>
            </div>

            {query.length > 0 && (
              <div className="max-h-80 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleProductClick(product)}
                      className="w-full flex items-center justify-between px-5 py-3 hover:bg-crimson/5 transition-colors text-left"
                    >
                      <div>
                        <p className="font-display text-crimson text-sm font-bold">{product.name}</p>
                        <p className="font-body text-crimson/50 text-xs capitalize">{product.category}</p>
                      </div>
                      <span className="font-body text-crimson/70 text-sm">{product.price}</span>
                    </button>
                  ))
                ) : (
                  <p className="px-5 py-8 text-center font-body text-crimson/40 text-sm">
                    No products found for "{query}"
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
