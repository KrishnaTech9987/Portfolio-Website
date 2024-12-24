import React from "react";

export const GradientButton = ({ text, width, height, className }) => {
  return (
    <button
      className={`flex items-center justify-center uppercase text-white bg-gradient-to-r from-[#981fc9] to-[#4522b3] rounded-full text-[12px] font-extrabold hover:shadow-[0_18px_40px_-12px_rgba(107,49,231,.35)] ${className}`}
      style={{ width, height }}
    >
      {text}
    </button>
  );
};
