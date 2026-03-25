import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  name: string;
  price: string;
  image?: string;
}

interface ShopCategory {
  title: string;
  products: Product[];
}

const shopData: ShopCategory[] = [
  {
    title: "Shop Our Ceremonial Matcha",
    products: [
      { name: "Uji Okumidori Ceremonial Matcha", price: "From ₹1,499" },
      { name: "Uji Samidori Ceremonial Matcha", price: "From ₹1,699" },
      { name: "Uji Premium Blend Ceremonial Matcha", price: "From ₹1,299" },
    ],
  },
  {
    title: "Shop Our Bundles",
    products: [
      { name: "Matcha Starter Kit", price: "From ₹2,499" },
      { name: "Matcha Lover's Bundle", price: "From ₹3,299" },
      { name: "Ultimate Matcha Experience", price: "From ₹4,499" },
    ],
  },
  {
    title: "Shop Our Accessories",
    products: [
      { name: "Bamboo Chasen Whisk", price: "From ₹899" },
      { name: "Ceramic Chawan Bowl", price: "From ₹1,199" },
      { name: "Bamboo Chashaku Scoop", price: "From ₹499" },
    ],
  },
  {
    title: "Shop Our Merch",
    products: [
      { name: "Latcha Signature Tote Bag", price: "From ₹699" },
      { name: "Latcha Ceramic Tumbler", price: "From ₹1,099" },
      { name: "Latcha Matcha Sticker Pack", price: "From ₹299" },
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
    {/* Image area with crimson background */}
    <div className="aspect-square rounded-2xl bg-crimson/90 overflow-hidden flex items-center justify-center p-8 group-hover:bg-crimson transition-colors duration-300">
      <div className="w-full h-full rounded-xl bg-crimson-light/20 flex items-center justify-center">
        <span className="font-display text-primary-foreground/40 text-sm uppercase tracking-widest">
          Product Image
        </span>
      </div>
    </div>

    {/* Product info */}
    <div className="mt-4 text-center">
      <h3 className="font-display text-foreground font-bold text-sm md:text-base leading-tight">
        {product.name}
      </h3>
      <p className="font-body text-muted-foreground text-sm mt-1">
        {product.price}
      </p>
      <button className="mt-3 border-2 border-crimson text-crimson font-display text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-crimson hover:text-primary-foreground transition-colors duration-300">
        Add to Cart
      </button>
    </div>
  </motion.div>
);

const ShopCategorySection = ({ category, sectionIndex }: { category: ShopCategory; sectionIndex: number }) => (
  <div className="mb-16 md:mb-24">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-display text-crimson text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide mb-8 md:mb-12"
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20 xl:px-28 max-w-7xl mx-auto">
        {shopData.map((category, i) => (
          <ShopCategorySection key={category.title} category={category} sectionIndex={i} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
