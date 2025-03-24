"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "../../lib/utils"; // Ensure the correct import path

const ContactButton = ({ isMobile = false }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href="/pages/contact"
        className={cn(
          "bg-[#400406] hover:bg-[#d7be82] text-white hover:text-black font-medium rounded-full transition-all duration-300",
          isMobile
            ? "mt-8 w-full max-w-xs py-3 text-lg text-center block"
            : "hidden lg:block px-6 py-3 text-sm"
        )}
      >
        Contact Us
      </Link>
    </motion.div>
  );
};

export default ContactButton;
