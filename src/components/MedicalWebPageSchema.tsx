import JsonLd from "./JsonLd";

export default function MedicalWebPageSchema({
  slug,
  title,
  description,
  specialty,
}: {
  slug: string;
  title: string;
  description: string;
  specialty: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: `https://oasisvv.com${slug}`,
    about: { "@type": "MedicalSpecialty", name: specialty },
    publisher: {
      "@type": "MedicalBusiness",
      name: "Oasis Vein & Vitality",
      url: "https://oasisvv.com",
    },
  };
  return <JsonLd data={data} />;
}
