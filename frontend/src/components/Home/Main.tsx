"use client"
import Image from "next/image";
import React from "react";
import homebg from "@/assets/homebg.svg";
const Main = () => {
  return (
    <div className="flex items-center dark:bg-slate-900 py-24 xs:py-10 sm:py-10">
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2  items-center justify-center">
        <section className="bg-white dark:bg-gray-900 ">
          <div className="py-4 px-4 mx-auto text-center lg:py-8">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
              Express Yourself Freely
            </h1>
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
              Start Crafting Your Blog
            </h1>
            <p className="mb-8 mt-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-4 lg:px-8 dark:text-gray-400 line-clamp-6">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className=" pb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
             <input type="text" className=" dark:text-white dark:bg-gray-700 dark:border-gray-800 border-[0.1rem] rounded-lg p-2 md:w-1/2  outline-none focus:border-2 focus:border-[#F1CE6D]" placeholder="Start typing to find relevant articles..." />
             <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#ff791f] hover:bg-[#df6a1d]" >Search</button>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#a9d214] hover:bg-[#88a61a] "
              >
                Exlopre
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <div>
            <Image src={homebg} alt="home" className="xs:max-w-none sm:max-w-none" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
