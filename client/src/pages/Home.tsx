import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import VerticalsSection from "@/components/VerticalsSection";
import CreationOpsSection from "@/components/CreationOpsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import WhyWeExistSection from "@/components/WhyWeExistSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDoSection />
      <VerticalsSection />
      <WhyWeExistSection />
      <CreationOpsSection />
      <TargetAudienceSection />
      <CTASection />
    </Layout>
  );
}
