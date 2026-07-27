import type { Metadata } from "next";
import LocationLayout from "@/components/LocationLayout";
import JsonLd from "@/components/JsonLd";

const TITLE = "Scottsdale Office | Oasis Vein & Vitality";
const DESCRIPTION =
  "Visit Dr. Steven Mehta at 7659 E. Pinnacle Peak Rd, Suite 110, Scottsdale, AZ 85255. Longevity medicine, vein treatment, and aesthetic services. Call today.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/locations/scottsdale" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/locations/scottsdale" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

const clinic = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Oasis Vein & Vitality — Scottsdale",
  url: "https://oasisvv.com/locations/scottsdale",
  telephone: "+14807207044",
  image: "https://oasisvv.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7659 E. Pinnacle Peak Rd, Suite 110",
    addressLocality: "Scottsdale",
    addressRegion: "AZ",
    postalCode: "85255",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.7285, longitude: -111.926 },
  openingHours: "Mo-Fr 08:00-17:00",
};

export default function ScottsdalePage() {
  return (
    <>
      <JsonLd data={clinic} />
      <LocationLayout
        city="Scottsdale"
        intro="The Scottsdale office is the home of Dr. Mehta's longevity practice — a quiet, considered environment built for the kind of unhurried conversations the work requires."
        address={{ line1: "7659 E. Pinnacle Peak Rd, Suite 110", line2: "Scottsdale, AZ 85255" }}
        mapEmbedSrc="https://www.google.com/maps?q=7659+E+Pinnacle+Peak+Rd+Suite+110,+Scottsdale,+AZ+85255&z=15&output=embed"
        hours={[
          { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
          { day: "Saturday", time: "By appointment" },
          { day: "Sunday", time: "Closed" },
        ]}
        parking="Complimentary parking is available directly outside the suite. Accessible parking is available adjacent to the main entrance."
        serving="The Scottsdale office serves clients across the East Valley and beyond. Many travel in from neighboring communities for the depth of the diagnostic and physician relationship — a level of preventive cardiology not widely available outside of academic centers."
        neighborhoods={[
          "North Scottsdale",
          "Paradise Valley",
          "Cave Creek",
          "Fountain Hills",
          "DC Ranch",
          "Grayhawk",
          "Troon",
          "Arcadia",
          "McCormick Ranch",
          "Gainey Ranch",
        ]}
      />
    </>
  );
}
