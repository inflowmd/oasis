import type { Metadata } from "next";
import { Outfit, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oasisvv.com"),
  title: "Longevity Medicine in Scottsdale, AZ | Dr. Steven Mehta",
  description:
    "Physician-led longevity medicine grounded in cardiovascular science. Precision diagnostics and prevention with Dr. Steven Mehta in Scottsdale and Prescott, AZ.",
  icons: {
    icon: [
      { url: "/logo.webp", type: "image/webp" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Oasis Vein & Vitality",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oasis Vein & Vitality — Longevity Medicine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
