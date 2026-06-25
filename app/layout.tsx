import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ScrollProgress from "@/src/components/ScrollProgress";
import SiteLoader from "@/src/components/SiteLoader";
import FloatingEnquiryWidget from "@/src/components/FloatingEnquiryWidget";
import { siteConfig } from "@/src/lib/constants";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Elara Stays Wayanad | Luxury Resort in Wayanad Kerala | Family, Couples & Group Stay",
    template: "%s | Elara Stays",
  },
  description:
    "Experience Elara Stays Wayanad, a luxury nature resort in Kerala offering comfortable accommodation for families, couples, friends and groups. Enjoy scenic mountain views, peaceful surroundings and a memorable Wayanad vacation.",
  keywords: siteConfig.keywords,
  applicationName: "Elara Stays",
  creator: "Elara Stays",
  publisher: "Elara Stays",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Elara Stays Wayanad | Luxury Resort in Wayanad Kerala | Family, Couples & Group Stay",
    description:
      "Experience Elara Stays Wayanad, a luxury nature resort in Kerala offering comfortable accommodation for families, couples, friends and groups. Enjoy scenic mountain views, peaceful surroundings and a memorable Wayanad vacation.",
    url: siteConfig.url,
    siteName: "Elara Stays",
    images: [{ url: "/Logo.jpg", width: 512, height: 512, alt: "Elara Stays logo" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Elara Stays Wayanad | Luxury Resort in Wayanad Kerala | Family, Couples & Group Stay",
    description: "Experience Elara Stays Wayanad, a luxury nature resort in Kerala offering comfortable accommodation for families, couples, friends and groups. Enjoy scenic mountain views, peaceful surroundings and a memorable Wayanad vacation.",
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
    google: "bAuy1TxVc6-XqmCkwC8d2OVOeDMOr7VDkt1B6aqjewg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  }>) {
  return (
    <html lang="en-IN">
      <body>
        <SiteLoader />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <FloatingEnquiryWidget />
      </body>
      <GoogleAnalytics gaId="G-N7SLKM0RKG" />
    </html>
  );
}
