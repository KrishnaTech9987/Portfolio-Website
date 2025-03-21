"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../../common/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agency = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate text content
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <h2 className="text-3xl font-bold">
              Our <span className="text-primary">Agency</span>
            </h2>
            <p className="text-muted-foreground">
              We believe in the power of data. Our analytics-driven approach
              allows us to make informed decisions and optimize your marketing
              efforts for maximum ROI. Let's turn your data into actionable
              insights and create tailored solutions for your business.
            </p>
            <Button
              variant="custom"
              size="lg"
              className="bg-[#0d0c22] hover:bg-[#7fbeeb] hover:text-black text-white rounded-full transition-colors duration-300"
            >
              Read More
            </Button>
          </div>
          <div
            ref={imageRef}
            className="relative aspect-[4/3] w-full h-full rounded-[20px] overflow-hidden"
          >
            <Image
              src="/assets/images/HomePage/Home/bg3.jpg"
              alt="Agency illustration showcasing our data-driven approach"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-[20px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
