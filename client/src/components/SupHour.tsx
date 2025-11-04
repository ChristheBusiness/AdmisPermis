import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, CircleHelp, ClipboardList } from "lucide-react";
import { useLocation } from "wouter";

export default function InfoB() {
  const [location, setLocation] = useLocation();

    const handleScrollToContact = () => {

    const url = new URL(window.location.href);
    url.searchParams.set("extra", "true");
    window.history.replaceState({}, "", url.toString());

    // Fă scroll până la formular
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    window.dispatchEvent(new HashChangeEvent("hashchange"));

  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ore Suplimentare de Condus
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ideal pentru cursanții care doresc să își perfecționeze abilitățile de condus înainte de examen sau după obținerea permisului.
          </p>
        </div>

        {/* === CONTAINER 1: Detalii despre orele suplimentare === */}
        <Card className="p-8 md:p-10 mb-12 shadow-sm border-border hover-elevate transition-all">
          <div className="flex items-center gap-3 mb-6">
            <CircleHelp className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">
              Detalii generale
            </h3>
          </div>

          <ul className="space-y-5 text-foreground leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Ședințele suplimentare sunt dedicate celor care doresc mai multă practică sau o reîmprospătare a cunoștințelor de condus.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Orele se desfășoară pe trasee reale, similare celor de examen, sub îndrumarea unui instructor autorizat.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Fiecare ședință are o durată de <strong>60 de minute</strong> și se concentrează pe manevre, siguranță și încrederea la volan.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Prețul unei ședințe suplimentare este de <strong>150 RON</strong>.
              </span>
            </li>
          </ul>
        </Card>

        {/* === CONTAINER 2: Programare și condiții === */}
        <Card className="p-8 md:p-10 mb-12 shadow-sm border-border hover-elevate transition-all">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">
              Programare și condiții
            </h3>
          </div>

          <ul className="space-y-5 text-foreground leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Programările se fac telefonic sau direct prin formularul de contact al școlii.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Orele suplimentare sunt disponibile pentru <strong>cursanți actuali</strong> sau <strong>șoferi care doresc perfecționare</strong>.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Program flexibil — se pot alege zilele și intervalele orare în funcție de disponibilitatea instructorilor.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Plata se efectuează înaintea fiecărei ședințe, la sediu sau prin transfer bancar.
              </span>
            </li>
          </ul>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">
              Pentru detalii suplimentare sau rezervări, ne poți contacta direct.
            </p>
            <Button
              onClick={handleScrollToContact}
              className="px-8 py-2 text-lg font-medium"
            >
              Programează o ședință
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
