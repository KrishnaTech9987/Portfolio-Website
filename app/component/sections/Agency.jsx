import React from "react";
import Image from "next/image";

const Agency = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Our <span className="text-[#FF5722]">Agency</span>
            </h2>
            <p className="text-gray-600">
              We believe in the power of data. Our analytics-driven approach
              allows us to make informed decisions and optimize your marketing
              efforts for maximum ROI. Let's turn your data into actionable
              insights.Tailored Solutions for Your Business
            </p>
            <button
              variant="outline"
              className="border-[#FF5722] text-[#FF5722]"
            >
              Read more
            </button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Agency illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
