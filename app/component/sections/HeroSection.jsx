import React from "react";
import Image from "next/image";
import Type from "../ui/Type";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-pockota">
              We create <span className="text-[#FF5722]">solutions</span> for
              your{" "}
              <span className="block ml-2">
                <Type />
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Our team keeps a keen eye on emerging trends and technologies to
              ensure your marketing campaigns remain cutting-edge.
            </p>
            <button className="bg-[#FF5722] hover:bg-[#F4511E] text-white px-8 py-6 text-lg rounded-full">
              Get Started
            </button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/assets/images/HomePage/HeroSection/HeroAvatar.png"
              alt="Hero illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const HeroSection = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const phrases = ["your growth", "your success"];
//   const [displayText, setDisplayText] = useState(phrases[textIndex]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//     }, 3000); // Change text every 3 seconds

//     return () => clearInterval(interval);
//   }, [phrases.length]);

//   useEffect(() => {
//     const currentPhrase = phrases[textIndex];
//     let charIndex = 0;

//     const type = () => {
//       if (charIndex < currentPhrase.length) {
//         setDisplayText((prev) => prev + currentPhrase.charAt(charIndex));
//         charIndex++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     };

//     const typingInterval = setInterval(type, 150); // Typing speed

//     return () => clearInterval(typingInterval);
//   }, [textIndex]);

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
