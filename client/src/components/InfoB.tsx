import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Car, ClipboardList } from "lucide-react";
import { useLocation } from "wouter";

export default function InfoB() {
  const [location, setLocation] = useLocation();

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Categoria B
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Informații detaliate despre cursul pentru obținerea permisului de conducere categoria B — 
            ideal pentru cei care doresc să conducă autoturisme sau vehicule ușoare.
          </p>
        </div>

        {/* === CONTAINER 1: Detalii despre curs și vehicul === */}
        <Card className="p-8 md:p-10 mb-12 shadow-sm border-border hover-elevate transition-all">
          <div className="flex items-center gap-3 mb-6">
            <Car className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">
              Detalii despre curs și vehicul
            </h3>
          </div>

          <ul className="space-y-5 text-foreground leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Autovehicule cu masa totală maximă autorizată de până la{" "}
                <strong>3.500 kg</strong> și maximum <strong>8 locuri</strong> (în afara conducătorului auto).
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Ansamblu format dintr-un autovehicul tragător din categoria B și o remorcă cu masa totală
                maximă autorizată de <strong>cel mult 750 kg</strong>.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Durata minimă a școlii este de aproximativ <strong>6 săptămâni</strong>, incluzând{" "}
                <strong>24 ore teoretice</strong> și <strong>30 ore practice</strong> de conducere.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Cursurile acoperă legislația rutieră, semnalizarea, mecanica auto de bază și pregătirea practică 
                pe trasee reale din București și Chiajna.
              </span>
            </li>
          </ul>
        </Card>

        {/* === CONTAINER 2: Condiții de înscriere === */}
        <Card className="p-8 md:p-10 mb-12 shadow-sm border-border hover-elevate transition-all">
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-foreground">
              Condiții de înscriere
            </h3>
          </div>

          <ul className="space-y-5 text-foreground leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Vârsta minimă de la care se poate începe școala este de{" "}
                <strong>17 ani și 9 luni</strong>, iar examenul poate fi susținut după împlinirea
                vârstei de <strong>18 ani</strong>.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Cursantul trebuie să fie <strong>apt din punct de vedere medical și psihologic</strong>.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Cursantul nu trebuie să fi fost condamnat pentru infracțiunile prevăzute la{" "}
                <strong>Art. 24 din O.U.G. 195/2002</strong>.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Este necesară prezentarea <strong>actului de identitate</strong> (C.I. / B.I.) la înscriere.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>
                Semnarea <strong>contractului de prestări servicii</strong> este obligatorie la începerea cursului.
              </span>
            </li>
          </ul>
        </Card>

        {/* === CONTAINER 3: Link către Preturi === */}
        <div className="text-center border-t border-border pt-8">
          <p className="text-muted-foreground mb-4">
            Prețurile variază în funcție de mașina aleasă și de pachetul selectat.
          </p>
          <Button
            variant="default"
            onClick={() => setLocation("/Preturi")}
            className="hover-elevate active-elevate-2"
          >
            Vezi Preturi
          </Button>
        </div>
      </div>
    </section>
  );
}
