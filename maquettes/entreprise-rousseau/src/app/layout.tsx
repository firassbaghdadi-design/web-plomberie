import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { GA_ID, INDEXABLE, SITE_URL, business } from "@/lib/site";
import { homeDescription, homeTitle, robots } from "@/lib/metadata";

const display = localFont({
  src: "../fonts/fraunces-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "100 900",
  display: "swap",
});

const sans = localFont({
  src: "../fonts/instrument-sans-latin-wght-normal.woff2",
  variable: "--font-sans",
  weight: "400 700",
  display: "swap",
});

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
  themeColor: "#12263A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
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
