"use client";
import Layout from "./component/layout/Layout";
import HeroSection from "./component/sections/HeroSection";
import Services from "./component/sections/Services";
import ContactUs from "./component/sections/ContactUs";
import Agency from "./component/sections/Agency";
import Process from "./component/sections/Process";
import  Marquee  from "./component/ui/marquee";
// import PricingPlan from "@/app/component/sections/Pricing";
// import Testimonials from '@/components/sections/Testimonials';
// import Portfolio from '@/components/sections/Portfolio';
// import LatestWork from '@/components/sections/LatestWork';

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
