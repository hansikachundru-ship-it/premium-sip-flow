import { useEffect, useState } from "react";
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
  const [currentImage, setCurrentImage] = useState(0);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex flex-col w-full max-w-[320px]"
    >
      <div className="rounded-3xl overflow-hidden bg-crimson relative shadow-lg shadow-crimson/20 flex flex-col h-full">
        <img src={shopCardTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />

        {/* Image area */}
        <div className="relative">
          <div className="aspect-square overflow-hidden relative flex items-center justify-center">
            <img src={shopCardTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
            {images && images.length > 0 ? (
              <img
                src={images[currentImage]}
                alt={product.name}
                className="relative w-full h-full object-cover"
              />
            ) : (
              <span className="relative font-display text-blush/70 text-sm uppercase tracking-widest font-bold">Product Image</span>
            )}
          </div>

          {/* Arrows inside the image area */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-blush/80 border border-crimson/30 text-crimson flex items-center justify-center hover:bg-blush transition-colors shadow"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-blush/80 border border-crimson/30 text-crimson flex items-center justify-center hover:bg-blush transition-colors shadow"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === currentImage ? "bg-blush" : "bg-blush/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Bottom blush section */}
        <div className="relative bg-blush rounded-t-2xl p-5 flex flex-col items-center flex-1">
          <h3 className="font-display text-crimson font-bold text-sm md:text-base leading-tight text-center min-h-[2.5rem] flex items-center">{product.name}</h3>
          <p className="font-body text-crimson/80 text-sm mt-1">{product.priceDisplay}</p>
          <button
            onClick={() => addItem({ id: product.id, name: product.name, price: product.price, priceDisplay: product.priceDisplay, image: product.images?.[0] })}
            className="mt-3 border-2 border-crimson text-crimson font-display text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full hover:bg-crimson hover:text-blush transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ShopCategorySection = ({ category }: { category: ShopCategory }) => (
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
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
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
