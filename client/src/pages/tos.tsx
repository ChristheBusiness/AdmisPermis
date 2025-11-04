import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Dot } from "lucide-react";

export default function Tos() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="acasa">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Termeni și condiții
            </h1>
            <p className="text-muted-foreground mb-8">
              Ultima actualizare: {new Date().getFullYear()}
            </p>

            <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-2xl font-bold">Termeni și Condiții (TOS) – Scoala de soferi AUTO SPEED</p>
              <p>
                Denumire companie: Scoala de soferi AUTO SPEED SRL<br/>
                Adresa: [Introduceți adresa completă]<br/>
                Număr de înregistrare: [Introduceți nr. de înregistrare]<br/>
                Cod fiscal: [Introduceți cod fiscal]<br/>
                Reprezentant legal: [Nume reprezentant]<br/>
                Email: [Email de contact]<br/>
                Telefon: [Număr de telefon]
              </p>
              <p className="text-2xl font-bold">
                1. Introducere
              </p>
              <p>
                Prezentele Termeni și Condiții definesc regulile și condițiile de utilizare a site-ului www.autospeeddrive.ro. <br/>  
                Accesând și navigând pe site, utilizatorul acceptă acești termeni fără rezerve.
              </p>

              <p className="text-2xl font-bold">
                2. Proprietatea Intelectuală
              </p>
              <p>
                Toate conținuturile site-ului, inclusiv texte, imagini, logo-uri, grafice și aplicații software, sunt proprietatea <br/> 
                Scoala de soferi AUTO SPEED SRL și sunt protejate de legislația privind drepturile de autor.
              </p>

                <p className="text-2xl font-bold">
                3. Exonerarea Răspunderii
              </p>
              <p>
                Site-ul este oferit “ca atare” și Scoala de soferi AUTO SPEED SRL nu oferă garanții privind acuratețea, <br/> 
                completitudinea sau disponibilitatea informațiilor.<br/>
                <br/>Scoala de soferi AUTO SPEED SRL nu va fi responsabilă pentru:<br/>
                Daune directe sau indirecte cauzate de accesarea sau utilizarea site-ului;<br/>
                Probleme tehnice sau întreruperi în funcționarea site-ului;<br/>
                Viruși sau alte componente care pot afecta sistemele utilizatorului.<br/>
                
              </p>

                <p className="text-2xl font-bold">
                4. Obiectivul Conținutului
              </p>
              <p>
                PInformațiile prezentate pe site au caracter informativ. Pentru detalii legate de disponibilitatea serviciilor,<br/>
                prețuri sau condiții contractuale, utilizatorii sunt rugați să contacteze Scoala de soferi AUTO SPEED SRL prin<br/>
                pagina de contact.
              </p>

                <p className="text-2xl font-bold">
                5. Date Personale și GDPR
              </p>
              <p>
                Prin utilizarea site-ului și completarea formularelor de contact, utilizatorul consimte expres la:<br/>
                Prelucrarea datelor personale (nume, email, telefon etc.) pentru răspunsul la solicitări și comunicări comerciale;<br/>
                Stocarea și procesarea datelor conform legislației în vigoare (GDPR);<br/>
                Retragerea consimțământului în orice moment prin contactarea companiei.<br/>
              </p>

                <p className="text-2xl font-bold">
                6. Legături către alte site-uri
              </p>
              <p>
                Site-ul poate conține link-uri către site-uri terțe. Scoala de soferi AUTO SPEED SRL nu este responsabilă <br/>  
                pentru conținutul, politica de confidențialitate sau termenii de utilizare ai acelor site-uri externe..
              </p>

                <p className="text-2xl font-bold">
                7. Acceptarea Termenilor
              </p>
              <p>
                Prin accesarea și utilizarea site-ului www.autospeeddrive.ro, utilizatorul confirmă că a citit și a acceptat <br/>  
                acești Termeni și Condiții în mod expres și neechivoc.
              </p>

            </div>
          </div>
        </section>
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}