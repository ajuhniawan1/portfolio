"use client";
import React from "react";
import Bannering from "@/assets/foto_profil.png";
import Grains from "@/assets/grains.png";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideUp } from "../Hero/Hero";

const bgGrains = {
  background: `url(${Grains.src})`,
  backgroundPosition: "center",
};

const banner = () => {
  return (
    <section className="bg-black text-white">
      <div className="container pb-10">
        <div
          style={bgGrains}
          className="bg-gray-950 rounded-3xl py-14 px-5 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 translate-y-36"
        >
          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-end justify-center"
          >
            <Image
              src={Bannering}
              alt="Banner Image"
              className="w-[300px] lg:w-[400px]"
            />
          </motion.div>

          {/* Banner Info */}
          <div className="flex flex-col justify-center">
            <div className="text-left space-y-7 lg:max-w-[400px]">
              <motion.h1
                variants={slideUp(0.3)}
                initial="initial"
                whileInView={"animate"}
                className="text-3xl lg:text-4xl font-bold"
              >
                I`m a<span className="text-purple-500"> Full Stack</span>{" "}
                Developer
              </motion.h1>
              <motion.p
                variants={slideUp(0.5)}
                initial="initial"
                whileInView={"animate"}
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
                  className="btn text-xs md:text-base bg-purple-500 px-4 py-3 rounded-full"
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
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1OmyH45UrWNm2TZqgQADm28plyIO1LpdL/view?usp=sharing"
                    );
                  }}
                >
                  <FiDownload className="text-xl" />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default banner;
