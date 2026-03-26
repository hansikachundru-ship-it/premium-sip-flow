import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import shopCardBg from "@/assets/shop-card-bg.png";
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

const shopData: ShopCategory[] = [
  {
    id: "matcha",
    title: "Shop our ceremonial matcha",
    products: [
      { id: "m1", name: "Uji Okumidori Ceremonial Matcha", price: 1499, priceDisplay: "Rs. 1,499" },
      { id: "m2", name: "Uji Samidori Ceremonial Matcha", price: 1699, priceDisplay: "Rs. 1,699" },
      { id: "m3", name: "Uji Premium Blend Ceremonial Matcha", price: 1299, priceDisplay: "Rs. 1,299" },
    ],
  },
  {
    id: "bundles",
    title: "Shop our bundles",
    products: [
      { id: "b1", name: "Matcha Starter Kit", price: 2499, priceDisplay: "Rs. 2,499" },
      { id: "b2", name: "Matcha Lover's Bundle", price: 3299, priceDisplay: "Rs. 3,299" },
      { id: "b3", name: "Ultimate Matcha Experience", price: 4499, priceDisplay: "Rs. 4,499" },
    ],
  },
  {
    id: "accessories",
    title: "Shop our accessories",
    products: [
      { id: "a1", name: "Bamboo Chasen Whisk", price: 899, priceDisplay: "Rs. 899" },
      { id: "a2", name: "Ceramic Chawan Bowl", price: 1199, priceDisplay: "Rs. 1,199" },
      { id: "a3", name: "Bamboo Chashaku Scoop", price: 499, priceDisplay: "Rs. 499" },
    ],
  },
  {
    id: "merch",
    title: "Shop our merch",
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
      className="group flex flex-col"
    >
      <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-8 relative">
        <img src={shopCardBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative w-full h-full rounded-xl flex items-center justify-center">
          <span className="font-display text-blush/40 text-sm uppercase tracking-widest">Product Image</span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-display text-crimson font-bold text-sm md:text-base leading-tight">{product.name}</h3>
        <p className="font-body text-crimson/60 text-sm mt-1">{product.priceDisplay}</p>
        <button
          onClick={() => addItem({ id: product.id, name: product.name, price: product.price, priceDisplay: product.priceDisplay })}
          className="mt-3 border-2 border-crimson text-crimson font-display text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-crimson hover:text-blush transition-colors duration-300"
        >
          Add to Cart
        </button>
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
