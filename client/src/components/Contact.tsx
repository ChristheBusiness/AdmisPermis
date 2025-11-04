import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    car: "",
    extra: false
  });

  useEffect(() => {
    const applyCarFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const car = params.get("car");
      const extra = params.get("extra");
      if (car) {
        setFormData((prev) => ({ ...prev, car }));
      }
      if (extra !== null) {
        const extraBool = extra === "true" || extra === "1" || extra === "yes" || extra === "on" || extra === "";
        setFormData((prev) => ({ ...prev, extra: extraBool }));
      }
    };

    applyCarFromUrl();
    const onHash = () => applyCarFromUrl();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      await fetch("/", {
        method: "POST",
        body: new FormData(form),
      });
      
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Vă vom contacta în cel mai scurt timp posibil.",
      });
      setFormData({ name: "", email: "", phone: "", message: "", car: "", extra: false });
    } catch (error) {
      toast({
        title: "Eroare",
        description: "A apărut o problemă. Vă rugăm încercați din nou.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresă",
      content: "B-dul Uverturii nr. 98 Sector 6"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+40 785 125 125",
      link: "tel:+40785125125"
    },
    {
      icon: Mail,
      title: "Email",
      content: "autospeeddrive@yahoo.com",
      link: "mailto:autospeeddrive@yahoo.com"
    },
    {
      icon: Clock,
      title: "Program",
      content: "Luni-Vineri: 10:00-18:00 | Sâmbătă-Duminică: Închis"
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactează-ne
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suntem aici să răspundem la toate întrebările tale
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3">
            <Card className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Trimite-ne un Mesaj
              </h3>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Nume complet *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ion Popescu"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ion.popescu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="mb-2 block">
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+40 722 123 456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="car" className="mb-2 block">
                      Selecteaza masina
                    </Label>
                    <Select
                      value={formData.car}
                      onValueChange={(value) => setFormData({ ...formData, car: value })}
                    >
                      <SelectTrigger id="car" className="w-full">
                        <SelectValue placeholder="Selecteaza masina (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value=" ">Selecteaza masina (optional)</SelectItem>
                        <SelectItem value="Dacia Stepway">Dacia Stepway</SelectItem>
                        <SelectItem value="Ford Fiesta">Ford Fiesta</SelectItem>
                        <SelectItem value="Hyundai Accent">Hyundai Accent</SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="car" value={formData.car} />
                  </div>

                  <div className="flex items-center gap-2 pt-6 md:pt-8">
                    <Checkbox
                      id="extra"
                      checked={formData.extra}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, extra: Boolean(checked) })
                      }
                    />
                    <Label htmlFor="extra" className="leading-none">
                      Sedinta suplimentare
                    </Label>
                    <input type="hidden" name="extra_session" value={formData.extra ? "true" : "false"} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Mesaj *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Descrie-ne cum te putem ajuta..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="default" 
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-${info.title.toLowerCase()}`}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4">
                Urmărește-ne
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/autospeeddrive"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Scoala de soferi Auto Speed Facebook"
                  title="Scoala de soferi Auto Speed Facebook"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover-elevate active-elevate-2 transition-all"
                  data-testid="button-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                {/*<a
                  href="https://www.instagram.com/scoala_de_soferi_x_drive"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Scoala de soferi Auto Speed Instagram"
                  title="Scoala de soferi Auto Speed Instagram"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover-elevate active-elevate-2 transition-all"
                  data-testid="button-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>*/}
              </div>
            </Card>
          </div>
        </div>

        <Card className="overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.675895456928!2d26.024742376726437!3d44.43981010120084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201a52296af3d%3A0xd9b6e21c988df28a!2sBulevardul%20Uverturii%2098%2C%20Bucure%C8%99ti%2060937!5e0!3m2!1sro!2sro!4v1762198255654!5m2!1sro!2sro"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația Scoala de soferi Auto Speed - Strada Preot Sebe Costin 48, Chiajna"
          />
        </Card>
      </div>
    </section>
  );
}
