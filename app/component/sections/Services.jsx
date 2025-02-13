"use client";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { services } from "../../data/sharedData";

const Services = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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

  return (
    <section ref={ref} className="py-8 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-macondo">
            We Provide The Best <span className="text-[#FF5722]">Services</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Let us handle the full spectrum of your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map(({ icon, title, description, color, id }, index) => (
            <div
              key={id || index}
              className={`p-4 md:p-6 rounded-xl card-shadow hover:shadow-2xl transition-shadow transform ${isVisible ? 'hover:scale-105 fade-in' : 'opacity-0'} bg-white`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${color} p-3 rounded-lg inline-block mb-4`}>
                {icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Services;
