import React from "react";
import { Search, BarChart2, Zap, MoreHorizontal } from "lucide-react";

const services = [
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
    icon: <MoreHorizontal className="h-8 w-8 text-red-500" />,
    title: "Others",
    description: "Customized solutions for your unique business needs.",
    color: "bg-red-100",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            We Provide The Best <span className="text-[#FF5722]">Services</span>
          </h2>
          <p className="text-gray-600">
            Let us handle the full spectrum of your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white"
            >
              <div
                className={`${service.color} p-3 rounded-lg inline-block mb-4`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
