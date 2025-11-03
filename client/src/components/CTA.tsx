import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Gata să începi călătoria ta către permisul de conducere?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8">
          Înscrie-te astăzi și beneficiezi de un instructor dedicat și un program personalizat.
        </p>
        <Button 
          size="lg"
          variant="secondary"
          className="text-base font-semibold px-8"
          onClick={scrollToContact}
          data-testid="button-cta-enroll"
        >
          Înscrie-te Acum
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
