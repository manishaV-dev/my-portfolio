import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
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
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="bg-image" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a href="">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
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
          <button>
            <Image src={assets.moon_icon} alt="toggle-icon" className="w-6" />
          </button>

          <a
            href="#mycontact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} className="w-3" alt="contact" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu-icon" className="w-6" />
          </button>
        </div>

        {/* menu list for small device */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close-icon"
              className="w-5 cursor-pointer"
            />
          </div>

          <li onClick={closeMenu}>
            <a href="#top">Home</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#aboutme">About me</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#services">Services</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#mywork">My Work</a>
          </li>

          <li onClick={closeMenu}>
            <a href="#mycontact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
