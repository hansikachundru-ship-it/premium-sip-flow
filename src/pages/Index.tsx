import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SEO from "@/components/SEO";

const MatchaBenefits = lazy(() => import("@/components/MatchaBenefits"));
const USPStrip = lazy(() => import("@/components/USPStrip"));
const ShopSection = lazy(() => import("@/components/ShopSection"));
const InstagramSection = lazy(() => import("@/components/InstagramSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-blush">
      <SEO
        title="Latcha — Premium Uji Matcha & Specialty Café in Bangalore"
        description="India's first premium matcha brand. Shop AAA grade Uji matcha powder, bundles, and visit our specialty café in Bangalore."
        path="/"
      />
      <Navbar />
      <main>
        <h1 className="sr-only">Latcha — Premium Uji Matcha & Specialty Café in Bangalore</h1>
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

