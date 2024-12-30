import React from "react";

const pricingPlans = [
  {
    name: "Standard",
    badge: {
      text: "Most Popular",
      className: "bg-[#BBFF00] text-black",
    },
    description:
      "One request at a time. For companies who need on-going design support.",
    price: "2,995",
    interval: "m",
    subtext: "Pause or cancel anytime",
    features: [
      "1x active task at a time",
      "Unlimited revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "Work with senior designers",
      "2-3 days turn around time",
      "Top tier design",
    ],
  },
  {
    name: "Growth",
    badge: {
      text: "Best value",
      className: "bg-white text-black",
    },
    description:
      "Double the requests. For companies with increasing design needs. Limited spots.",
    price: "4,795",
    interval: "m",
    subtext: "Pause or cancel anytime",
    features: [
      "2x active task at a time",
      "Unlimited revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "Work with senior designers",
      "2-3 days turn around time",
      "Top tier design",
    ],
  },
  {
    name: "Basic - Weekly",
    description:
      "Perfect if you want to try the subscription out or only have a few one-off tasks.",
    price: "890",
    interval: "m",
    subtext: "Paid per weekly",
    features: [
      "Fixed Scope of work",
      "2 rounds of revisions",
      "Dedicated project manager",
      "Daily comms through Slack",
      "1x designer",
      "2-5 days turn around time",
      "Top tier design",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] py-12 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="relative bg-[#1A1A1A] rounded-2xl p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold text-white">{plan.name}</h2>
              {plan.badge && (
                <span
                  className={`${plan.badge.className} px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {plan.badge.text}
                </span>
              )}
            </div>
            <p className="text-white mb-8">{plan.description}</p>
            <div className="mb-4">
              <span className="text-5xl font-bold text-[#BBFF00]">
                ${plan.price}
              </span>
              <span className="text-white">/{plan.interval}</span>
            </div>
            <p className="text-white mb-8">{plan.subtext}</p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-white">
                  <span className="text-[#BBFF00] mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full border border-[#BBFF00] text-[#BBFF00] py-3 rounded-lg mb-4 hover:bg-[#BBFF00] hover:text-black transition-colors">
              Book A Call
            </button>
            <button className="w-full bg-[#BBFF00] text-black py-3 rounded-lg hover:bg-[#a3e600] transition-colors">
              Click to buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
