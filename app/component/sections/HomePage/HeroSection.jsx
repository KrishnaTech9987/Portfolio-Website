import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Type from "../../ui/Type";
import {
  containerVariants,
  imageVariants,
  itemVariants,
} from "../../animations/animations";

const HeroSection = () => {
  return (
    <section className="pt-16 pb-8 px-4 md:pt-32 md:pb-16">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6 md:space-y-8">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-pockota"
              variants={itemVariants}
            >
              We create <span className="text-[#FF5722]">Solutions</span> for{" "}
              <span className="block ml-2">
                your <Type />
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-base md:text-lg"
              variants={itemVariants}
            >
              Our team keeps a keen eye on emerging trends and technologies to
              ensure your marketing campaigns remain cutting-edge.
            </motion.p>
            <motion.button
              className="bg-[#0d0c22] hover:bg-[#F4511E] text-white px-6 py-3 md:px-8 md:py-4 font-medium text-base rounded-full"
              whileHover={{ scale: 1.05, rotate: 5 }}
              variants={itemVariants}
            >
              Get Started
            </motion.button>
          </div>
          <motion.div
            className="relative h-[300px] md:h-[400px]"
            variants={imageVariants}
          >
            <Image
              src="/assets/images/HomePage/HeroSection/HeroAvatar.png"
              alt="Hero illustration"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              className="object-contain custom-bounce"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

// Optimised Code //

// import React, { useState, useEffect, useMemo } from "react";
// import Image from "next/image";
// import Type from "../ui/Type";

// const HeroSection = () => {

//   const phrases = useMemo(() => ["your growth", "your success"], []);

//   const [textIndex, setTextIndex] = useState(0);

//   const [displayText, setDisplayText] = useState(phrases[textIndex]);

//   useEffect(() => {

//     const typingInterval = setInterval(() => {

//       const currentPhrase = phrases[textIndex];

//       let charIndex = 0;

//       const type = () => {

//         if (charIndex < currentPhrase.length) {

//           setDisplayText((prev) => prev + currentPhrase.charAt(charIndex));

//           charIndex++;

//         } else {

//           clearInterval(typingInterval);

//           setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);

//           setDisplayText(""); // Reset display text for the next phrase

//         }

//       };

//       const typingInterval = setInterval(type, 150); // Typing speed
//       return () => clearInterval(typingInterval);

//     }, 3000); // Change text every 3 seconds

//     return () => clearInterval(typingInterval);
//   }, [textIndex, phrases]);

//   return (
//     <section className="pt-32 pb-16 px-4">

//       <div className="container mx-auto">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-8">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-pockota">
//               We create <span className="text-[#FF5722]">{displayText}</span>
//             </h1>

//             <p className="text-gray-600 text-lg">
//               Our team keeps a keen eye on emerging trends and technologies to
//               ensure your marketing campaigns remain cutting-edge.
//             </p>

//             <button className="bg-[#FF5722] hover:bg-[#F4511E] text-white px-8 py-6 text-lg rounded-full">
//               Get Started
//             </button>

//           </div>

//           <div className="relative h-[400px]">

//             <Image

//               src="/assets/images/HomePage/HeroSection/HeroAvatar.png"

//               alt="Hero illustration"

//               fill
//               className="object-contain"

//             />

//           </div>

//         </div>
//       </div>

//     </section>

//   );
// };

// export default HeroSection;
