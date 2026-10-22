import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/index.css";
import "@fontsource-variable/inter/index.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Motion } from "@/components/Motion";
import { INDEXABLE, SITE_URL, agency } from "@/lib/site";
import { organisationNode, websiteNode } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${agency.tagline} | ${agency.name}`, template: `%s | ${agency.name}` },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F6F1E7" };

const early = "document.documentElement.classList.add('js');";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: early }} />
      </head>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-terre-action focus:px-5 focus:py-3 focus:font-bold focus:text-white">
          Aller au contenu
        </a>
        <div className="progress" aria-hidden="true" />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        {INDEXABLE ? null : (
          <p className="pointer-events-none fixed bottom-3 right-3 z-[60] rounded-full bg-ardoise/90 px-3 py-1.5 text-xs font-medium text-platre shadow-lift">Version de préparation · non référencée</p>
        )}
        <JsonLd nodes={[organisationNode, websiteNode]} />
        <Motion />
      </body>
    </html>
  );
}
