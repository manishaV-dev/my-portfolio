import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDark }) => {
  return (
    <motion.div
      id="mywork"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mb-12 font-Ovo mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Welcome to my portfolio! Explore a collection of
        projects showcasing my expertise in front-end development
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <a href={project.link} target="_blank">
                <h2 className="font-semibold text-blue-800">{project.title}</h2>
                </a>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              {/* <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow[2px_2px_0_#000] group-hover:bg-rose-200 transition">
                <a href={project.link} target="_blank">
                  <Image src={assets.send_icon} alt="send" className="w-5" />
                </a>
              </div> */}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/manishaV-dev"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-2 px-8 mx-auto hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src={isDark ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
