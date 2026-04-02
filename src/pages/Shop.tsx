import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
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
  images?: string[];
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
      {
        id: "m1",
        name: "Latcha Matcha Powder",
        price: 1499,
        priceDisplay: "Rs. 1,499",
        images: [matchaProduct1, matchaProduct2, matchaProduct3],
      },
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
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const [currentImage, setCurrentImage] = useState(0);
  const [showAdded, setShowAdded] = useState(false);
  const images = product.images;
  const hasMultipleImages = images && images.length > 1;

  const prevImage = () => {
    if (!images) return;
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = () => {
    if (!images) return;
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price, priceDisplay: product.priceDisplay, image: product.images?.[0] });
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex flex-col w-full max-w-[280px] sm:max-w-[320px]"
    >
      {/* Toast notification */}
      <AnimatePresence>
        {showAdded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-2 sm:mb-3 flex items-center gap-2 bg-crimson text-blush rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mx-auto shadow-lg"
          >
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-body text-[10px] sm:text-xs font-medium">Added to cart! 🛍️</span>
            <button onClick={() => { openCart(); setShowAdded(false); }} className="ml-1.5 sm:ml-2 underline text-[10px] sm:text-xs font-body">View Cart</button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-crimson relative shadow-lg shadow-crimson/20 flex flex-col h-full">
        <img src={shopCardTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />

        {/* Image area */}
        <div className="relative">
          <div className="aspect-square overflow-hidden relative flex items-center justify-center">
            <img src={shopCardTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            {images && images.length > 0 ? (
              <img
                src={images[currentImage]}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="relative w-full h-full object-cover"
              />
            ) : (
              <span className="relative font-display text-blush/70 text-xs sm:text-sm uppercase tracking-widest font-bold">Product Image</span>
            )}
          </div>

          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1.5 sm:left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blush/80 border border-crimson/30 text-crimson flex items-center justify-center hover:bg-blush transition-colors shadow"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blush/80 border border-crimson/30 text-crimson flex items-center justify-center hover:bg-blush transition-colors shadow"
                aria-label="Next image"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${i === currentImage ? "bg-blush" : "bg-blush/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Bottom blush section */}
        <div className="relative bg-blush rounded-t-xl sm:rounded-t-2xl p-3 sm:p-4 md:p-5 flex flex-col items-center flex-1">
          <h3 className="font-display text-crimson font-bold text-xs sm:text-sm md:text-base leading-tight text-center min-h-[2rem] sm:min-h-[2.5rem] flex items-center">{product.name}</h3>
          <p className="font-body text-crimson/80 text-xs sm:text-sm mt-0.5 sm:mt-1">{product.priceDisplay}</p>

          <button
            onClick={handleAddToCart}
            className="mt-2 sm:mt-3 w-full border-2 border-crimson text-crimson font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-2 rounded-full hover:bg-crimson hover:text-blush transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ShopCategorySection = ({ category }: { category: ShopCategory }) => (
  <div id={category.id} className="mb-8 sm:mb-12 md:mb-16 scroll-mt-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-crimson text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide mb-6 sm:mb-8 md:mb-12 text-center"
    >
      {category.title}
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
      {category.products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  </div>
);

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
      <main className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        {shopData.map((category) => (
          <ShopCategorySection key={category.id} category={category} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
