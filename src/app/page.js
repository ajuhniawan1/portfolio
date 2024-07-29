import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Banner from "@/components/Banner/banner";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <div className="pt-40">
        <Services />
      </div>
      <Projects />
      <ContactForm />
    </main>
  );
};

export default page;
