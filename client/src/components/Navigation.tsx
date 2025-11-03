import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import logoUrl from "@assets/images/logox.png";
import { useTheme } from "@/hooks/use-theme";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleMenuClick = (id: string) => {
    if (id === "Preturi") {
      if (location !== "/Preturi") {
        setLocation("/Preturi");
        setIsOpen(false);
      }
    } else if (location === "/") {
      scrollToSection(id);
    } else {
      setLocation("/");
      setTimeout(() => scrollToSection(id), 300);
    }
  };

  const menuItems = [
    { label: "Acasă", id: "acasa" },
    { label: "Despre Noi", id: "despre" },
    { label: "Cursuri", id: "cursuri" },
    { label: "Preturi", id: "Preturi" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LEFT: logo + small phone icon (only icon, no text) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (location !== "/") setLocation("/");
                setTimeout(() => scrollToSection("acasa"), 200);
              }}
              className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-all"
              data-testid="button-logo"
            >
              <img src={logoUrl} alt="X-Drive Logo" className="h-12 w-auto" />
            </button>

            {/* phone icon - only visible from md up, minimal gap so it doesn't push layout */}
            <a
              href="tel:+40724111987"
              aria-label="Sună X-Drive"
              title="Sună X-Drive"
              className={`hidden md:inline-flex items-center justify-center p-2 rounded-md transition-all hover-elevate active-elevate-2 ${
                isScrolled ? "bg-primary/10" : "bg-primary/10/70"
              }`}
              data-testid="nav-phone-icon"
            >
              <Phone className={`${isScrolled ? "text-primary" : "text-white"} w-5 h-5`} />
            </a>
          </div>

          {/* CENTER: menu items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`font-medium transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT: theme toggle + enroll */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={isScrolled ? "text-foreground" : "text-white"}
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="default"
              onClick={() => handleMenuClick("contact")}
              data-testid="button-enroll-nav"
            >
              Înscrie-te Acum
            </Button>
          </div>

          {/* mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md hover-elevate active-elevate-2 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className="block w-full text-left px-4 py-3 rounded-md hover-elevate active-elevate-2 font-medium text-foreground"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 px-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-foreground">
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button
                variant="default"
                className="w-full"
                onClick={() => handleMenuClick("contact")}
                data-testid="button-enroll-mobile"
              >
                Înscrie-te Acum
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
