"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdLightMode, MdOutlineMenu, MdClose } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import DropDown from "./DropDown";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [theme, setTheme] = useState("light");
  const switchToTheme = () => {
    if (theme == "light") {
      document.body.classList.remove("light");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark");
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <div className=" bg-gray-800 text-white  dark:bg-slate-900">
      <div className="xs:block sm:block z-30 md:flex justify-between py-6 md:px-16 xs:px-4 sm:px-8 px-24">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              {" "}
              <h1 className="lg:text-5xl sm:text-4xl xs:text-3xl font-extrabold dark:text-white">
                Bolo India
              </h1>{" "}
            </Link>
          </div>
          <div className="md:invisible visible flex items-center gap-2">
            <div
              onMouseLeave={() => setIsOpen(false)}
              onMouseOver={() => setIsOpen(true)}
            >
              <div className="relative">
                <p className=" flex items-center  cursor-pointer p-3 hover:text-[#a9d214]">
                  <span>
                    {/* <Image width={"5"} height={"5"} src={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"} alt="profile" /> */}
                    <AiOutlineUser />
                  </span>
                  <BiChevronDown
                    className={`transition ease-in-out delay-150  origin-center ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </p>
                {isOpen && (
                  <div
                    className={`absolute opacity-0 ${
                      isOpen ? " opacity-100 transition-opacity delay-150" : ""
                    } right-0 text-md p-4 px-5 bg-gray-800 rounded-md w-48 shadow-inner shadow-gray-600 `}
                  >
                    <ul className=" flex flex-col gap-2 ">
                      <li className="rounded-md p-2 hover:bg-gray-700 cursor-pointer hover:text-[#a9d214]">
                        Profile
                      </li>
                      <li className="rounded-md p-2 hover:bg-gray-700 cursor-pointer hover:text-[#a9d214]">
                        My Stories
                      </li>
                      <li className="rounded-md p-2 hover:bg-gray-700 cursor-pointer hover:text-[#a9d214]">
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {isMenu ? (
              <div
                onClick={() => {
                  setIsMenu(!isMenu);
                }}
              >
                <MdClose className="text-2xl" />
              </div>
            ) : (
              <div
                onClick={() => {
                  setIsMenu(!isMenu);
                }}
              >
                <MdOutlineMenu className="text-2xl" />
              </div>
            )}
          </div>
        </div>
        <div className=" invisible md:visible">
          <div className="hidden md:flex items-center gap-7 relative">
            <ul className="flex gap-7  items-center text-md dark:text-white">
              <Link href={"/"}>
                <li className="cursor-pointer p-3 hover:text-[#a9d214]">
                  Home
                </li>
              </Link>
              <Link href={"/blogs"}>
                <li className="cursor-pointer p-3 hover:text-[#a9d214]">
                  {" "}
                  Blogs
                </li>
              </Link>
              <DropDown />

              <li
                onMouseLeave={() => setIsOpen(false)}
                onMouseOver={() => setIsOpen(true)}
              >
                <div className="relative">
                  <p className=" flex items-center cursor-pointer p-3 hover:text-[#a9d214]">
                    <span>
                      {/* <Image width={"5"} height={"5"} src={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"} alt="profile" /> */}
                      <AiOutlineUser />
                    </span>
                    <BiChevronDown
                      className={`transition ease-in-out delay-150  origin-center ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </p>
                  {isOpen && (
                    <div
                      className={`absolute opacity-0 ${
                        isOpen
                          ? " opacity-100 transition-opacity delay-150"
                          : ""
                      } right-0 text-md p-4 px-5 bg-gray-800   rounded-md w-48`}
                    >
                      <ul className=" flex flex-col gap-2 text-center">
                        <li className="rounded-md p-2 hover:bg-gray-700  cursor-pointer hover:text-[#a9d214] ">
                          Profile
                        </li>
                        <li className="rounded-md p-2 hover:bg-gray-700  cursor-pointer hover:text-[#a9d214] ">
                          My Stories
                        </li>
                        <li className="rounded-md p-2 hover:bg-gray-700  cursor-pointer hover:text-[#a9d214] ">
                          Logout
                        </li>
                        <li className="flex items-center gap-2">
                          <Link
                            href={"/account/login"}
                            className="hover:underline hover:text-[#a9d214]"
                          >
                            Login
                          </Link>
                        </li>
                        <li className="flex items-center gap-2">
                          <Link
                            href={"/account/signup"}
                            className="hover:underline hover:text-[#a9d214]"
                          >
                            Signup
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
            <div className="cursor-pointer" onClick={switchToTheme}>
              <div className="relative flex items-center justify-center">
                <div className="blur p-3 bg-[#C1D1D9] dark:bg-[#EDA565] drop-shadow-2xl rounded-full"></div>
                <MdLightMode className="absolute text-lg text-[#232E3C] dark:text-[#EA6650] " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for small devices */}
      {isMenu && (
        <div
          className={`absolute bg-gray-800 transition delay-1000 duration-1000 ease w-full ${
            isMenu ? "top-auto" : "-top-96"
          }`}
        >
          <ul className="flex py-10 md:hidden gap-3 flex-col text-md dark:text-white">
            <li className=" mx-2 rounded-md bg-gray-700 cursor-pointer p-3 hover:text-[#a9d214]">
              Home
            </li>
            <li className=" mx-2 rounded-md bg-gray-700 cursor-pointer p-3 hover:text-[#a9d214]">
              Blogs
            </li>
            <DropDown />
            <li className=" mx-2 rounded-md bg-gray-700 p-3">
              <Link href={"#"} className="hover:underline hover:text-[#a9d214]">
                Login
              </Link>
            </li>
            <li className=" mx-2 rounded-md bg-gray-700 p-3">
              <Link href={"#"} className="hover:underline hover:text-[#a9d214]">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
