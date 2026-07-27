import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Stats from "@/components/Stats";
import WhenToStart from "@/components/WhenToStart";
import Program from "@/components/Program";
import HowItWorks from "@/components/HowItWorks";
import CardiovascularEdge from "@/components/CardiovascularEdge";
import Diagnostics from "@/components/Diagnostics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const TITLE = "Longevity Medicine in Scottsdale, AZ | Dr. Steven Mehta";
const DESCRIPTION =
  "Physician-led longevity medicine grounded in cardiovascular science. Precision diagnostics and prevention with Dr. Steven Mehta in Scottsdale and Prescott, AZ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
  },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const medicalBusiness = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Oasis Vein & Vitality",
  description:
    "Physician-led longevity medicine grounded in cardiovascular science. Precision diagnostics and prevention in Scottsdale and Prescott, AZ.",
  url: "https://oasisvv.com",
  telephone: "+14807207044",
  email: "info@oasisvv.com",
  priceRange: "$$$$",
  image: "https://oasisvv.com/logo.webp",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "7659 E. Pinnacle Peak Rd, Suite 110",
      addressLocality: "Scottsdale",
      addressRegion: "AZ",
      postalCode: "85255",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "2001 Excellence Way, Suite 200",
      addressLocality: "Prescott",
      addressRegion: "AZ",
      postalCode: "86301",
      addressCountry: "US",
    },
  ],
  geo: { "@type": "GeoCoordinates", latitude: 33.7285, longitude: -111.926 },
  openingHours: "Mo-Fr 08:00-17:00",
  sameAs: [],
};

export default function Home() {
  return (
    <>
      <JsonLd data={medicalBusiness} />
      <Navbar />
      <Hero />
      <Story />
      <Stats />
      <WhenToStart />
      <Program />
      <HowItWorks />
      <CardiovascularEdge />
      <Diagnostics />
      <CTA />
      <Footer />
    </>
  );
}
