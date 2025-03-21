"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ContactUsSocialLinks } from "../../data/socialLinks";
import { motion } from "framer-motion";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
  };

  const renderInput = (
    type,
    placeholder,
    name,
    validation,
    errors,
    className
  ) => (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className={`w-full bg-formInputBg h-[72px] p-3 border placeholder:text-[#7f7f7f] placeholder:text-sm ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-xl focus:ring focus:ring-lime-200 ${className}`}
        aria-label={placeholder}
      />
      {errors[name] && (
        <span className="text-sm text-red-500">
          {errors[name].message || `${placeholder} is required`}
        </span>
      )}
    </div>
  );

  return (
    <section className="py-16 container mx-auto flex flex-col md:flex-col md:justify-between">
      <div className="flex-center-between-row w-[140px]">
        <hr className="bg-[#98e209] w-[32px] h-[1px]" />
        <h3 className="text-h3 text-lg font-medium">Contact Us</h3>
      </div>
      <div className="flex-center-between-row w-full">
        <h2 className="text-[#131313] text-3xl font-semibold leading-[37px] mt-4">
          Join Us in Creating <br />
          Something Great
        </h2>
        <div className="relative">
          {/* Green Circle */}
          <div className="hidden md:block w-28 h-28 bg-yellow rounded-full absolute -left-12"></div>
          <div className="hidden md:flex w-28 h-28 bg-black rounded-full items-center justify-center animate-spinSlow relative border-4 border-white z-10">
            <span className="text-white font-bold text-lg">HIRE US</span>
          </div>
        </div>
      </div>

      <div className="md:flex-start-between-row md: mt-8">
        <motion.div
          className="w-full md:w-1/2 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Form Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 h-full"
          >
            {renderInput(
              "text",
              "First Name *",
              "firstName",
              { required: true },
              errors
            )}
            {renderInput(
              "text",
              "Last Name *",
              "lastName",
              { required: true },
              errors
            )}
            {renderInput(
              "email",
              "Email *",
              "email",
              {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              },
              errors
            )}
            {renderInput(
              "text",
              "Phone Number *",
              "phoneNumber",
              {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
              },
              errors
            )}
            <div className="md:col-span-2">
              <textarea
                placeholder="Message *"
                {...register("message", { required: true })}
                className={`w-full bg-formInputBg h-[290px] p-3 border placeholder:text-[#7f7f7f] placeholder:text-sm resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-xl focus:ring focus:ring-lime-200`}
                rows="5"
                aria-label="Message *"
              ></textarea>
              {errors.message && (
                <span className="text-sm text-red-500">
                  Message is required
                </span>
              )}
            </div>
            <div className="md:col-span-2 flex justify-start items-center">
              <button
                type="submit"
                className="bg-[#98e209] text-[#2d3421] py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-lime-600"
              >
                <span className="text-sm font-semibold">Send Message</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="bg-[#98e209] w-full md:w-[480px] h-auto card-shadow p-[30px] rounded-[20px] flex flex-col mt-8 md:mt-0 md:h-[555px] md:flex-start-between-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-h3 font-semibold text-[24px]">Address</h3>
            <p className="text-sm font-medium text-[#5b6e38] mt-1">
              C9-502 Rashmi star city naigoan east, Mumbai, Maharashtra 401208
            </p>
          </div>
          <div>
            <h3 className="text-h3 font-semibold text-[24px]">Contact</h3>
            <p className="text-sm font-medium text-[#5b6e38] mt-1">
              Phone: +91 93263 20295
            </p>
            <p className="text-sm font-medium text-[#5b6e38]">
              Email: Contact@krishnadigitalgrowth.in
            </p>
          </div>
          <div>
            <h3 className="text-h3 font-semibold text-[24px]">Open Time</h3>
            <p className="text-sm font-medium text-[#5b6e38] mt-1">
              Monday - Friday : 10:00 - 20:00
            </p>
          </div>
          <div>
            <h3 className="text-h3 font-semibold text-[24px]">
              Stay Connected
            </h3>
            <div className="flex space-x-4 mt-1">
              {ContactUsSocialLinks.map((link, index) => (
                <a
                  key={index}
                  className="w-[62px] h-[62px] bg-[#010101] rounded-full flex-center-center"
                  href={link.href}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
