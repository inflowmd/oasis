import type { Metadata } from "next";
import LocationLayout from "@/components/LocationLayout";

export const metadata: Metadata = {
  title: "Prescott Office | Oasis Longevity Medicine",
  description:
    "Cardiologist-led longevity medicine in Prescott — bringing physician-led preventive cardiovascular care to the Quad Cities region. 2001 Excellence Way, Suite 200, Prescott, AZ 86301.",
  alternates: { canonical: "/locations/prescott" },
};

export default function PrescottPage() {
  return (
    <LocationLayout
      city="Prescott"
      intro="Dr. Mehta brings cardiologist-led longevity medicine to the Quad Cities area — a level of preventive cardiovascular care not previously available in the Prescott region."
      address={{ line1: "2001 Excellence Way, Suite 200", line2: "Prescott, AZ 86301" }}
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
  );
}
