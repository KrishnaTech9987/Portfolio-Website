import React from "react";

export const GradientButton = ({ text, width, height, className }) => {
  return (
    <button
      className={`flex items-center justify-center uppercase text-white bg-gradient-to-r from-[#5d5d3c] to-[#3f3f42] rounded-full text-base font-medium hover:shadow-[0_18px_40px_-12px_rgba(107,49,231,.35)] ${className}`}
      style={{ width, height }}
    >
      {text}
    </button>
  );
};
