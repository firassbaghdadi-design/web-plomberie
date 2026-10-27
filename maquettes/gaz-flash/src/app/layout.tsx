import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/inter-tight/index.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Motion } from "@/components/Motion";
import { Pipe } from "@/components/Pipe";
import { PhoneIcon } from "@/components/Icons";
import { INDEXABLE, SITE_URL, business } from "@/lib/site";
import { businessNode, websiteNode } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Gaz Flash, chauffagiste à Paris 18e", template: `%s | ${business.name}` },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FFFFFF" };

const early = "document.documentElement.classList.add('js-motion');document.documentElement.dataset.top=window.scrollY<24?'1':'0';";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: early }} />
      </head>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-red-btn focus:px-5 focus:py-3 focus:font-medium focus:text-white">
          Aller au contenu
        </a>
        <Header />
        <div className="relative">
          <Pipe />
          <main id="contenu" className="relative z-[1]">
            {children}
          </main>
        </div>
        <Footer />
        <div className="sticky-call no-print fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/90 px-4 py-3 backdrop-blur-md lg:hidden">
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn w-full">
            <PhoneIcon className="h-4 w-4" />
            Appeler le {business.phoneDisplay}
          </a>
        </div>
        {INDEXABLE ? null : (
          <p className="no-print fixed bottom-[5.6rem] left-3 z-[60] rounded-full bg-white/90 px-3 py-1 text-[0.7rem] tracking-wide text-ink-soft shadow-[0_0_0_1px_#e7e5e1] backdrop-blur lg:bottom-4">Maquette privée · non référencée</p>
        )}
        <JsonLd nodes={[businessNode, websiteNode]} />
        <Motion />
      </body>
    </html>
  );
}
