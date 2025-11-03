import { Card } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Ionescu",
      course: "Categoria B",
      text: "Instructorii sunt foarte profesioniști și răbdători. Am reușit să iau permisul din prima încercare! Recomand cu mare încredere X-Drive.",
      rating: 5
    },
    {
      name: "Alexandru Popa",
      course: "Categoria B",
      text: "Cea mai bună decizie! Program flexibil, mașini moderne și instructori dedicați. M-am simțit în siguranță de la prima lecție.",
      rating: 5
    },
    {
      name: "Elena Stan",
      course: "Categoria B",
      text: "Atmosfera este prietenoasă, iar instructorii sunt foarte calmi și te îndrumă pas cu pas. Merită fiecare leu investit!",
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce Spun Absolvenții Noștri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mii de șoferi mulțumiți care au obținut permisul alături de noi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 md:p-8 flex flex-col hover-elevate transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  {/* Placeholder pentru poze - va fi înlocuit cu imagini reale */}
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {testimonial.course}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-primary text-primary" 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
