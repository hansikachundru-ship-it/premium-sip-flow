import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import CafeSection from "@/components/CafeSection";
import Footer from "@/components/Footer";

const Cafe = () => {
  return (
    <div className="min-h-screen bg-blush">
      <AnnouncementBar />
      <Navbar />
      <main>
        <CafeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Cafe;
