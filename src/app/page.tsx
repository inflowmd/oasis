import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Stats from "@/components/Stats";
import WhenToStart from "@/components/WhenToStart";
import Program from "@/components/Program";
import HowItWorks from "@/components/HowItWorks";
import CardiovascularEdge from "@/components/CardiovascularEdge";
import Diagnostics from "@/components/Diagnostics";
import Credentials from "@/components/Credentials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Stats />
      <WhenToStart />
      <Program />
      <HowItWorks />
      <CardiovascularEdge />
      <Diagnostics />
      <Credentials />
      <CTA />
      <Footer />
    </>
  );
}
