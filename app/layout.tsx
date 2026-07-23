import type { Metadata } from "next";
import { Dancing_Script, Inter, Playfair_Display } from "next/font/google";
import {
  companyName,
  defaultDescription,
  getSiteUrl,
  primaryTown,
  seoKeywords,
} from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | House Cleaning in ${primaryTown}, MA`,
    template: `%s | ${companyName}`,
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  applicationName: companyName,
  authors: [{ name: companyName }],
  creator: companyName,
  publisher: companyName,
  category: "Home cleaning",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: companyName,
    title: `${companyName} | House Cleaning in ${primaryTown}, MA`,
    description: defaultDescription,
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: `${companyName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${companyName} | House Cleaning in ${primaryTown}, MA`,
    description: defaultDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-navy">{children}</body>
    </html>
  );
}
