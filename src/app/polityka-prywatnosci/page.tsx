import type { Metadata } from "next";
import { Footer } from "@/components/home/footer";
import { siteConfig } from "@/content/site-config";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/brand/logo";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka Prywatności Dar Studio — zasady przetwarzania danych osobowych i plików cookies.",
  alternates: { canonical: "/polityka-prywatnosci" },
  openGraph: {
    title: `Polityka prywatności — ${siteConfig.brandName}`,
    description: "Polityka Prywatności Dar Studio — zasady przetwarzania danych osobowych i plików cookies.",
    url: "/polityka-prywatnosci",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: `${siteConfig.brandName}` }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF6] overflow-x-hidden relative">
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(11, 18, 32, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-2xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              <Logo className="h-8 sm:h-9 md:h-10 w-auto shrink-0" title={siteConfig.brandName} />
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[#00E0C6]"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(230, 237, 246, 0.75)",
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Powrót</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="px-6 pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Polityka Prywatności
          </h1>

          <div className="space-y-10" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.78)", lineHeight: 1.8 }}>
            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                1. Informacje ogólne
              </h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania oraz ochrony danych osobowych użytkowników korzystających ze strony internetowej DarStudio.
              </p>
              <p className="mt-4">Administratorem danych osobowych jest:</p>
              <div className="mt-3 rounded-2xl border p-5" style={{ backgroundColor: "rgba(18, 26, 43, 0.6)", borderColor: "rgba(255,255,255,0.08)" }}>
                <p className="font-semibold" style={{ color: "#E6EDF6" }}>Arkadiusz Dzierżewski</p>
                <p>ul. Półwiejska 73</p>
                <p>62-200 Gniezno</p>
                <p>
                  e-mail:{" "}
                  <a className="text-[#00E0C6] hover:underline" href="mailto:darstudio.client@gmail.com">
                    darstudio.client@gmail.com
                  </a>
                </p>
              </div>
              <p className="mt-4">
                Administrator dokłada szczególnej staranności w celu ochrony prywatności użytkowników oraz bezpieczeństwa przekazywanych danych osobowych.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                2. Zakres zbieranych danych
              </h2>
              <p>W zależności od sposobu korzystania ze strony mogą być zbierane następujące dane:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>imię i nazwisko</li>
                <li>adres e-mail</li>
                <li>numer telefonu</li>
                <li>nazwa firmy</li>
                <li>treść wiadomości</li>
                <li>informacje przekazane w formularzu briefu projektowego</li>
                <li>adres IP</li>
                <li>dane dotyczące aktywności na stronie</li>
                <li>dane zapisane w plikach cookies</li>
              </ul>
              <p className="mt-4">Podanie danych jest dobrowolne, jednak w niektórych przypadkach niezbędne do realizacji kontaktu lub usługi.</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                3. Cele przetwarzania danych
              </h2>
              <p>Dane osobowe przetwarzane są w celu:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>kontaktu z użytkownikiem</li>
                <li>przygotowania oferty współpracy</li>
                <li>realizacji usług związanych z projektowaniem stron internetowych i brandingiem</li>
                <li>obsługi formularza kontaktowego oraz formularza briefu</li>
                <li>prowadzenia korespondencji e-mailowej</li>
                <li>analizy ruchu na stronie</li>
                <li>działań marketingowych i remarketingowych</li>
                <li>poprawy funkcjonowania strony internetowej</li>
                <li>zabezpieczenia strony przed nadużyciami</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                4. Formularz kontaktowy i brief projektowy
              </h2>
              <p>
                Wypełnienie formularza kontaktowego lub briefu projektowego oznacza przekazanie danych osobowych administratorowi w celu odpowiedzi na zapytanie, przygotowania wyceny lub realizacji współpracy.
              </p>
              <p className="mt-3">Dane te nie są udostępniane osobom trzecim bez podstawy prawnej.</p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                5. Narzędzia zewnętrzne
              </h2>
              <p>Na stronie mogą być wykorzystywane następujące narzędzia zewnętrzne:</p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-bold" style={{ color: "#E6EDF6" }}>Google Analytics</h3>
                  <p>Służy do analizy ruchu na stronie internetowej oraz zachowań użytkowników.</p>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#E6EDF6" }}>Google Search Console</h3>
                  <p>Służy do monitorowania widoczności strony w wyszukiwarce Google.</p>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#E6EDF6" }}>Meta Pixel (Facebook Pixel)</h3>
                  <p>Służy do działań reklamowych, remarketingowych oraz analizy skuteczności kampanii reklamowych.</p>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#E6EDF6" }}>Google Ads</h3>
                  <p>Służy do prowadzenia kampanii reklamowych oraz pomiaru ich skuteczności.</p>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#E6EDF6" }}>Live Chat</h3>
                  <p>Umożliwia szybki kontakt użytkownika z administratorem strony.</p>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#E6EDF6" }}>WhatsApp / Messenger</h3>
                  <p>Umożliwia bezpośredni kontakt poprzez komunikatory zewnętrzne.</p>
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: "#E6EDF6" }}>Cookiebot</h3>
                  <p>Strona korzysta z systemu Cookiebot do zarządzania zgodami użytkowników na pliki cookies zgodnie z obowiązującymi przepisami prawa.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                6. Pliki cookies
              </h2>
              <p>Strona korzysta z plików cookies w celu:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>prawidłowego działania strony</li>
                <li>analizy statystyk odwiedzin</li>
                <li>działań marketingowych</li>
                <li>poprawy komfortu korzystania z serwisu</li>
              </ul>
              <p className="mt-4">
                Użytkownik może samodzielnie zarządzać ustawieniami cookies za pomocą banera Cookiebot lub ustawień swojej przeglądarki internetowej.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                7. Podstawa prawna przetwarzania danych
              </h2>
              <p>Dane osobowe przetwarzane są na podstawie:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>zgody użytkownika</li>
                <li>niezbędności do wykonania umowy lub podjęcia działań przed jej zawarciem</li>
                <li>obowiązków wynikających z przepisów prawa</li>
                <li>prawnie uzasadnionego interesu administratora</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                8. Okres przechowywania danych
              </h2>
              <p>
                Dane osobowe przechowywane są przez okres niezbędny do realizacji celu, dla którego zostały zebrane, a także przez czas wymagany przepisami prawa lub do momentu cofnięcia zgody przez użytkownika.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                9. Prawa użytkownika
              </h2>
              <p>Każdy użytkownik ma prawo do:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>dostępu do swoich danych</li>
                <li>sprostowania danych</li>
                <li>usunięcia danych</li>
                <li>ograniczenia przetwarzania</li>
                <li>wniesienia sprzeciwu</li>
                <li>przenoszenia danych</li>
                <li>cofnięcia zgody na przetwarzanie</li>
                <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
              </ul>
              <p className="mt-4">
                W sprawach związanych z ochroną danych osobowych można kontaktować się pod adresem:{" "}
                <a className="text-[#00E0C6] hover:underline" href="mailto:darstudio.client@gmail.com">
                  darstudio.client@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                10. Hosting strony
              </h2>
              <p>
                Strona internetowa hostowana jest na platformie Vercel, która może przetwarzać dane techniczne związane z działaniem serwisu, takie jak adres IP, logi serwera oraz informacje techniczne niezbędne do zapewnienia bezpieczeństwa i prawidłowego działania strony.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                11. Klauzula RODO przy formularzach
              </h2>
              <p>
                Na stronie internetowej przy formularzu kontaktowym oraz formularzu briefu projektowego stosowana jest klauzula informacyjna dotycząca przetwarzania danych osobowych.
              </p>
              <p className="mt-3">Treść zgody może brzmieć następująco:</p>
              <blockquote className="mt-3 border-l-2 pl-4" style={{ borderColor: "rgba(0,224,198,0.6)" }}>
                „Wyrażam zgodę na przetwarzanie moich danych osobowych przez Arkadiusza Dzierżewskiego w celu kontaktu oraz realizacji zapytania zgodnie z Polityką Prywatności.”
              </blockquote>
              <p className="mt-3">
                Podanie danych jest dobrowolne, jednak niezbędne do uzyskania odpowiedzi na przesłane zapytanie lub przygotowania oferty współpracy.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                12. Integracje z narzędziami zewnętrznymi
              </h2>
              <p>
                Strona internetowa DarStudio korzysta z integracji z zewnętrznymi usługami, które wspierają działanie serwisu, analizę ruchu, marketing oraz komunikację z użytkownikami.
              </p>
              <p className="mt-3">Do takich integracji należą w szczególności:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Google Analytics</li>
                <li>Google Search Console</li>
                <li>Google Ads</li>
                <li>Meta Pixel (Facebook Pixel)</li>
                <li>Live Chat</li>
                <li>WhatsApp</li>
                <li>Messenger</li>
                <li>Cookiebot</li>
                <li>Google Maps (jeśli osadzona mapa zostanie wdrożona)</li>
                <li>formularze kontaktowe oraz formularz briefu</li>
              </ul>
              <p className="mt-4">
                Dostawcy tych usług mogą przetwarzać dane użytkowników zgodnie ze swoimi własnymi politykami prywatności.
              </p>
              <p className="mt-3">
                Administrator dokłada starań, aby korzystać wyłącznie z narzędzi zapewniających odpowiedni poziom ochrony danych osobowych zgodny z obowiązującymi przepisami prawa.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                13. Przekazywanie danych poza Europejski Obszar Gospodarczy (EOG)
              </h2>
              <p>
                W związku z korzystaniem z narzędzi takich jak Google, Meta, WhatsApp, Messenger czy Vercel, dane użytkowników mogą być przekazywane poza Europejski Obszar Gospodarczy, w szczególności do Stanów Zjednoczonych.
              </p>
              <p className="mt-3">
                Przekazywanie danych odbywa się wyłącznie na podstawie odpowiednich mechanizmów prawnych zgodnych z RODO, takich jak standardowe klauzule umowne zatwierdzone przez Komisję Europejską lub inne podstawy prawne przewidziane przepisami.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                14. Ochrona danych osobowych
              </h2>
              <p>
                Administrator stosuje odpowiednie środki techniczne i organizacyjne mające na celu zapewnienie bezpieczeństwa przetwarzanych danych osobowych, w szczególności ochronę przed ich utratą, zniszczeniem, nieuprawnionym dostępem lub ujawnieniem.
              </p>
              <p className="mt-3">
                Dostęp do danych posiada wyłącznie administrator oraz podmioty współpracujące wyłącznie w zakresie niezbędnym do realizacji usług i funkcjonowania strony internetowej.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                15. Zmiany polityki prywatności
              </h2>
              <p>
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności, w szczególności w przypadku zmian technologicznych, prawnych lub organizacyjnych.
              </p>
              <p className="mt-3">
                Aktualna wersja Polityki Prywatności jest zawsze dostępna na stronie internetowej.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: "#E6EDF6", fontFamily: "var(--font-display)" }}>
                16. Kontakt
              </h2>
              <p>W sprawach związanych z ochroną danych osobowych, realizacją praw użytkownika lub pytaniami dotyczącymi niniejszej Polityki Prywatności można kontaktować się pod adresem:</p>
              <div className="mt-4 rounded-2xl border p-5" style={{ backgroundColor: "rgba(18, 26, 43, 0.6)", borderColor: "rgba(255,255,255,0.08)" }}>
                <p className="font-semibold" style={{ color: "#E6EDF6" }}>Arkadiusz Dzierżewski</p>
                <p>
                  e-mail:{" "}
                  <a className="text-[#00E0C6] hover:underline" href="mailto:darstudio.client@gmail.com">
                    darstudio.client@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

