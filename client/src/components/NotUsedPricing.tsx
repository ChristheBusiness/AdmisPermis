import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const packages = [
    {
      name: "Pachet Start",
      price: "2.800",
      description: "Ideal pentru începători",
      features: [
        "20 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "1 examen simulator"
      ],
      recommended: false
    },
    {
      name: "Pachet Standard",
      price: "3.200",
      description: "Cel mai popular pachet",
      features: [
        "30 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu",
        "3 examene simulator",
        "Asistență la examen"
      ],
      recommended: true
    },
    {
      name: "Pachet Premium",
      price: "3.800",
      description: "Pentru cei care vor siguranță maximă",
      features: [
        "40 ore de condus",
        "Curs teoretic complet",
        "Materiale de studiu premium",
        "Examene simulator nelimitate",
        "Asistență la examen",
        "Instructor dedicat"
      ],
      recommended: false
    }
  ];

  return (
    <section id="tarife" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tarife Transparente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fără costuri ascunse. Alege pachetul potrivit pentru tine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`p-6 md:p-8 flex flex-col relative hover-elevate transition-all ${
                pkg.recommended ? "border-primary border-2" : ""
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="default" className="px-4 py-1">
                    Recomandat
                  </Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pkg.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground">RON</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.recommended ? "default" : "outline"}
                className="w-full"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid={`button-package-${index}`}
              >
                Alege Pachetul
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * Prețurile sunt orientative și pot varia în funcție de locație și perioada selectată.
          </p>
        </div>
      </div>
    </section>
  );
}
