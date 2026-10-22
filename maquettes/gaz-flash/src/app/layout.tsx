import type { Metadata, Viewport } from "next";
import "@fontsource-variable/open-sans/index.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { MockupBadge } from "@/components/MockupBadge";
import { Motion } from "@/components/Motion";
import { StickyCall } from "@/components/StickyCall";
import { INDEXABLE, SITE_URL, business } from "@/lib/site";
import { businessNode, websiteNode } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Gaz Flash, chauffagiste à Paris 18e", template: `%s | ${business.name}` },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1B2229" };

const early = "document.documentElement.classList.add('js-motion');document.documentElement.dataset.top=window.scrollY<24?'1':'0';";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: early }} />
      </head>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-[3px] focus:bg-flame-btn focus:px-5 focus:py-3 focus:font-semibold focus:text-white">
          Aller au contenu
        </a>
        <div className="progress" aria-hidden="true" />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <StickyCall />
        {INDEXABLE ? null : <MockupBadge />}
        <JsonLd nodes={[businessNode, websiteNode]} />
        <Motion />
      </body>
    </html>
  );
}
