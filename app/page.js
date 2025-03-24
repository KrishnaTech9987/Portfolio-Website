"use client";
// import Layout from "@components/layout/Layout";
import HeroSection from "@components/sections/HomePage/HeroSection";
import Services from "@components/sections/HomePage/Services";
import ContactUs from "@components/sections/HomePage/ContactUs";
import Agency from "@components/sections/HomePage/Agency";
import Process from "@components/sections/HomePage/Process";
import Marquee from "@components/ui/marquee";

// import PricingPlan from "@/app/component/sections/Pricing";
// import Testimonials from '@/components/sections/Testimonials';
// import Portfolio from '@/components/sections/Portfolio';
// import LatestWork from '@/components/sections/LatestWork';

export default function Home() {
  return (
    <>
      {/* <Layout> */}
      <HeroSection />
      <Services />
      <Process />
      {/* <Testimonials />
      <Portfolio />
      <LatestWork /> */}
      <Agency />
      <Marquee />
      {/* <PricingPlan /> */}
      <ContactUs />
      {/* </Layout> */}
    </>
  );
}
