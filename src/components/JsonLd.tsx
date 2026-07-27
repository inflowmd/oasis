export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org JSON-LD is content, not user input — the data prop is
      // authored in source. JSON.stringify safely escapes its values.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
