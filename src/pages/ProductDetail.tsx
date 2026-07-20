import { useState } from "react";
import { toast } from "sonner";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, ChevronDown, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import matchaProduct1 from "@/assets/matcha-product-1.png";
import matchaProduct2 from "@/assets/matcha-product-2.png";
import matchaProduct3 from "@/assets/matcha-product-3.png";
import latchaReserveDuo from "@/assets/latcha-reserve-duo.png";
import latchaReserveTrio from "@/assets/latcha-reserve-trio.png";
import latchaReserveKit from "@/assets/latcha-reserve-kit.png";
import { useCartStore } from "@/stores/cartStore";
import { SHOPIFY_VARIANT_MAP } from "@/lib/shopify";
import CustomerReviews from "@/components/CustomerReviews";
import WhyLatchaHits from "@/components/WhyLatchaHits";
import SEO from "@/components/SEO";

interface ProductConfig {
  id: string;
  name: string;
  nameLines: [string, string];
  price: number;
  priceDisplay: string;
  size: string;
  images: string[];
  breadcrumbCategory: { label: string; to: string };
}

const products: Record<string, ProductConfig> = {
  m1: {
    id: "m1",
    name: "Latcha Reserve Matcha",
    nameLines: ["Latcha Reserve", "Matcha"],
    price: 1899,
    priceDisplay: "Rs. 1,899/-",
    size: "30g",
    images: [matchaProduct1, matchaProduct2, matchaProduct3],
    breadcrumbCategory: { label: "Shop Matcha", to: "/shop#matcha" },
  },
  b1: {
    id: "b1",
    name: "Latcha Reserve - Duo",
    nameLines: ["Latcha Reserve", "Duo"],
    price: 3500,
    priceDisplay: "Rs. 3,500/-",
    size: "60g",
    images: [latchaReserveDuo],
    breadcrumbCategory: { label: "Shop Bundles", to: "/shop#bundles" },
  },
  b2: {
    id: "b2",
    name: "Latcha Reserve - Trio",
    nameLines: ["Latcha Reserve", "Trio"],
    price: 4500,
    priceDisplay: "Rs. 4,500/-",
    size: "90g",
    images: [latchaReserveTrio],
    breadcrumbCategory: { label: "Shop Bundles", to: "/shop#bundles" },
  },
  b3: {
    id: "b3",
    name: "Latcha Reserve Kit",
    nameLines: ["Latcha Reserve", "Kit"],
    price: 3000,
    priceDisplay: "Rs. 3,000/-",
    size: "30g",
    images: [latchaReserveKit],
    breadcrumbCategory: { label: "Shop Bundles", to: "/shop#bundles" },
  },
};

const accordionData = [
  {
    title: "Origin and Craft",
    content: [
      {
        heading: "",
        body: "Sourced from Uji, Japan — the heart of matcha tradition. First spring harvest, when the leaves are at their most vibrant and nutrient-rich. A curated blend of Okumidori and Samidori cultivars. Slowly stone-ground using traditional methods to preserve depth, color, and character.",
      },
      {
        heading: "Taste Profile",
        body: "Silk-smooth and creamy, layered with rich umami. A gentle, natural sweetness unfolds on the palate, finishing clean — without a trace of bitterness.",
      },
    ],
  },
  {
    title: "Whisking Instructions",
    content: [
      {
        heading: "Matcha Latte",
        body: "Add 3g to a small amount of hot water. Whisk until smooth. Pour over steamed or cold milk. Done.",
      },
      {
        heading: "Usucha",
        body: "Whisk 2g in 80 ml of water at 70–75°C. The cleanest way to taste what Uji really feels like.",
      },
      {
        heading: "Everything Else",
        body: "Overnight oats, smoothies, bakes—it works anywhere you want a little depth without overpowering everything else.",
      },
    ],
  },
  {
    title: "Storage & Care",
    content:
      "Store in a cool, dark place away from direct sunlight. Keep the tin tightly sealed after each use. For best freshness, consume within 90 weeks of opening. Refrigeration is recommended in warm and humid climates.",
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = (id && products[id]) || products.m1;

  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const images = product.images;
  const hasMultipleImages = images.length > 1;

  const prevImage = () => setCurrentImage((p) => (p === 0 ? images.length - 1 : p - 1));
  const nextImage = () => setCurrentImage((p) => (p === images.length - 1 ? 0 : p + 1));

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        priceDisplay: product.priceDisplay,
        image: images[0],
        variantId: SHOPIFY_VARIANT_MAP[product.id],
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
      <SEO
        title={`${product.name} — Shop Latcha`}
        description={`${product.name} — premium first-harvest Uji matcha from Japan. ${product.size} · ${product.priceDisplay}. Shop Latcha.`}
        path={`/product/${product.id}`}
        type="product"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: `${product.name} — premium first-harvest Uji matcha. ${product.size}.`,
          image: `https://www.latcha.in${product.images[0]}`,
          brand: { "@type": "Brand", name: "Latcha" },
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: `https://www.latcha.in/product/${product.id}`,
          },
        }}
      />
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-20 lg:px-28 xl:px-32 pt-4 sm:pt-6 pb-12 sm:pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-body text-crimson/60 mb-6 sm:mb-8 justify-center flex-wrap">
          <Link to="/" className="hover:text-crimson transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <Link to={product.breadcrumbCategory.to} className="hover:text-crimson transition-colors">{product.breadcrumbCategory.label}</Link>
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span className="text-crimson font-medium">{product.name}</span>
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
                  alt={`${product.name} - Image ${currentImage + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {hasMultipleImages && (
                <>
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
                </>
              )}
            </div>

            {hasMultipleImages && (
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
            )}
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <h1 className="font-display text-crimson text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="whitespace-nowrap">{product.nameLines[0]}</span>
              <br />
              {product.nameLines[1]}
            </h1>

            <p className="font-body text-crimson text-xl sm:text-2xl font-semibold mt-2 sm:mt-3">
              {product.priceDisplay}
            </p>

            <p className="font-body text-crimson/60 text-sm sm:text-base mt-4 leading-relaxed text-justify">
              Latcha Reserve is our signature matcha we make in our stores. It is sourced from Uji,
              Japan The region that set the standard for matcha. Latcha Reserve is a first-spring
              harvest matcha blending Okumdori and Samidori cultivars.
              <br />
              <br />
              It's creamy, naturally sweet, and just umami enough. Not loud. Not sharp. The kind of
              cup that feels easy from the very first sip.
            </p>

            {/* Size selector */}
            <div className="mt-6">
              <p className="font-body text-crimson text-sm font-medium mb-2">Size: {product.size}</p>
              <button className="px-4 py-2 rounded-lg bg-crimson text-blush font-body text-sm font-medium">
                {product.size}
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
                        {Array.isArray(item.content) ? (
                          <div className="space-y-4 pb-4">
                            {item.content.map((sub, j) => (
                              <div key={j}>
                                {sub.heading && (
                                  <p className="font-body text-crimson text-sm font-semibold mb-1">{sub.heading}</p>
                                )}
                                <p className="font-body text-crimson/60 text-sm leading-relaxed">{sub.body}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="font-body text-crimson/60 text-sm leading-relaxed pb-4">
                            {item.content}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <WhyLatchaHits />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default ProductDetail;
