import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDark, setIsDark }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  // console.log(isScroll);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="bg-image" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="">
          <Image
            src={isDark ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:bg-transparent"
          } `}
        >
          <li>
            <a href="#top">Home</a>
          </li>

          <li>
            <a href="#aboutme">About me</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#mywork">My Work</a>
          </li>

          <li>
            <a href="#mycontact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark((prev) => !prev)}>
            <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt="toggle-icon"
              className="w-6"
            />
          </button>

          <a
            href="#mycontact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full dark:border-white/50"
          >
            Contact
            <Image
              src={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="contact"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDark ? assets.menu_white : assets.menu_black}
              alt="menu-icon"
              className="w-6"
            />
          </button>
        </div>

        {/* menu list for small device */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDark ? assets.close_white : assets.close_black}
              alt="close-icon"
              className="w-5 cursor-pointer"
            />
          </div>

          <li onClick={closeMenu}>
            <a href="#top" className="hover:text-rose-500 duration-500">Home</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#aboutme" className="hover:text-rose-500 duration-500">About me</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#services" className="hover:text-rose-500 duration-500">Services</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#mywork" className="hover:text-rose-500 duration-500">My Work</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#mycontact" className="hover:text-rose-500 duration-500">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
