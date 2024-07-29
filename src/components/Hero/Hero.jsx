"use client";
import React from "react";
import HeroImg from "../../assets/anggi.png";
import Image from "next/image";
import Circle from "../../assets/red.png";
import Wall from "../../assets/wall.jpg";
import { motion } from "framer-motion";
import Countup from "react-countup";

const wallBg = {
  backgroundImage: `url(${Wall.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const slideUp = (delay) => {
  return {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  };
};

const Hero = () => {
  return (
    <section style={wallBg} className="bg-black  text-white">
      <div className="bg-gradient-to-b from-primary/50 to-black">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* Brand Info */}
          <div className="flex flex-col justify-center items-center md:text-left py-14 md:py-0">
            <div className="text-center md:text-left space-y-6">
              <motion.p
                variants={slideUp(0.3)}
                initial="initial"
                animate="animate"
                className="text-4xl"
              >
                Hello, I`m
              </motion.p>
              <motion.p
                variants={slideUp(0.5)}
                initial="initial"
                animate="animate"
                className="text-5xl lg:text-7xl font-satisfy text-outline"
              >
                Anggi Juhniawan
              </motion.p>
              <motion.p
                variants={slideUp(0.7)}
                initial="initial"
                animate="animate"
                className="text-sm leading-snug"
              >
                A software engineer based in Tapos, Depok who enjoys building
                things that live on the internet. I develop exceptional
                websites, web apps and mobile apps. Shortly after graduating
                from SMK Negeri 1 Depok, I joined the engineering team at
                Wartech where I work on a wide variety of interesting and
                meaningful projects on a daily basis.
              </motion.p>
              <motion.button
                variants={slideUp(0.9)}
                initial="initial"
                animate="animate"
                className="btn"
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=6289652104841&text=Halo%20Anggi%20Juhniawan,%20salam%20kenal"
                  );
                }}
              >
                Know More
              </motion.button>

              {/* Stats Section */}
              <motion.div
                variants={slideUp(1.1)}
                initial="initial"
                animate="animate"
                className="flex justify-around bg-gradient-to-b from-primary/50 to-black border-2 border-primary/80 rounded-xl hover:red-shadow hover:scale-105 duration-300 md:max-w-[400px] !mt-[25px] p-4"
              >
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <Countup
                      end={10}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScroll
                    />
                  </p>
                  <p className="text-sm">Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <Countup
                      end={10}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScroll
                    />
                  </p>
                  <p className="text-sm">Projects</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">
                    <Countup
                      end={10}
                      start={0}
                      suffix="+"
                      delay={1.4}
                      enableScroll
                    />
                  </p>
                  <p className="text-sm">Clients</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center md:justify-end items-center relative"
          >
            <div className="bg-black rounded-3xl overflow-hidden h-[500px] flex items-end relative group hover:red-shadow hover:scale-105 duration-700">
              <Image
                src={Circle}
                alt="Circle"
                className="absolute top-4 -left-0 -z-0 animate-spin-superslow group-hover:animate-pulse duration-300"
              />
              <Image
                src={HeroImg}
                alt="anggi"
                className="w-[400px] relative z-10 group-hover:grayscale group-hover:scale-90 duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
