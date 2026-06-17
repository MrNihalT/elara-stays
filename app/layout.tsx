import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollProgress from "@/src/components/ScrollProgress";
import SiteLoader from "@/src/components/SiteLoader";
import { siteConfig } from "@/src/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Elara Stays — Best Resorts in Wayanad | Book via WhatsApp",
    template: "%s | Elara Stays",
  },
  description:
    "Elara Stays — Discover and book the best resorts in Wayanad. Budget resorts, family resorts, honeymoon resorts, luxury stays, swimming pool resorts, and private pool villas. WhatsApp-first enquiry support.",
  keywords: siteConfig.keywords,
  applicationName: "Elara Stays",
  creator: "Elara Stays",
  publisher: "Elara Stays",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Elara Stays — Best Resorts in Wayanad",
    description:
      "Elara Stays helps you find and enquire for premium, family, budget, pool, and honeymoon resorts in Wayanad via WhatsApp.",
    url: siteConfig.url,
    siteName: "Elara Stays",
    images: [{ url: "/Logo.jpg", width: 512, height: 512, alt: "Elara Stays logo" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Elara Stays — Wayanad Resort Booking",
    description: "WhatsApp-first Wayanad resort enquiry by Elara Stays for families, couples, and groups.",
    images: ["/Logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Replace with your actual Google Search Console verification code
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-N7SLKM0RKG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-N7SLKM0RKG');
        `}
      </Script>
      <body>
        <SiteLoader />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
