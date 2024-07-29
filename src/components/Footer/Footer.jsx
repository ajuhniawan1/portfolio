"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-t from-primary/50 to-primary/20 text-white py-12 border-2 border-primary rounded-2xl px-4 hover:red-shadow flex flex-col lg:flex-row gap-8 items-center justify-around duration-300"
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Anggi Juhniawan</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
          <div className="flex items-center text-4xl gap-3 lg:gap-10 hover:cursor-pointer">
            <div>
              <a href="https://github.com/anggi-juhniawan">
                <FaGithub />
              </a>
            </div>
            <div>
              <a href="https://youtube.com/@anggi_juhniawan">
                <FaYoutube />
              </a>
            </div>
            <div>
              <a href="https://instagram.com/anggi_juhniawan">
                <FaInstagram />
              </a>
            </div>
            <div>
              <a href="https://linkedin.com/in/anggi-juhniawan">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
