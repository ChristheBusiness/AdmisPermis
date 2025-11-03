import { useCallback } from "react";
import { useLocation } from "wouter";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoUrl from "@assets/images/logox.png";

type QuickLink = {
  label: string;
  id?: string;      // id-ul secțiunii din pagina Home (ex: "acasa", "contact", "cursuri")
  route?: string;   // ruta separata (ex: "/tarife", "/CategoriaB")
};

export default function Footer() {
  const [location, setLocation] = useLocation();

  // Bazic scroll helper that will keep trying until element appears or timeout
  const scrollToSectionWhenAvailable = useCallback((id: string, maxMs = 1500) => {
    const start = Date.now();
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (Date.now() - start < maxMs) {
        requestAnimationFrame(tryScroll);
      }
    };
    tryScroll();
  }, []);

  const handleLinkClick = (link: QuickLink) => {
    // If there's a route to navigate to
    if (link.route) {
      if (location !== link.route) {
        // navigate to route first
        setLocation(link.route);
        // if there's also an id to scroll to after navigation, attempt to scroll repeatedly
        if (link.id) {
          // small delay to let router render (we also have retry inside)
          setTimeout(() => scrollToSectionWhenAvailable(link.id!), 120);
        }
      } else {
        // Already on the route
        if (link.id) {
          scrollToSectionWhenAvailable(link.id!);
        } else {
          // nothing to scroll; maybe route itself is fine
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
      return;
    }

    // No explicit route => this is a section on the Home page
    if (link.id) {
      if (location === "/") {
        // already on home, just scroll
        scrollToSectionWhenAvailable(link.id);
      } else {
        // go home then scroll
        setLocation("/");
        setTimeout(() => scrollToSectionWhenAvailable(link.id!), 120);
      }
    }
  };

  // Define links: use route for separate pages. 'Preturi' points to /tarife (adjust if your route differs)
  const quickLinks: QuickLink[] = [
    { label: "Acasă", id: "acasa" },
    { label: "Despre Noi", id: "despre" },
    { label: "Cursuri", id: "cursuri" },
    // Preturi is a separate page in your app; route used so it navigates to /tarife.
    // If your route is /Preturi or /Prices change it here.
    { label: "Preturi", route: "/Preturi", id: "Preturi" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src={logoUrl} alt="X-Drive" className="h-16 w-auto" />
            </div>
            <p className="text-muted-foreground mb-4">
              Școala ta de încredere pentru obținerea permisului de conducere în Chiajna, București.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigare Rapidă</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Strada Preot Sebe Costin 48, Chiajna, Romania</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+40724111987" className="text-muted-foreground hover:text-primary transition-colors">
                  +40 724 111 987
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:contact@scoaladesoferixdrive.ro" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@scoaladesoferixdrive.ro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Urmărește-ne</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/scoaladesoferixdrive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X-Drive Facebook"
                title="X-Drive Facebook"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover-elevate active-elevate-2 transition-all"
                data-testid="footer-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/scoala_de_soferi_x_drive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X-Drive Instagram"
                title="X-Drive Instagram"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover-elevate active-elevate-2 transition-all"
                data-testid="footer-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} X-Drive Școala de Șoferi. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button
              onClick={() => console.log("Privacy policy clicked")}
              className="hover:text-primary transition-colors"
            >
              Politica de Confidențialitate
            </button>
            <button
              onClick={() => console.log("Terms clicked")}
              className="hover:text-primary transition-colors"
            >
              Termeni și Condiții
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
