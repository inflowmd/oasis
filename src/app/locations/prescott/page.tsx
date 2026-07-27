import type { Metadata } from "next";
import LocationLayout from "@/components/LocationLayout";
import JsonLd from "@/components/JsonLd";

const TITLE = "Prescott Office | Oasis Vein & Vitality";
const DESCRIPTION =
  "Visit Dr. Steven Mehta at 2001 Excellence Way, Suite 200, Prescott, AZ 86301. Cardiologist-led longevity medicine now in the Quad Cities area.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/locations/prescott" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/locations/prescott" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const clinic = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Oasis Vein & Vitality — Prescott",
  url: "https://oasisvv.com/locations/prescott",
  telephone: "+14807207044",
  image: "https://oasisvv.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2001 Excellence Way, Suite 200",
    addressLocality: "Prescott",
    addressRegion: "AZ",
    postalCode: "86301",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 34.5400, longitude: -112.4685 },
  openingHours: "Mo-Fr 08:00-17:00",
};

export default function PrescottPage() {
  return (
    <>
      <JsonLd data={clinic} />
      <LocationLayout
        city="Prescott"
        intro="Dr. Mehta brings cardiologist-led longevity medicine to the Quad Cities area — a level of preventive cardiovascular care not previously available in the Prescott region."
        address={{ line1: "2001 Excellence Way, Suite 200", line2: "Prescott, AZ 86301" }}
        mapEmbedSrc="https://www.google.com/maps?q=2001+Excellence+Way+Suite+200,+Prescott,+AZ+86301&z=15&output=embed"
        hours={[
          { day: "Select weekdays", time: "By appointment" },
          { day: "Saturday", time: "By appointment" },
          { day: "Sunday", time: "Closed" },
        ]}
        parking="Free parking is available on-site adjacent to the suite entrance."
        serving="Many clients in the Prescott region have, until now, traveled to Phoenix for advanced cardiovascular care. The Prescott office removes the drive — bringing the same physician relationship and depth of preventive cardiology directly to the Quad Cities."
        neighborhoods={[
          "Prescott",
          "Prescott Valley",
          "Dewey-Humboldt",
          "Chino Valley",
          "Yarnell",
          "Mayer",
          "Sedona",
        ]}
      />
    </>
  );
}
