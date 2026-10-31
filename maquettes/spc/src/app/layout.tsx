import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "@fontsource-variable/archivo/wdth.css";
import "./globals.css";
import { Altimetre } from "@/components/Altimetre";
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

/** Variables CSS de la couleur du logo et de ses aplats profonds (ardoise, cave), en triplets RGB pour Tailwind. */
function accentVars(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  const t = (k: number) => `${Math.round(r * k)} ${Math.round(g * k)} ${Math.round(b * k)}`;
  const toWhite = (k: number) => `${Math.round(r + (255 - r) * k)} ${Math.round(g + (255 - g) * k)} ${Math.round(b + (255 - b) * k)}`;
  return {
    "--accent": `${r} ${g} ${b}`,
    "--accent-deep": t(0.72),
    "--accent-wash": toWhite(0.93),
    "--accent-light": toWhite(0.58),
    "--deep": t(0.44),
    "--abyss": t(0.2),
  } as React.CSSProperties;
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: home.title, template: "%s | SPC" },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0d2a3b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" style={accentVars(ACCENT)}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:text-brand-deep">
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <StickyCall />
        {INDEXABLE ? null : <MockupBadge />}
        <JsonLd nodes={[businessNode, websiteNode]} />
        <Altimetre />
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
