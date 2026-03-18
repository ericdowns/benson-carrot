import { Hero } from "@/components/sections/Hero";
import { WhatIsCarrot } from "@/components/sections/WhatIsCarrot";
import { WhyAdvertise } from "@/components/sections/WhyAdvertise";
import { Distribution } from "@/components/sections/Distribution";
import { AdOptions } from "@/components/sections/AdOptions";
import { Timeline } from "@/components/sections/Timeline";
import { AboutStudents } from "@/components/sections/AboutStudents";
import { PreviousIssue } from "@/components/sections/PreviousIssue";
import { FAQ } from "@/components/sections/FAQ";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { Footer } from "@/components/sections/Footer";
import { StickyNav } from "@/components/sections/StickyNav";

export default function Home() {
  return (
    <main>
      <StickyNav />

      <Hero />
      <WhatIsCarrot />
      <WhyAdvertise />
      <Distribution />
      <AdOptions />
      <Timeline />
      <AboutStudents />
      <PreviousIssue />
      <FAQ />
      <InquiryForm />
      <Footer />
    </main>
  );
}
