"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { steps } from "../../data/sharedData";
import { itemVariants } from "../animations/animations";

const Process = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Memoize steps to prevent unnecessary re-renders
  const renderedSteps = React.useMemo(() => {
    return Array.isArray(steps) && steps.length > 0 ? (
      steps.map((step) => (
        <motion.div
          key={step.number}
          className="flex items-start space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#FF5722] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
            {step.number}
          </div>
          <div>
            <h3 className="font-bold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </motion.div>
      ))
    ) : (
      <p className="text-gray-600">No steps available.</p>
    );
  }, [steps, isVisible]);

  return (
    <section ref={ref} className="py-8 md:py-16 px-4 bg-[#edede9]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="relative h-[300px] md:h-[400px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/images/HomePage/Process/ProcessBg.png"
              alt="Illustration depicting the process"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              className="object-contain"
              loading="lazy"
            />
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-lexend">
              Simple <span className="text-[#FF5722]">Solutions!</span>
            </h2>
            <p className="text-gray-600">
              We understand that no two businesses are alike. That's why we take
              the time to understand.
            </p>

            <div className="space-y-4 md:space-y-6">{renderedSteps}</div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <motion.button
                className="bg-[#0d0c22] hover:bg-[#7fbeeb] hover:text-black text-white px-6 py-3 md:px-8 md:py-4 font-medium text-base rounded-full"
                whileHover={{ scale: 1.05, rotate: -5 }}
                variants={itemVariants}
                aria-label="Get Started"
              >
                Get Started
              </motion.button>
              <motion.button
                variant="outline"
                className="border-[#FF5722] rounded-full p-4 inline-flex animate-shimmer items-center justify-center border bg-[linear-gradient(110deg,#FF5722,45%,#FF8A3D,55%,#FF5722)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:ring-offset-2 focus:ring-offset-slate-50 md:px-8 md:py-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Read more"
              >
                Read more
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Process;
