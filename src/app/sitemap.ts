import type { MetadataRoute } from "next";

const BASE = "https://oasisvv.com";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const entries: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "daily" },
  { path: "/about", priority: 0.8, changeFrequency: "weekly" },
  { path: "/program", priority: 0.8, changeFrequency: "weekly" },
  { path: "/longevity-medicine-scottsdale", priority: 0.8, changeFrequency: "weekly" },
  { path: "/preventive-cardiology-scottsdale", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/hormone-optimization", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/weight-management", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/epigenetic-evaluation", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/cardiovascular-prevention", priority: 0.8, changeFrequency: "weekly" },
  { path: "/services/peptide-therapy", priority: 0.8, changeFrequency: "weekly" },
  { path: "/aesthetics", priority: 0.7, changeFrequency: "weekly" },
  { path: "/aesthetics/varicose-veins", priority: 0.7, changeFrequency: "weekly" },
  { path: "/aesthetics/sclerotherapy", priority: 0.7, changeFrequency: "weekly" },
  { path: "/aesthetics/microneedling", priority: 0.7, changeFrequency: "weekly" },
  { path: "/aesthetics/exosomes", priority: 0.7, changeFrequency: "weekly" },
  { path: "/aesthetics/hair-restoration", priority: 0.7, changeFrequency: "weekly" },
  { path: "/aesthetics/hand-rejuvenation", priority: 0.7, changeFrequency: "weekly" },
  { path: "/locations/scottsdale", priority: 0.8, changeFrequency: "monthly" },
  { path: "/locations/prescott", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/payment-plans", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/accessibility-statement", priority: 0.3, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return entries.map((e) => ({
    url: `${BASE}${e.path}`,
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
