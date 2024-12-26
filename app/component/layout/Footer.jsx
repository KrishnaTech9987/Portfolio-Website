"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import image from "../../../public/assets/images/HomePage/Footer/"

const Footer = () => {
  return (
    <footer className="bg-footer h-[636px] text-white pt-[303px]">
      <div className="container mx-auto text-center">
        {/* <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p> */}
        <div className="w-full">
          <div>
            <Link href="/">
              <Image
                src="/assets/images/HomePage/Footer/NameLogo.png"
                width={100}
                height={45}
                alt="Picture of the author"
              />
            </Link>
            <p className="w-[311px] text-custom text-left">
              Kornix - the leading digital agency based in the UK, working with
              top-tier clients, from start-ups to enterprises.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
