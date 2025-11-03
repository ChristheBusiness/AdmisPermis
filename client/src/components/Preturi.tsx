import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Gauge } from "lucide-react";

import car1 from "@assets/img_cars/DaciaLogan.jpg";

export default function Prices() {
  const manualCars = [
    { name: "Dacia Logan", image: car1 , price: "3200 RON" },
    { name: "Volkswagen Golf", image: "/placeholder-car2.jpg", price: "3400 RON" },
    { name: "Ford Fiesta", image: "/placeholder-car3.jpg", price: "3300 RON" },
  ];

  const automaticCars = [
    { name: "Toyota Yaris", image: "/placeholder-car4.jpg", price: "3700 RON" },
    { name: "BMW 118i", image: "/placeholder-car5.jpg", price: "4000 RON" },
    { name: "Audi A3", image: "/placeholder-car6.jpg", price: "4200 RON" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preturi și Mașini Disponibile
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Alege tipul de cutie de viteze și descoperă prețurile disponibile pentru școala auto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* MANUAL */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2 mb-6">
              <Gauge className="w-6 h-6 text-primary" />
              Mașini cu Cutie Manuală
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {manualCars.map((car, index) => (
                <Card
                  key={index}
                  className="p-4 hover-elevate transition-all flex flex-col items-center text-center"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 object-cover rounded-lg mb-4 border border-border"
                  />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{car.name}</h4>
                  <p className="text-muted-foreground mb-4">Cutie Manuală</p>
                  <span className="text-xl font-bold text-primary mb-4">{car.price}</span>
                  <Button
                        onClick={() => {
                        const formSection = document.getElementById("contact");
                        formSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                    className="w-full">
                    Înscrie-te acum
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* AUTOMATIC */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2 mb-6">
              <Car className="w-6 h-6 text-primary" />
              Mașini cu Cutie Automată
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {automaticCars.map((car, index) => (
                <Card
                  key={index}
                  className="p-4 hover-elevate transition-all flex flex-col items-center text-center"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 object-cover rounded-lg mb-4 border border-border"
                  />
                  <h4 className="text-lg font-semibold text-foreground mb-2">{car.name}</h4>
                  <p className="text-muted-foreground mb-4">Cutie Automată</p>
                  <span className="text-xl font-bold text-primary mb-4">{car.price}</span>
                                    <Button
                        onClick={() => {
                        const formSection = document.getElementById("contact");
                        formSection?.scrollIntoView({ behavior: "smooth" });
                        }}
                    className="w-full">
                    Înscrie-te acum
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* NOTE */}
        <div className="text-center mt-14 border-t border-border pt-8">
          <p className="text-muted-foreground">
            Prețurile pot varia în funcție de instructor, pachetul ales și tipul de vehicul.
          </p>
        </div>
      </div>
    </section>
  );
}


