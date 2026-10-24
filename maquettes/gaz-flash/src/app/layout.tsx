import type { Metadata, Viewport } from "next";
import "@fontsource-variable/open-sans/index.css";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource/caveat/600.css";
import "@fontsource/caveat/700.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { PhoneIcon } from "@/components/Icons";
import { INDEXABLE, SITE_URL, business } from "@/lib/site";
import { businessNode, websiteNode } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Gaz Flash, chauffagiste à Paris 18e", template: `%s | ${business.name}` },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1B2229" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-red-btn focus:px-5 focus:py-3 focus:font-semibold focus:text-white">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <div className="fixed inset-x-0 bottom-0 z-50 border-t-[3px] border-ink bg-paper p-2.5 lg:hidden no-print">
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn w-full">
            <PhoneIcon />
            Appeler le {business.phoneDisplay}
          </a>
        </div>
        {INDEXABLE ? null : (
          <p className="no-print fixed bottom-[4.9rem] left-3 z-[60] bg-ink-2/90 px-3 py-1 text-xs font-medium text-white lg:bottom-4">Maquette privée · non référencée</p>
        )}
        <JsonLd nodes={[businessNode, websiteNode]} />
      </body>
    </html>
  );
}
