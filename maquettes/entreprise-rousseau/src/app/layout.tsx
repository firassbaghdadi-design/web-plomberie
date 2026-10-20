import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Suspense } from "react";
import "@fontsource/questrial/400.css";
import "@fontsource-variable/roboto/index.css";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { GA_ID, INDEXABLE, SITE_URL, business } from "@/lib/site";
import { homeDescription, homeTitle, robots } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: homeTitle, template: `%s | ${business.name}` },
  description: homeDescription,
  robots,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: business.name,
    title: homeTitle,
    description: homeDescription,
  },
  twitter: { card: "summary_large_image", title: homeTitle, description: homeDescription },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F3A4E",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
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
