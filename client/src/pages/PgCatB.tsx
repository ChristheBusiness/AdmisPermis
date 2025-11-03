import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InfoB from "@/components/InfoB";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function CatB() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="acasa">
        <InfoB />
        <Pricing />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}