import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import MatchaBenefits from "@/components/MatchaBenefits";
import USPStrip from "@/components/USPStrip";
import ProductVisual from "@/components/ProductVisual";
import ShopSection from "@/components/ShopSection";
import StorySection from "@/components/StorySection";
import InstagramSection from "@/components/InstagramSection";
import CafeSection from "@/components/CafeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-blush">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroCarousel />
        <MatchaBenefits />
        <USPStrip />
        <ProductVisual />
        <ShopSection />
        <StorySection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
