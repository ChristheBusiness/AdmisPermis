import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Clock, BookOpen } from "lucide-react";
import { useLocation } from "wouter";

export default function Courses() {

  const [location, setLocation] = useLocation();

  const courses = [
    {
      icon: Car,
      title: "Categoria B",
      description: "Cursul complet pentru obținerea permisului de conducere categoria B",
      features: [
        "30 ore de condus practic",
        "Curs teoretic complet",
        "Materiale de studiu incluse",
        "Examen simulator"
      ],
      duration: "2-3 luni"
    },
    {
      icon: Clock,
      title: "Ore Suplimentare",
      description: "Ore de condus adiționale pentru perfecționarea abilităților",
      features: [
        "Program flexibil",
        "Instructor dedicat",
        "Trasee personalizate",
        "Pregătire pentru examen"
      ],
      duration: "La alegere"
    },
    {
      icon: BookOpen,
      title: "Curs Teoretic",
      description: "Pregătire teoretică intensivă pentru examenul auto",
      features: [
        "Lecții interactive",
        "Teste și chestionare",
        "Materiale actualizate",
        "Suport online"
      ],
      duration: "3-4 săptămâni"
    }
  ];

  return (
    <section id="cursuri" className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cursurile Noastre
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alege programul potrivit pentru nevoile tale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 md:p-8 flex flex-col hover-elevate transition-all">
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <course.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {course.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent rounded-full">
                  <Clock className="w-4 h-4 text-foreground" />
                  <span className="text-sm font-medium text-foreground">{course.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  if (course.title === "Categoria B") {
                    setLocation("/CategoriaB"); // navigate to CatB page
                  } else {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                data-testid={`button-course-${index}`}
              >
                Află Mai Multe
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
