import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SupHour from "@/components/SupHour";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function CatB() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="acasa">
        <SupHour />
        <Pricing />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}