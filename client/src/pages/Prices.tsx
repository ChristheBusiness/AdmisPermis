import Navigation from "@/components/Navigation";
import Preturi from "@/components/Preturi";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";


export default function Prices() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="acasa">
        <Preturi />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}