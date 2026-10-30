import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "@fontsource-variable/onest/index.css";
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
import { ACCENT } from "@/lib/photos";

/** Variables CSS de l'accent (couleur du logo), en triplets RGB pour Tailwind. */
function accentVars(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const mix = (c: number, k: number) => Math.round(c * k);
  const wash = (c: number) => Math.round(255 - (255 - c) * 0.07);
  return { "--accent": `${r} ${g} ${b}`, "--accent-deep": `${mix(r, 0.72)} ${mix(g, 0.72)} ${mix(b, 0.72)}`, "--accent-wash": `${wash(r)} ${wash(g)} ${wash(b)}` } as React.CSSProperties;
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.title, template: "%s | SPC" },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" style={accentVars(ACCENT)}>
      <head>
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
