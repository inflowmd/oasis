import type { Metadata } from "next";
import LocationLayout from "@/components/LocationLayout";

export const metadata: Metadata = {
  title: "Scottsdale Office | Oasis Longevity Medicine",
  description:
    "Cardiologist-led longevity medicine in North Scottsdale. Visit Dr. Steven Mehta at 7659 E. Pinnacle Peak Rd, Suite 110, Scottsdale, AZ 85255.",
  alternates: { canonical: "/locations/scottsdale" },
};

export default function ScottsdalePage() {
  return (
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
  );
}
