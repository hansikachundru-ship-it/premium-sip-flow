import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import shopCardBg from "@/assets/shop-card-bg.png";

interface Product {
  name: string;
  price: string;
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
      { name: "Uji Okumidori Ceremonial Matcha", price: "Rs. 1,499" },
      { name: "Uji Samidori Ceremonial Matcha", price: "Rs. 1,699" },
      { name: "Uji Premium Blend Ceremonial Matcha", price: "Rs. 1,299" },
    ],
  },
  {
    id: "bundles",
    title: "Shop our bundles",
    products: [
      { name: "Matcha Starter Kit", price: "Rs. 2,499" },
      { name: "Matcha Lover's Bundle", price: "Rs. 3,299" },
      { name: "Ultimate Matcha Experience", price: "Rs. 4,499" },
    ],
  },
  {
    id: "accessories",
    title: "Shop our accessories",
    products: [
      { name: "Bamboo Chasen Whisk", price: "Rs. 899" },
      { name: "Ceramic Chawan Bowl", price: "Rs. 1,199" },
      { name: "Bamboo Chashaku Scoop", price: "Rs. 499" },
    ],
  },
  {
    id: "merch",
    title: "Shop our merch",
    products: [
      { name: "Latcha Signature Tote Bag", price: "Rs. 699" },
      { name: "Latcha Ceramic Tumbler", price: "Rs. 1,099" },
      { name: "Latcha Matcha Sticker Pack", price: "Rs. 299" },
    ],
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group flex flex-col"
  >
    {/* Image area with textured background */}
    <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-8 relative">
      <img
        src={shopCardBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative w-full h-full rounded-xl flex items-center justify-center">
        <span className="font-display text-blush/40 text-sm uppercase tracking-widest">
          Product Image
        </span>
      </div>
    </div>

    {/* Product info */}
    <div className="mt-4 text-center">
      <h3 className="font-display text-crimson font-bold text-sm md:text-base leading-tight">
        {product.name}
      </h3>
      <p className="font-body text-crimson/60 text-sm mt-1">
        {product.price}
      </p>
      <button className="mt-3 border-2 border-crimson text-crimson font-display text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-crimson hover:text-blush transition-colors duration-300">
        Add to Cart
      </button>
    </div>
  </motion.div>
);

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
        <ProductCard key={product.name} product={product} index={i} />
      ))}
    </div>
  </div>
);

const Shop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-blush">
      <Navbar />
      <main className="pt-8 pb-8 px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        {shopData.map((category) => (
          <ShopCategorySection key={category.title} category={category} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
