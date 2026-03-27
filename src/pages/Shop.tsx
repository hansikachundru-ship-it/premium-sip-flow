import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import shopCardTexture from "@/assets/shop-card-texture.png";
import matchaProduct1 from "@/assets/matcha-product-1.png";
import matchaProduct2 from "@/assets/matcha-product-2.png";
import matchaProduct3 from "@/assets/matcha-product-3.png";
import { useCartStore } from "@/stores/cartStore";

interface Product {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  image?: string;
}

interface ShopCategory {
  id: string;
  title: string;
  products: Product[];
}

const shopData: ShopCategory[] = [
  {
    id: "matcha",
    title: "Shop Matcha",
    products: [
      { id: "m1", name: "Latcha Matcha Powder", price: 1499, priceDisplay: "Rs. 1,499", image: matchaProduct1 },
      { id: "m2", name: "Latcha Matcha Powder", price: 1699, priceDisplay: "Rs. 1,699", image: matchaProduct2 },
      { id: "m3", name: "Latcha Matcha Powder", price: 1299, priceDisplay: "Rs. 1,299", image: matchaProduct3 },
    ],
  },
  {
    id: "bundles",
    title: "Shop Bundles",
    products: [
      { id: "b1", name: "Matcha Starter Kit", price: 2499, priceDisplay: "Rs. 2,499" },
      { id: "b2", name: "Matcha Lover's Bundle", price: 3299, priceDisplay: "Rs. 3,299" },
      { id: "b3", name: "Ultimate Matcha Experience", price: 4499, priceDisplay: "Rs. 4,499" },
    ],
  },
  {
    id: "accessories",
    title: "Shop Accessories",
    products: [
      { id: "a1", name: "Bamboo Chasen Whisk", price: 899, priceDisplay: "Rs. 899" },
      { id: "a2", name: "Ceramic Chawan Bowl", price: 1199, priceDisplay: "Rs. 1,199" },
      { id: "a3", name: "Bamboo Chashaku Scoop", price: 499, priceDisplay: "Rs. 499" },
    ],
  },
  {
    id: "merch",
    title: "Shop Merch",
    products: [
      { id: "r1", name: "Latcha Signature Tote Bag", price: 699, priceDisplay: "Rs. 699" },
      { id: "r2", name: "Latcha Ceramic Tumbler", price: 1099, priceDisplay: "Rs. 1,099" },
      { id: "r3", name: "Latcha Matcha Sticker Pack", price: 299, priceDisplay: "Rs. 299" },
    ],
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex flex-col min-w-[260px] sm:min-w-[280px]"
    >
      <div className="rounded-3xl overflow-hidden bg-crimson relative shadow-lg shadow-crimson/20 flex flex-col h-full">
        <img src={shopCardTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        
        {/* Top red section — product image area */}
        <div className="relative p-3 pb-0">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-crimson/90 relative flex items-center justify-center border border-blush/20">
            <img src={shopCardTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="relative w-[75%] h-[85%] object-contain drop-shadow-lg"
              />
            ) : (
              <span className="relative font-display text-blush/70 text-sm uppercase tracking-widest font-bold">Product Image</span>
            )}
          </div>
        </div>

        {/* Bottom blush section — info area */}
        <div className="relative mt-3 bg-blush rounded-t-2xl p-5 flex flex-col items-center flex-1">
          <h3 className="font-display text-crimson font-bold text-sm md:text-base leading-tight text-center min-h-[2.5rem] flex items-center">{product.name}</h3>
          <p className="font-body text-crimson/80 text-sm mt-1">{product.priceDisplay}</p>
          <button
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, priceDisplay: product.priceDisplay })}
            className="mt-3 border-2 border-crimson text-crimson font-display text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full hover:bg-crimson hover:text-blush transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ShopCategorySection = ({ category }: { category: ShopCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div id={category.id} className="mb-12 md:mb-16 scroll-mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-crimson text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide mb-8 md:mb-12 text-center"
      >
        {category.title}
      </motion.h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-10 w-10 h-10 rounded-full bg-blush border-2 border-crimson text-crimson flex items-center justify-center hover:bg-crimson hover:text-blush transition-colors shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Cards row */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto scrollbar-hide px-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {category.products.map((product, i) => (
            <div key={product.id} className="flex-1 min-w-[260px] sm:min-w-[280px] snap-start">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-10 w-10 h-10 rounded-full bg-blush border-2 border-crimson text-crimson flex items-center justify-center hover:bg-crimson hover:text-blush transition-colors shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const Shop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-blush">
      <Navbar />
      <main className="pt-8 pb-8 px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        {shopData.map((category) => (
          <ShopCategorySection key={category.id} category={category} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
