import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";

const MatchaBenefits = lazy(() => import("@/components/MatchaBenefits"));
const USPStrip = lazy(() => import("@/components/USPStrip"));
const ShopSection = lazy(() => import("@/components/ShopSection"));
const InstagramSection = lazy(() => import("@/components/InstagramSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-blush">
      <Navbar />
      <main>
        <HeroCarousel />
        <Suspense fallback={<div className="h-96 bg-blush" />}>
          <MatchaBenefits />
          <USPStrip />
          <ShopSection />
          <InstagramSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
