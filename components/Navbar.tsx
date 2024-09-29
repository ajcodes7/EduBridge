"use client";
import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full h-1/6 z-50 px-16 bg-white border-b border-black/40 flex-col justify-center items-center fixed inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="w-20 first-line:justify-center items-center flex">
          <div className=" justify-start items-center flex">
            <div className="w-20 h-20 justify-start">
              <Image
                src={logo}
                alt="logo "
                className="object-cover object-center"
              ></Image>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="justify-center items-center gap-8 flex">
          <div className="hidden justify-center items-center gap-8 md:flex pl-0">
            <div className="text-black text-base font-normal font-sans leading-normal">
              Explore
            </div>
            <div className="justify-center items-center gap-1 flex">
              <div className="text-black text-base font-normal font-sans leading-normal">
                About Us
              </div>
            </div>
            <div className="justify-center items-center gap-1 flex">
              <div className="text-black text-base font-normal font-sans leading-normal">
                Contact Us
              </div>
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex">
            <a
              href="/students"
              className="px-5 py-2 border rounded-lg justify-center items-center gap-2 flex hover:bg-primary group"
            >
              <div className="text-black text-base font-sans leading-normal font-bold group-hover:text-white">
                Sign Up
              </div>
            </a>
            <a
              href="#"
              className="px-5 py-2 bg-primary rounded-lg justify-center items-center gap-2 flex hover:opacity-80"
            >
              <div className="text-white text-base  font-sans leading-normal font-bold">
                Login
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
