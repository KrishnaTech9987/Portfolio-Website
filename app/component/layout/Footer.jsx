"use client"
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
