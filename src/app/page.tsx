import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsDotX from "@/components/WhatIsDotX";
import WorkflowComparison from "@/components/WorkflowComparison";
import HowItWorks from "@/components/HowItWorks";
import CoreFeatures from "@/components/CoreFeatures";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <WhatIsDotX />
      <WorkflowComparison />
      <HowItWorks />
      <CoreFeatures />
      <FAQ />
      <Footer />
    </main>
  );
}
