import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "@fontsource-variable/outfit/index.css";
import "./globals.css";
import "./brand.generated.css";
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
  title: { default: home.title, template: "%s | SMAP" },
  robots: INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-medium focus:text-white">
          Aller au contenu
        </a>
        <Header />
        <div className="relative">
          <main id="contenu">{children}</main>
        </div>
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
