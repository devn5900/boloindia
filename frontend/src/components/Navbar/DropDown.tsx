import {BiChevronDown} from "react-icons/bi"
import React, { useEffect, useState } from "react";

const DropDown = () => {
    const [isOpen,setIsOpen]= useState(false);

  return (
    <li onMouseLeave={()=>setIsOpen(false)} onMouseOver={()=>setIsOpen(true)} >
    <div className="relative">
      <p className="xs:mx-2 sm:mx-2 md:mx-0 rounded-md md:bg-transparent xs:bg-gray-700 sm:bg-gray-700 flex items-center cursor-pointer p-3 hover:text-[#a9d214]">
         <span>
         Catgories
          </span>
          <BiChevronDown className={`transition ease-in-out delay-150  origin-center ${isOpen?"rotate-180":""}`} /> 
          </p>
     {isOpen&& <div className={`md:absolute opacity-0 md:w-48 xs:w-full sm:w-full ${isOpen?" opacity-100 transition-opacity delay-150":""} text-md p-4 px-2 dark:bg-slate-700  bg-gray-800 rounded-md`}>
          <ul className=" flex flex-col gap-2 dark:text-white">
              <li className="rounded-md p-2 hover:bg-gray-700 cursor-pointer dark:hover:text-[#a9d214] hover:text-[#a9d214]">Science</li>
              <li className="rounded-md p-2 hover:bg-gray-700 cursor-pointer hover:text-[#a9d214] dark:hover:text-[#a9d214]">Fiction</li>
              <li className="rounded-md p-2 hover:bg-gray-700 cursor-pointer hover:text-[#a9d214] dark:hover:text-[#a9d214]">Fact</li>
              <li className="rounded-md p-2 hover:bg-gray-700 cursor-pointer hover:text-[#a9d214] dark:hover:text-[#a9d214]">Historic</li>
          </ul>
      </div>}
    </div>
  </li>
 
  )
}

export default DropDown