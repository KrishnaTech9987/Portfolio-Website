import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-hero bg-[#0D0D0D] bg-cover bg-center min-h-screen flex items-center">
      <div className="container mx-auto text-center text-black">
        <h1 className="text-5xl font-bold mb-4">Welcome to Your Brand</h1>
        <p className="text-lg mb-6">
          We provide the best digital marketing solutions for your business.
        </p>
        <button className="bg-secondary px-6 py-3 rounded-lg text-white font-medium">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
