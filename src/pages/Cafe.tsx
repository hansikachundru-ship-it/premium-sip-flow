import Navbar from "@/components/Navbar";
import CafeSection from "@/components/CafeSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Cafe = () => {
  return (
    <div className="min-h-screen bg-blush">
      <SEO
        title="Latcha Café — Specialty Matcha in JP Nagar, Bangalore"
        description="Visit Latcha Café in JP Nagar, Bangalore for specialty Uji matcha drinks, cloud lattes, and soft serves. Order on Swiggy and Zomato."
        path="/cafe"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Latcha Café",
          url: "https://www.latcha.in/cafe",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
            streetAddress: "JP Nagar",
          },
        }}
      />
      <Navbar />
      <main>
        <h1 className="sr-only">Latcha Café — JP Nagar, Bangalore</h1>
        <CafeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Cafe;

