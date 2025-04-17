import { infoList, skillSets, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDark }) => {
  return (
    <motion.div
      id="aboutme"
      className="w-full px-8 py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex items-center justify-center w-full my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div>
          <p className="mb-10 max-w-2xl font-Ovo text-center px-4">
            As a frontend developer with over 3 years of experience, I am
            passionate about crafting beautiful and responsive user interfaces
            that delight users. My expertise lies in developing web applications
            using modern frontend technologies such as React, Next.js. I have a
            strong understanding of web development principles such as HTML,
            CSS, and JavaScript, and I'm always keen to learn new skills and
            technologies.
          </p>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl px-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-lightHover hover:-translate-y-1  duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={isDark ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>



          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5 mt-6 px-4"
          >
            {skillSets.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>



          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white px-4"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5 px-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
