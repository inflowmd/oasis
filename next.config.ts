import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/meet-the-doctor", destination: "/about", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/longevity", destination: "/program", permanent: true },
      { source: "/hormone-optimization", destination: "/services/hormone-optimization", permanent: true },
      { source: "/weight-loss", destination: "/services/weight-management", permanent: true },
      { source: "/epigenetic-testing-coaching", destination: "/services/epigenetic-evaluation", permanent: true },
      { source: "/cardiovascular-guidance", destination: "/services/cardiovascular-prevention", permanent: true },
      { source: "/peptide-therapy", destination: "/services/peptide-therapy", permanent: true },
      { source: "/varicose-veins-treatment", destination: "/aesthetics/varicose-veins", permanent: true },
      { source: "/sclerotherapy", destination: "/aesthetics/sclerotherapy", permanent: true },
      { source: "/microneedling", destination: "/aesthetics/microneedling", permanent: true },
      { source: "/exosomes", destination: "/aesthetics/exosomes", permanent: true },
      { source: "/hair-restoration", destination: "/aesthetics/hair-restoration", permanent: true },
      { source: "/hand-rejuvenation", destination: "/aesthetics/hand-rejuvenation", permanent: true },
      { source: "/faq", destination: "/program", permanent: true },
      { source: "/reviews", destination: "/", permanent: true },
      { source: "/before-after", destination: "/aesthetics", permanent: true },
      { source: "/payment-plans", destination: "/contact", permanent: true },
      { source: "/book-consultation", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
