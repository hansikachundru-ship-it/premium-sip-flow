import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronDown, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import matchaProduct1 from "@/assets/matcha-product-1.png";
import matchaProduct2 from "@/assets/matcha-product-2.png";
import matchaProduct3 from "@/assets/matcha-product-3.png";
import { useCartStore } from "@/stores/cartStore";

const images = [matchaProduct1, matchaProduct2, matchaProduct3];

const accordionData = [
  {
    title: "Description",
    content:
      "From the historic, legendary farms of Shirakawa, Uji — Japan's most revered matcha terroir — this matcha reflects centuries of quiet mastery. Blended from native Uji cultivars — Okumidori × Samidori — this matcha is slow stone-milled to an ultra-fine 5–7 microns crafted for purity, depth and silk-smooth texture.",
  },
  {
    title: "Whisking Instructions",
    content:
      "Sift 1–2g of matcha into a bowl. Add 70ml of water at 80°C. Whisk briskly in a W-motion using a chasen (bamboo whisk) until frothy. For an iced latte, whisk with 30ml hot water, then pour over ice and milk of your choice.",
  },
  {
    title: "Storage & Care",
    content:
      "Store in a cool, dark place away from direct sunlight. Keep the tin tightly sealed after each use. For best freshness, consume within 4 weeks of opening. Refrigeration is recommended in warm climates.",
  },
];

const ProductDetail = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize] = useState("25g");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const prevImage = () => setCurrentImage((p) => (p === 0 ? images.length - 1 : p - 1));
  const nextImage = () => setCurrentImage((p) => (p === images.length - 1 ? 0 : p + 1));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: "m1",
        name: "Latcha Matcha Powder",
        price: 1499,
        priceDisplay: "Rs. 1,499",
        image: images[0],
      });
    }
    toast.success("Added to cart! 🛍️");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    openCart();
  };

  return (
    <div className="min-h-screen bg-blush">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-6 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-body text-crimson/60 mb-8 justify-center">
          <Link to="/" className="hover:text-crimson transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-crimson transition-colors">Shop Matcha</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-crimson font-medium">Matcha Powder</span>
        </nav>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Image carousel */}
          <div className="relative">
            <div className="bg-blush rounded-2xl overflow-hidden relative aspect-square flex items-center justify-center border border-crimson/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`Latcha Matcha Powder - Image ${currentImage + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 border border-crimson/10 text-crimson flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 border border-crimson/10 text-crimson flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentImage ? "bg-crimson w-6" : "bg-crimson/30"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-3 mt-4 justify-center">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentImage ? "border-crimson" : "border-transparent opacity-60 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <h1 className="font-display text-crimson text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Matcha Powder
            </h1>

            <p className="font-body text-crimson text-xl sm:text-2xl font-semibold mt-3">
              Rs. 1,499.00
            </p>

            <p className="font-body text-crimson/60 text-sm sm:text-base mt-4 leading-relaxed">
              From the historic, legendary farms of Shirakawa, Uji — Japan's most revered matcha
              terroir — this matcha reflects centuries of quiet mastery. Blended from native Uji
              cultivars — Okumidori × Samidori — this matcha is slow stone-milled to an ultra-fine 5–7
              microns crafted for purity, depth and silk-smooth texture.
            </p>

            {/* Size selector */}
            <div className="mt-6">
              <p className="font-body text-crimson text-sm font-medium mb-2">Size: {selectedSize}</p>
              <button className="px-4 py-2 rounded-lg bg-crimson text-blush font-body text-sm font-medium">
                25g
              </button>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-body text-crimson text-sm font-medium mb-2">Quantity</p>
              <div className="flex items-center gap-0">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-l-lg border border-crimson/20 flex items-center justify-center text-crimson hover:bg-crimson/5 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-12 h-10 border-y border-crimson/20 flex items-center justify-center font-body text-crimson text-sm font-medium">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 rounded-r-lg border border-crimson/20 flex items-center justify-center text-crimson hover:bg-crimson/5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleAddToCart}
                className="w-full border-2 border-crimson text-crimson font-display text-sm font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-crimson hover:text-blush transition-colors duration-300"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full bg-crimson text-blush font-display text-sm font-bold uppercase tracking-wider py-3 rounded-lg hover:bg-crimson/90 transition-colors duration-300"
              >
                Buy It Now
              </button>
            </div>

            {/* Accordion sections */}
            <div className="mt-8 border-t border-crimson/10">
              {accordionData.map((item, i) => (
                <div key={i} className="border-b border-crimson/10">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-body text-crimson text-base font-medium">{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-crimson/60 transition-transform duration-200 ${
                        openAccordion === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-crimson/60 text-sm leading-relaxed pb-4">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
