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
                <p className="text-2xl font-bold">Politica de Confidențialitate – Scoala de Soferi AUTO SPEED</p>
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
                Prezenta Politică de Confidențialitate stabilește modul în care Scoala de Soferi AUTO SPEED colectează,<br/>
                utilizează și protejează datele cu caracter personal ale vizitatorilor site-ului nostru www.autospeeddrive.ro.<br/>
                Accesând acest site, sunteți de acord cu termenii descriși în această politică.
              </p>

              <p className="text-2xl font-bold">
                2. Colectarea datelor personale
              </p>
              <p>
                Datele personale pot fi colectate atunci când: <br/>
                - completați formularele de contact sau de înscriere la cursuri; <br/>
                - solicitați informații despre servicii sau promoții; <br/>
                - trimiteți feedback sau sugestii prin intermediul site-ului. <br/>
                <br/>
                Datele colectate pot include: nume, adresă, număr de telefon, adresă de email și alte informații relevante<br/>
                pentru furnizarea serviciilor.
              </p>

                <p className="text-2xl font-bold">
                3. Utilizarea datelor
              </p>
              <p>
                Datele colectate sunt folosite exclusiv pentru:<br/> 
                - procesarea cererilor și înscrierilor la cursuri;<br/>
                - contactarea dumneavoastră pentru confirmări, actualizări sau informații relevante serviciilor;<br/>
                - informări comerciale și promoții ale Scoala de Soferi AUTO SPEED (doar dacă ați oferit consimțământul).<br/>
                <br/>
                <b>Nu vom vinde, distribui sau înstrăina datele dvs. către terți fără consimțământul explicit.</b>
                
              </p>

                <p className="text-2xl font-bold">
                4. Drepturile utilizatorilor
              </p>
              <p>
                Conform legislației în vigoare (GDPR și Legea nr. 677/2001), aveți următoarele drepturi:<br/>
                <ul>
                  <li>- dreptul de acces la datele personale;</li>
                  <li>- dreptul de rectificare sau actualizare a datelor;</li>
                  <li>- dreptul de a solicita ștergerea datelor;</li>
                  <li>- dreptul de a vă opune prelucrării datelor;</li>
                  <li>- dreptul de a depune o plângere la autoritățile competente în domeniul protecției datelor.</li>
                </ul>
              </p>

                <p className="text-2xl font-bold">
                5. Feedback și comunicări
              </p>
              <p>
                Orice comentariu, întrebare sau sugestie transmisă prin formularele de contact va fi tratată cu<br/>
                confidențialitate și respect pentru dreptul la imagine și intimitate al utilizatorilor.
              </p>

                <p className="text-2xl font-bold">
                6. Măsuri de securitate
              </p>
              <p>
                Scoala de Soferi AUTO SPEED ia măsuri tehnice și organizaționale adecvate pentru protecția datelor<br/>  
                personale împotriva accesului neautorizat, pierderii sau divulgării accidentale.
              </p>

                <p className="text-2xl font-bold">
                7. Modificări ale politicii de confidențialitate
              </p>
              <p>
                Politica poate fi actualizată periodic. Orice modificare va fi publicată pe această pagină, iar accesarea <br/>  
                ulterioară a site-ului implică acceptul dvs. față de noile reguli.
              </p>

                <p className="text-2xl font-bold">
                8. Contact
              </p>
              <p>
                Pentru orice întrebări legate de confidențialitate, exercitarea drepturilor dvs. sau probleme legate de datele <br/>  
                personale, ne puteți contacta la:
                <ul>
                  <li>- Email: [email de contact]</li>
                  <li>- Telefon: [număr de telefon]</li>
                  <li>- Adresa: [adresa de contact]</li>
                </ul>
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