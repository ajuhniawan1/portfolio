"use client";
import React from "react";
import { motion } from "framer-motion";
import properin from "@/assets/projects/properin.png";
import masaru from "@/assets/projects/masaru.png";
import yamaha from "@/assets/projects/yamaha.jpg";
import versinema from "@/assets/projects/versinema.jpg";
import porto from "@/assets/projects/porto.png";
import Image from "next/image";
import { FaLaravel, FaWordpress, FaBootstrap, FaReact } from "react-icons/fa";
import { SiJquery, SiOctobercms } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const ProjectData = [
  {
    id: 1,
    title: "Properin",
    link: "https://properin.com/",
    desc: "Properin.com is an online platform for investing in property that connects investors with those who need project financing or property renovation for resale (flipping) through an easy profit-sharing process for safe funds.",
    img: properin,
    icons: {
      laravel: <FaLaravel className="text-xl" />,
      react: <FaReact className="text-xl" />,
      boots: <FaBootstrap className="text-xl" />,
    },
    delay: 0.8,
  },
  {
    id: 2,
    title: "Masaru",
    link: "https://masaru.co.id/",
    desc: "A company profile website for PT Masaru Fortuna Komunika.",
    img: masaru,
    delay: 0.8,
    icons: {
      laravel: <FaWordpress className="text-xl" />,
      react: <SiJquery className="text-xl" />,
    },
  },
  {
    id: 3,
    title: "Yamaha Motor Parts",
    link: "https://yamaha-motor-parts.co.id/",
    desc: "A company profile website for PT Yamaha Motor Parts Manufacturing Indonesia.",
    img: yamaha,
    delay: 0.8,
    icons: {
      laravel: <FaLaravel className="text-xl" />,
      react: <SiOctobercms className="text-xl" />,
      boots: <FaBootstrap className="text-xl" />,
    },
  },
  {
    id: 4,
    title: "Versinema",
    link: "https://versinema.com/",
    desc: "Versinema allows content creators to publish exclusive video content and get supports from audiences.",
    img: versinema,
    icons: {
      laravel: <FaLaravel className="text-xl" />,
      react: <FaReact className="text-xl" />,
      boots: <FaBootstrap className="text-xl" />,
    },
    delay: 0.8,
  },
  {
    id: 5,
    title: "Portfolio Anggi Juhniawan",
    link: "",
    desc: "A personal portfolio showcasing various projects and Anggi Juhniawan's skills in web development and design.",
    img: porto,
    icons: {
      react: <RiNextjsFill className="text-xl" />,
      boots: <RiTailwindCssFill className="text-xl" />,
    },
    delay: 0.8,
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white">
      <div className="container py-20 xl:py-36 spacey-36">
        {/* Heading Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-20"
        >
          <p className="text-3xl lg:text-4xl mb-20 tracking-widest font-bold text-center uppercase">
            Project
          </p>
          <p className="text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold">
            {" "}
            Projects
          </p>
        </motion.div>
        {/* End Heading Title */}
        {/* Projects Card Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          {ProjectData.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-black hover:red-shadow border-2 border-primary/80 p-4 rounded-xl hover:scale-110 duration-300 group space-y-5"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  className="w-full"
                />
                <div className="space-y-2 p-4">
                  <h1>{project.title}</h1>
                  <p className="text-sm line-clamp-2">{project.desc}</p>
                </div>
                {/* Hidden Button Section */}
                <div className="hidden group-hover:flex justify-around items-center duration-300">
                  <a
                    href={project.link}
                    className="border-2 border-white px-4 py-2 rounded-lg"
                    target="_blank" // Membuka tautan di tab baru
                    rel="noopener noreferrer" // Keamanan tambahan
                  >
                    Live
                  </a>

                  <div className="flex gap-2">
                    {Object.values(project.icons || {}).map((icon, index) => (
                      <div
                        key={index}
                        className="text-primary/80 bg-white/70 rounded-full p-2"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                  {/* <button className="btn">View Code</button> */}
                </div>
                {/* End Hidden Button Section */}
              </div>
            );
          })}
        </motion.div>
        {/* End Projects Card Section */}
      </div>
    </section>
  );
};

export default Projects;
