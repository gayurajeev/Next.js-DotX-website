import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import WhatIsDotX from "@/components/WhatIsDotX";
import WorkflowComparison from "@/components/WorkflowComparison";
import HowItWorks from "@/components/HowItWorks";
import GlobalCTA from "@/components/GlobalCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <AppShowcase />
      <WhatIsDotX />
      <WorkflowComparison />
      <HowItWorks />
      <GlobalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
