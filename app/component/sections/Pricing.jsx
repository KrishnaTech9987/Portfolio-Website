// import React from "react";

// const pricingPlans = [
//   {
//     name: "Standard",
//     badge: {
//       text: "Most Popular",
//       className: "bg-[#BBFF00] text-black",
//     },
//     description:
//       "One request at a time. For companies who need on-going design support.",
//     price: "2,995",
//     interval: "m",
//     subtext: "Pause or cancel anytime",
//     features: [
//       "1x active task at a time",
//       "Unlimited revisions",
//       "Dedicated project manager",
//       "Daily comms through Slack",
//       "Work with senior designers",
//       "2-3 days turn around time",
//       "Top tier design",
//     ],
//   },
//   {
//     name: "Growth",
//     badge: {
//       text: "Best value",
//       className: "bg-white text-black",
//     },
//     description:
//       "Double the requests. For companies with increasing design needs. Limited spots.",
//     price: "4,795",
//     interval: "m",
//     subtext: "Pause or cancel anytime",
//     features: [
//       "2x active task at a time",
//       "Unlimited revisions",
//       "Dedicated project manager",
//       "Daily comms through Slack",
//       "Work with senior designers",
//       "2-3 days turn around time",
//       "Top tier design",
//     ],
//   },
//   {
//     name: "Basic - Weekly",
//     description:
//       "Perfect if you want to try the subscription out or only have a few one-off tasks.",
//     price: "890",
//     interval: "m",
//     subtext: "Paid per weekly",
//     features: [
//       "Fixed Scope of work",
//       "2 rounds of revisions",
//       "Dedicated project manager",
//       "Daily comms through Slack",
//       "1x designer",
//       "2-5 days turn around time",
//       "Top tier design",
//     ],
//   },
// ];

// const Pricing = () => {
//   return (
//     <div className="min-h-screen bg-[#0D0D0D] py-12 px-4">
//       <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
//         {pricingPlans.map((plan, index) => (
//           <div key={index} className="relative bg-[#1A1A1A] rounded-2xl p-8">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-3xl font-bold text-white">{plan.name}</h2>
//               {plan.badge && (
//                 <span
//                   className={`${plan.badge.className} px-3 py-1 rounded-full text-sm font-medium`}
//                 >
//                   {plan.badge.text}
//                 </span>
//               )}
//             </div>
//             <p className="text-white mb-8">{plan.description}</p>
//             <div className="mb-4">
//               <span className="text-5xl font-bold text-[#BBFF00]">
//                 ${plan.price}
//               </span>
//               <span className="text-white">/{plan.interval}</span>
//             </div>
//             <p className="text-white mb-8">{plan.subtext}</p>
//             <ul className="space-y-4 mb-8">
//               {plan.features.map((feature, featureIndex) => (
//                 <li key={featureIndex} className="flex items-center text-white">
//                   <span className="text-[#BBFF00] mr-2">✓</span> {feature}
//                 </li>
//               ))}
//             </ul>
//             <button className="w-full border border-[#BBFF00] text-[#BBFF00] py-3 rounded-lg mb-4 hover:bg-[#BBFF00] hover:text-black transition-colors">
//               Book A Call
//             </button>
//             <button className="w-full bg-[#BBFF00] text-black py-3 rounded-lg hover:bg-[#a3e600] transition-colors">
//               Click to buy
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;

import React from "react";

const pricingCategories = [
  {
    platform: "Instagram",
    plans: [
      {
        type: "Followers",
        options: [
          { quantity: "1k", price: 499 },
          { quantity: "2k", price: 999 },
          { quantity: "5k", price: 2299 },
          { quantity: "10k", price: 3999 },
          { quantity: "1lac", price: 34999 },
        ],
      },
      {
        type: "Post Likes",
        options: [
          { quantity: "1k", price: 499 },
          { quantity: "2k", price: 899 },
          { quantity: "5k", price: 1499 },
          { quantity: "10k", price: 2499 },
          { quantity: "1lac", price: 19999 },
        ],
      },
      {
        type: "Reel Views",
        options: [
          { quantity: "10k", price: 399 },
          { quantity: "20k", price: 799 },
          { quantity: "1lac", price: 2999 },
          { quantity: "5lac", price: 4999 },
          { quantity: "5M", price: 19999 },
        ],
      },
      {
        type: "Reel Likes",
        options: [
          { quantity: "1k", price: 499 },
          { quantity: "2k", price: 899 },
          { quantity: "5k", price: 1499 },
          { quantity: "10k", price: 2499 },
          { quantity: "20k", price: 4999 },
        ],
      },
    ],
  },
  {
    platform: "YouTube",
    plans: [
      {
        type: "Subscribers",
        options: [
          { quantity: "100", price: 299 },
          { quantity: "200", price: 599 },
          { quantity: "500", price: 1499 },
          { quantity: "1k", price: 2999 },
          { quantity: "5k", price: 14999 },
        ],
      },
      {
        type: "Views",
        options: [
          { quantity: "5k+", price: 699 },
          { quantity: "10k+", price: 1399 },
          { quantity: "20k+", price: 2499 },
          { quantity: "50k+", price: 5499 },
          { quantity: "1lac+", price: 10499 },
          { quantity: "10lac+", price: 80999 },
        ],
      },
      {
        type: "Watchtime Hours",
        options: [
          { quantity: "1k", price: 2999 },
          { quantity: "2k", price: 5999 },
          { quantity: "3k", price: 8999 },
          { quantity: "4k", price: 11999 },
        ],
      },
    ],
  },
  {
    platform: "Facebook",
    plans: [
      {
        type: "Followers",
        options: [
          { quantity: "1k", price: 999 },
          { quantity: "5k", price: 3999 },
          { quantity: "10k", price: 7499 },
          { quantity: "50k", price: 29999 },
          { quantity: "1lac", price: 54999 },
        ],
      },
      {
        type: "Views",
        options: [
          { quantity: "5k+", price: 1199 },
          { quantity: "10k+", price: 2399 },
          { quantity: "50k+", price: 5999 },
          { quantity: "1lac+", price: 11999 },
          { quantity: "5lac+", price: 49999 },
        ],
      },
      {
        type: "Likes",
        options: [
          { quantity: "5k+", price: 499 },
          { quantity: "10k+", price: 899 },
          { quantity: "20k+", price: 1799 },
          { quantity: "50k+", price: 4499 },
          { quantity: "1lac+", price: 7999 },
        ],
      },
    ],
  },
];

const Pricing = () => {
  return (
    // <div className="min-h-screen bg-[#0D0D0D] py-12 px-4">
    //   <header className="text-center mb-12">
    //     <h1 className="text-5xl font-bold text-[#BBFF00] mb-4">
    //       Pricing Plans
    //     </h1>
    //     <p className="text-lg text-gray-400">
    //       Choose the plan that best fits your needs for Instagram, YouTube, and
    //       Facebook services.
    //     </p>
    //   </header>
    //   <div className="max-w-7xl mx-auto space-y-12">
    //     {pricingCategories.map((category, categoryIndex) => (
    //       <div key={categoryIndex}>
    //         <h2 className="text-4xl font-bold text-white mb-6">
    //           {category.platform}
    //         </h2>
    //         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    //           {category.plans.map((plan, planIndex) => (
    //             <div
    //               key={planIndex}
    //               className="relative bg-[#1A1A1A] rounded-2xl p-8 shadow-md"
    //             >
    //               <h3 className="text-2xl font-bold text-white mb-4">
    //                 {plan.type}
    //               </h3>
    //               <ul className="space-y-4">
    //                 {plan.options.map((option, optionIndex) => (
    //                   <li
    //                     key={optionIndex}
    //                     className="flex justify-between items-center text-white"
    //                   >
    //                     <span>{option.quantity}</span>
    //                     <span className="text-[#BBFF00] font-medium">
    //                       ₹{option.price}
    //                     </span>
    //                   </li>
    //                 ))}
    //               </ul>
    //               <button className="w-full border border-[#BBFF00] text-[#BBFF00] py-3 rounded-lg mt-8 hover:bg-[#BBFF00] hover:text-black transition-colors">
    //                 Book Now
    //               </button>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="min-h-screen bg-[#0D0D0D] py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#BBFF00] mb-4">
          Pricing Plans
        </h1>
        <p className="text-lg text-gray-400">
          Choose the plan that best fits your needs for Instagram, YouTube, and
          Facebook services.
        </p>
      </header>
      <div className="max-w-7xl mx-auto space-y-12">
        {pricingCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-4xl font-bold text-white mb-6">
              {category.platform}
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {category.plans.map((plan, planIndex) => (
                <div
                  key={planIndex}
                  className="relative bg-[#1A1A1A] rounded-2xl p-6 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {plan.type}
                  </h3>
                  <ul className="space-y-4">
                    {plan.options.map((option, optionIndex) => (
                      <li
                        key={optionIndex}
                        className="flex justify-between items-center text-white"
                      >
                        <span>{option.quantity}</span>
                        <span className="text-[#BBFF00] font-medium">
                          ₹{option.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border border-[#BBFF00] text-[#BBFF00] py-3 rounded-lg mt-6 hover:bg-[#BBFF00] hover:text-black transition-colors">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
