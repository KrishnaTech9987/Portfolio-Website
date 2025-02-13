import { Search, BarChart2, Zap, MoreHorizontal } from "lucide-react";
import { ServiceMenu } from "../../public/assets/icons";

export const services = [
  {
    icon: <Search className="h-8 w-8 text-yellow-500" />,
    title: "Seo/Sem",
    description:
      "Optimize your online presence and reach your target audience effectively.",
    color: "bg-yellow-100",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-green-500" />,
    title: "Marketing",
    description: "Strategic marketing solutions to grow your business.",
    color: "bg-green-100",
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: "Viral Campaign",
    description: "Create engaging campaigns that spread like wildfire.",
    color: "bg-purple-100",
  },
  {
    icon: <ServiceMenu className="h-8 w-8 " />,
    title: "Others",
    description: "Customized solutions for your unique business needs.",
    color: "bg-white",
  },
];

export const steps = [
  {
    number: 1,
    title: "Contact us",
    description: "Contact us to boost your brand visibility",
  },
  {
    number: 2,
    title: "Consult",
    description: "Always available to answer your questions",
  },
  {
    number: 3,
    title: "Place order",
    description: "Place your order today to proceed",
  },
  {
    number: 4,
    title: "Payment",
    description: "We accept payments in all types of banking",
  },
];

// You can add more arrays or data structures here as needed


export const MarketingServices = [
  {
    name: "Search Engine Optimization",
  },
  {
    name: "Pay-Per-Click Advertising",
  },
  {
    name: "Social Media Marketing",
  },
  {
    name: "Content Marketing",
  },
  {
    name: "Email Marketing",
  },
  {
    name: "Influencer Marketing",
  },
  {
    name: "Affiliate Marketing",
  },
  {
    name: "Conversion Rate Optimization",
  },
];