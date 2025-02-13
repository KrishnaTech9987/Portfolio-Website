"use client";
import { PricingRightArrow } from "../../../public/assets/icons";
import { motion } from "framer-motion";

export default function OverlappingCard() {
  return (
    <div className="container mx-auto">
      <div className="relative z-50">
        <motion.div
          className="-mb-[150px] md:-mb-[200px] w-full bg-[#1E2008] text-white rounded-[35px] p-5 md:p-10 lg:p-10 h-[300px] md:h-[400px] flex-center-between-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-[32px] md:text-[48px] lg:text-[62px] text-center font-bold font-outfit leading-[40px] md:leading-[50px] lg:leading-[65px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Become part of the <br /> design revolution
          </motion.h2>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Jump on a membership and start <br /> requesting designs right away!
          </motion.p>
          <motion.button
            className="rounded-[8px] bg-[#B9FD50] text-[#111204] py-3 px-6 md:py-5 md:px-10 font-outfit font-medium text-base flex-center-between-row space-x-2"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label="See Pricing"
          >
            <p>See Pricing</p>
            <PricingRightArrow />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
