"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GradientButton } from "../common/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav
    //   className="bg-white bg-opacity-30 backdrop-blur-md text-black shadow-navbar h-[100px] flex-center-center"
    //   role="navigation"
    //   aria-label="Main navigation"
    // >
    //   <div className="container mx-auto flex-center-between">
    //     <Link className="text-lg font-bold" href="/">
    //       <img
    //         src="/assets/images/Common/Navbar/logo.png"
    //         alt="Brand Logo"
    //         className="h-12 w-14"
    //       />
    //     </Link>
    //     <button
    //       className="md:hidden"
    //       onClick={() => setIsOpen(!isOpen)}
    //       aria-label="Toggle navigation"
    //     >
    //       {isOpen ? "Close" : "Menu"}
    //     </button>
    //     <ul className={`flex space-x-8 ${isOpen ? "block" : "hidden"} md:flex`}>
    //       <li>
    //         <Link className="text-black" href="/about">
    //           Services
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="text-black" href="/services">
    //           Packages
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="text-black" href="/contact">
    //           Who We Are
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="text-black" href="/Portfolio">
    //           Our Portfolio
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="text-black" href="/AboutUs">
    //           About Us
    //         </Link>
    //       </li>
    //     </ul>
    //     <GradientButton
    //       text="Contact Us"
    //       width="147px"
    //       height="47px"
    //       // className="px-[30] py-[15px]"
    //     />
    //   </div>
    // </nav>

    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link className="text-lg font-bold" href="/">
            <img
              src="/assets/images/Common/Navbar/Logo.png"
              alt="Brand Logo"
              className="h-12 w-14"
            />
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
          <nav
            className={`md:flex items-center space-x-8 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link href="/" className="text-gray-700 hover:text-[#FF5722]">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#FF5722]">
              About us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-[#FF5722]"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#FF5722]"
            >
              Contact us
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#FF5722]">
              Blog
            </Link>
          </nav>
          <GradientButton
            text="Contact Us"
            width="147px"
            height="47px"
            className="px-[30] py-[15px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
