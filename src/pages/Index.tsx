import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import MatchaBenefits from "@/components/MatchaBenefits";
import USPStrip from "@/components/USPStrip";
import ProductVisual from "@/components/ProductVisual";
import ShopSection from "@/components/ShopSection";

import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-blush">
      
      <Navbar />
      <main>
        <HeroCarousel />
        <MatchaBenefits />
        <USPStrip />
        <ProductVisual />
        <ShopSection />
        
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
