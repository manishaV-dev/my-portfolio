import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDark }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDark ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDark ? assets.mail_icon_dark : assets.mail_icon}
            className="w-6"
            alt=""
          />
          manishavkapex1@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p> &copy; 2025 Manisha Varma. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://github.com/manishaV-dev"
              target="_blank"
              className="hover:text-rose-600 duration-500"
            >
              Github
            </a>
          </li>

          <li>
            <a
              href="inkedin.com/in/manisha-varma-2526ba217/"
              target="_blank"
              className="hover:text-rose-600 duration-500"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/coder_bunny/"
              target="_blank"
              className="hover:text-rose-600 duration-500"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
