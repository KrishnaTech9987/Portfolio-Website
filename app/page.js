"use client";
import Layout from "./component/layout/Layout";
import HeroSection from "./component/sections/HeroSection";
// import Services from '@/components/sections/Services';
// import Testimonials from '@/components/sections/Testimonials';
// import Portfolio from '@/components/sections/Portfolio';
// import LatestWork from '@/components/sections/LatestWork';
import ContactUs from "./component/sections/ContactUs";
// import Pricing from '@/components/sections/Pricing';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      {/* <Services />
      <Testimonials />
      <Portfolio />
      <LatestWork />
      <Pricing /> */}
      <ContactUs />
    </Layout>
  );
}
