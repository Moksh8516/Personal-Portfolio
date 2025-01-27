import React from "react";
import { HERO } from "../constants/index";
import carlImg from "../assets/Moksh.png";
import { motion } from "framer-motion";
import { IoMdCloudDownload } from "react-icons/io";
function Hero() {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h2 className="my-6 p-2 text-4xl font-bold md:text-5xl lg:text[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-3xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl text-justify">{HERO.description}</p>
        <div className="flex items-center">
          <a
            href="https://drive.google.com/file/d/11WY51r8sfzSMW_b1IVHoOtN6l2sGbfCT/view?usp=drive_link"
            className="px-10 py-4 rounded-full flex items-center gap-2 text-gray-900 bg-white hover:bg-gray-300 mb-4"
          >
            Download CV <IoMdCloudDownload />{" "}
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={carlImg}
            alt="Moksh"
            width={550}
            height={550}
            className="rounded-3xl"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
