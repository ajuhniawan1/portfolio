"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import SendEmailPng from "@/assets/send-email.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rdb7ecn",
        "template_44ec1q8",
        e.target,
        "ShA9J1tbL2qbYiKVa"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to Sent Email");
        }
      );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section className="bg-black text-white py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col justify-center"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-primary/45 p-8 rounded-xl w-full max-w-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <div className="mb-4">
              <label className="block text-white/30">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-opacity-50 ring-primary bg-black text-white"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white/30">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-opacity-50 ring-primary bg-black text-white"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white/30">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-6 focus:outline-none focus:ring-opacity-50 ring-primary bg-black text-white"
                placeholder="Message"
              />
            </div>
            <button className="btn mt-4 px-8" type="submit">
              Send Email
            </button>
          </form>
        </motion.div>

        {/* End Form Section */}
        {/* Image Section */}
        <div className="hidden md:flex justify-center items-center">
          <Image
            src={SendEmailPng}
            alt="Send Email"
            className="w-[300px] animate-rocket"
          />
        </div>
        {/* End Image Section */}
      </div>
    </section>
  );
};

export default ContactForm;
