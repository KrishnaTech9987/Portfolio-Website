"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks, contactDetails, navLinks } from "../../data/socialLinks";

const Footer = () => {
  return (
    <footer className="bg-footer text-white pt-[180px] md:pt-[250px] ">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex-start-between-col space-y-3">
            <Link
              href="/"
              className="w-full flex-center-center md:flex-start-between-col"
            >
              <Image
                src="/assets/images/HomePage/Footer/NameLogo.png"
                width={100}
                height={45}
                alt="Krishna Media Logo"
                sizes="(max-width: 768px) 100px, (min-width: 769px) 50px"
              />
            </Link>
            <p className="text-base md:text-sm leading-6 w-full md:w-[311px] text-start">
              Krishna Media - The leading digital agency based in India, working
              with top-tier clients, from start-ups to enterprises.
            </p>
          </div>

          <div className="text-white flex-start-between-col space-y-5 mt-7 md:mt-0">
            {contactDetails.map(({ icon, text }, index) => (
              <div key={index} className="flex-center-center space-x-5">
                <span>{icon}</span>
                <span className="text-base">{text}</span>
              </div>
            ))}

            <div className="space-x-7 flex-center-center">
              {socialLinks.map(({ icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className="hover:opacity-80"
                  style={{ color }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="bg-[#404040] mt-4 md:mt-14 mb-5 w-full h-[1px]" />

        <div className="flex flex-col md:flex-row md:justify-between pb-7">
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <a key={index} href="#" className="hover:opacity-80">
                {link}
              </a>
            ))}
          </div>

          <div className="mt-4 md:mt-0 text-center md:text-right">
            &copy; {new Date().getFullYear()} Krishna Digital Media. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
