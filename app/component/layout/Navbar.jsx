"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GradientButton } from "../common/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-white bg-opacity-30 backdrop-blur-md text-black shadow-navbar"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link className="text-lg font-bold" href="/">
          <img src="/assets/images/Common/Navbar/logo.png" alt="Brand Logo" className="h-8" />
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <ul className={`flex space-x-4 ${isOpen ? "block" : "hidden"} md:flex`}>
          <li>
            <Link className="text-black" href="/about">
              Services
            </Link>
          </li>
          <li>
            <Link className="text-black" href="/services">
              Packages
            </Link>
          </li>
          <li>
            <Link className="text-black" href="/contact">
              Who We Are
            </Link>
          </li>
          <li>
            <Link className="text-black" href="/Portfolio">
              Our Portfolio
            </Link>
          </li>
          <li>
            <Link className="text-black" href="/AboutUs">
              About Us
            </Link>
          </li>
        </ul>
        <GradientButton text="Sign Up" width="72px" height="35px" />
      </div>
    </nav>
  );
};

export default Navbar;
