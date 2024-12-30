import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              We create <span className="text-[#FF5722]">solutions</span> for
              your business
            </h1>
            <p className="text-gray-600 text-lg">
              Our team keeps a keen eye on emerging trends and technologies to
              ensure your marketing campaigns remain cutting-edge.
            </p>
            <button className="bg-[#FF5722] hover:bg-[#F4511E] text-white px-8 py-6 text-lg rounded-full">
              Get Started
            </button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/assets/images/HomePage/Home/bg1.png"
              alt="Hero illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
