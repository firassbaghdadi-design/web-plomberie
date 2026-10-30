import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "@fontsource-variable/sora/index.css";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MockupBadge } from "@/components/MockupBadge";
import { Motion } from "@/components/Motion";
import { StickyCall } from "@/components/StickyCall";
import { home } from "@/lib/content";
import { businessNode, websiteNode } from "@/lib/seo";
import { GA_ID, INDEXABLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.title, template: "%s | S. Petit" },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

/** Les animations de la goutte ne s'activent que si le moteur démarre : sinon (erreur de script) tout reste visible après 4 s. */
const jsFlag =
  "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__drop)document.documentElement.classList.remove('js')},4000)";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-full focus:bg-eau focus:px-5 focus:py-3 focus:font-medium focus:text-white">
          Aller au contenu
        </a>
        <div id="page" className="relative">
          <div id="rail" aria-hidden="true">
            <div className="rail-line" />
            <div className="rail-fill" />
            <div className="drop">
              <svg viewBox="0 0 15 21"><path d="M7.5 1C7.5 1 1.2 9 1.2 13.6a6.3 6.3 0 0 0 12.6 0C13.8 9 7.5 1 7.5 1Z" fill="#1769a3" /></svg>
            </div>
          </div>
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
        </div>
        <StickyCall />
        {INDEXABLE ? null : <MockupBadge />}
        <JsonLd nodes={[businessNode, websiteNode]} />
        <Motion />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {GA_ID && INDEXABLE ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
