import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "@fontsource-variable/instrument-sans/index.css";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MockupBadge } from "@/components/MockupBadge";
import { Motion } from "@/components/Motion";
import { StickyCall } from "@/components/StickyCall";
import { home } from "@/lib/content";
import { ACCENT } from "@/lib/photos";
import { businessNode, websiteNode } from "@/lib/seo";
import { GA_ID, INDEXABLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.title, template: "%s | Bastien & Trebulle" },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

/** La couleur d'accent est celle du logo, relevée au build : on en dérive la teinte foncée et le fond très clair. */
function accentVars(hex: string) {
  const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
  const [r, g, b] = m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : [35, 47, 99];
  const mix = (v: number, to: number, t: number) => Math.round(v + (to - v) * t);
  return `:root{--accent:${r} ${g} ${b};--accent-deep:${mix(r, 0, 0.3)} ${mix(g, 0, 0.3)} ${mix(b, 0, 0.3)};--accent-wash:${mix(r, 255, 0.94)} ${mix(g, 255, 0.94)} ${mix(b, 255, 0.94)}}`;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <style dangerouslySetInnerHTML={{ __html: accentVars(ACCENT) }} />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-medium focus:text-white">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
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
