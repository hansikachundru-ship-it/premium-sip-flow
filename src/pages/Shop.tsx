import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import shopCardTexture from "@/assets/shop-card-texture.png";
import { useCartStore } from "@/stores/cartStore";

interface Product {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
}

interface ShopCategory {
  id: string;
  title: string;
  products: Product[];
}

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group flex flex-col"
    >
      {/* Outer red card with texture */}
      <div className="rounded-3xl overflow-hidden bg-crimson relative">
        <img src={shopCardTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="relative p-3 pb-6">
          {/* Inner blush pink panel */}
          <div className="bg-blush/30 rounded-2xl p-3">
            {/* Red product image placeholder */}
            <div className="aspect-square rounded-xl overflow-hidden bg-crimson/90 relative flex items-center justify-center">
              <img src={shopCardTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <span className="relative font-display text-blush/70 text-sm uppercase tracking-widest font-bold">Product Image</span>
            </div>
          </div>
          {/* Card bottom info */}
          <div className="mt-4 text-center px-2 pb-1">
            <h3 className="font-display text-blush font-bold text-sm md:text-base leading-tight">{product.name}</h3>
            <p className="font-body text-blush/80 text-sm mt-1">{product.priceDisplay}</p>
            <button
              onClick={() => addItem({ id: product.id, name: product.name, price: product.price, priceDisplay: product.priceDisplay })}
              className="mt-3 border-2 border-blush text-blush font-display text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-blush hover:text-crimson transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
