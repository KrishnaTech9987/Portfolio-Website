"use client";
import Layout from "./component/layout/Layout";
import HeroSection from "./component/sections/HeroSection";
import Services from "./component/sections/Services";
// import Testimonials from '@/components/sections/Testimonials';
// import Portfolio from '@/components/sections/Portfolio';
// import LatestWork from '@/components/sections/LatestWork';
import ContactUs from "./component/sections/ContactUs";
import Pricing from "./component/sections/Pricing";
import Agency from "./component/sections/Agency";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Services />
      {/* <Testimonials />
      <Portfolio />
      <LatestWork /> */}
      <Agency />
      <Pricing />
      <ContactUs />
    </Layout>
  );
}
