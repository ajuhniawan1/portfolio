"use client";
import React from "react";
import RedBg from "@/assets/redbg2.png";
import { CiPen } from "react-icons/ci";
import { IoFolderOpen } from "react-icons/io5";
import { RiComputerFill, RiTailwindCssFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { MdTabletAndroid } from "react-icons/md";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";
import {
  FaVuejs,
  FaJava,
  FaLaravel,
  FaBootstrap,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { SiCanva, SiFlutter, SiMysql, SiCodeigniter } from "react-icons/si";

const bgStyle = {
  backgroundImage: `url(${RedBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const ServicesData = [
  {
    id: 1,
    title: "Website Development",
    icon: <CiPen className="text-3xl" />,
    link: "/skills",
    desc: "Developing a modern and responsive website tailored to your business needs.",
    delay: 1.2,
    icons: {
      laravel: <FaLaravel className="text-xl" />,
      react: <FaReact className="text-xl" />,
      vue: <FaVuejs className="text-xl" />,
      boots: <FaBootstrap className="text-xl" />,
      tailwind: <RiTailwindCssFill className="text-xl" />,
    },
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: <IoFolderOpen className="text-3xl" />,
    link: "/skills",
    desc: "Intuitive user interface design and a delightful user experience.",
    delay: 1.6,
    icons: {
      figma: <FaFigma className="text-xl" />,
      canva: <SiCanva className="text-xl" />,
    },
  },
  {
    id: 3,
    title: "App Development",
    icon: <MdTabletAndroid className="text-3xl" />,
    link: "/skills",
    desc: "Developing responsive and high-performance mobile and web applications using modern frameworks like Flutter.",
    delay: 2,
    icons: {
      flutter: <SiFlutter className="text-xl" />,
      laravel: <FaLaravel className="text-xl" />,
      tailwind: <RiTailwindCssFill className="text-xl" />,
    },
  },
  {
    id: 4,
    title: "Desktop Development",
    icon: <RiComputerFill className="text-3xl" />,
    link: "/skills",
    desc: "Developed responsive and high-performance desktop applications using Java.",
    delay: 2,
    icons: {
      flutter: <FaJava className="text-xl" />,
      laravel: <SiMysql className="text-xl" />,
    },
  },
];

const reveal = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.4,
      },
    },
  };
};

const Services = () => {
  return (
    <section style={bgStyle}>
      <div className="bg-gradient-to-b from-black to-primary/5 text-white">
        <div className="container py-16 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services Info */}
            <div className="flex flex-col justify-center">
              <div className="text-left space-y-7 lg:max-w-[400px]">
                <motion.h1
                  variants={slideUp(0.3)}
                  initial="initial"
                  whileInView="animate"
                  className="text-3xl lg:text-4xl font-bold"
                >
                  Skill
                </motion.h1>
                <motion.p
                  variants={slideUp(0.5)}
                  initial="initial"
                  whileInView="animate"
                  className="text-white/70"
                >
                  I`m a full stack developer with a passion for creating
                  user-friendly and efficient web applications.
                </motion.p>
                <div className="flex item-center gap-4">
                  <motion.button
                    variants={slideUp(0.7)}
                    initial="initial"
                    whileInView="animate"
                    className="!bg-white text-primary font-bold px-5 text-xs md:text-base py-3 rounded-full hover:red-shadow"
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=6289652104841&text=Halo%20Anggi%20Juhniawan,%20salam%20kenal"
                      );
                    }}
                  >
                    Know More
                  </motion.button>
                  <motion.button
                    variants={slideUp(0.9)}
                    initial="initial"
                    whileInView="animate"
                    className="border border-white/50 text-xs md:text-base py-3 px-4 gap-2 flex rounded-full btn"
                  >
                    <FiDownload className="text-xl" />
                    Download Resume
                  </motion.button>
                </div>
              </div>
            </div>
            {/* End Services Info */}

            {/* Services Card */}
            <div className="flex item-center justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {ServicesData.map((service) => {
                  return (
                    <motion.div
                      key={service.id}
                      variants={reveal(service.delay)}
                      initial="initial"
                      whileInView="animate"
                      className="flex flex-col gap-4 justify-center items-start p-6 bg-white/20 rounded-2xl"
                    >
                      <div className="text-primary/80 bg-white/70 rounded-full p-2">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-sm text-white/70">{service.desc}</p>
                      <div className="flex gap-2">
                        {Object.values(service.icons || {}).map(
                          (icon, index) => (
                            <div
                              key={index}
                              className="text-primary/80 bg-white/70 rounded-full p-2"
                            >
                              {icon}
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            {/* End Services Card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
