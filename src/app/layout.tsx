import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Oasis Longevity Medicine | Dr. Steven Mehta | Scottsdale, AZ",
  description:
    "Physician-led longevity medicine grounded in cardiovascular science. Precision diagnostics and prevention in Scottsdale, AZ with Dr. Steven Mehta, MD, MBA, FACC.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
