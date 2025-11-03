import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
/*import CTA from "@/components/CTA";*/
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="acasa">
        <Hero />
        <About />
        <Courses />
        <Pricing />
        <Testimonials />
        
        {/*<CTA />*/}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
