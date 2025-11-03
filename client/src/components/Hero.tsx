import { Button } from "@/components/ui/button";
import { Car, Award, Users } from "lucide-react";
import heroImage from "@assets/images/pozahero.png";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Învață să conduci cu încredere<br />la X-Drive!
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Școala de șoferi de încredere din Chiajna, București. Instructori profesioniști, mașini moderne și un mediu de învățare prietenos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            variant="default"
            className="text-base font-semibold px-8"
            onClick={scrollToContact}
            data-testid="button-enroll-hero"
          >
            Înscrie-te Acum
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-base font-semibold px-8 bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
            onClick={() => {
              const coursesSection = document.getElementById("cursuri");
              coursesSection?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-view-courses"
          >
            Vezi Cursurile
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Car className="w-8 h-8 text-primary" />
            <div className="text-white">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm text-white/80">Ani de Experiență</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Users className="w-8 h-8 text-primary" />
            <div className="text-white">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm text-white/80">Elevi Mulțumiți</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Award className="w-8 h-8 text-primary" />
            <div className="text-white">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm text-white/80">Rată de Promovare</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
