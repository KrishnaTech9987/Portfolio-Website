import React from "react";
import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Contact us",
    description: "Contact us to boost your brand visibility",
  },
  {
    number: 2,
    title: "Consult",
    description: "Always available to answer your questions",
  },
  {
    number: 3,
    title: "Place order",
    description: "Place your order today to proceed",
  },
  {
    number: 4,
    title: "Payment",
    description: "We accept payments in all types of banking",
  },
];

const Process = () => {
  return (
    <section className="py-16 px-4 bg-[#FFF5F2]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/assets/images/HomePage/Home/bg2.png"
              alt="Process illustration"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">
              Simple <span className="text-[#FF5722]">Solutions!</span>
            </h2>
            <p className="text-gray-600">
              We understand that no two businesses are alike. That's why we take
              the time to understand.
            </p>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start space-x-4">
                  <div className="bg-[#FF5722] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              <button className="bg-[#FF5722] hover:bg-[#F4511E] text-white rounded-full p-4">
                Get Started
              </button>
              <button
                variant="outline"
                className="border-[#FF5722] text-[#FF5722] rounded-full p-4"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
