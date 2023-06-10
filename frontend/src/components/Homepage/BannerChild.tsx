import React from 'react'
import {BsCalendarRange} from 'react-icons/bs'
import { blogResType } from '../../utills/customType'
import date from 'date-and-time'
import {motion} from "framer-motion"

const BannerChild = ({title,image,createdAt,category,num,color}:blogResType,items:Number) => {
  return (
    <div
    className="flex gap-3 dark:bg-g-900 cursor-pointer">
    <div className="relative">
      <div >
        <motion.img
       
       initial={{scale:0}}
       animate={{scale:1}}
       whileHover={{scale:1.05}}
       transition={{type:"spring"}}
          src={`${image}`}
          alt={`${title}`}
          className='rounded-xl object-cover h-28 w-28 min-h-15 aspect-square'
        />
      </div>
      <div className="absolute -top-1 -left-1" ><span className={`px-1 py-0  border-4 border-white outline-none rounded-full bg-g-800 text-white`}>{num?.toString()}</span></div>
    </div>
    <div className="">
        <span className={`p-1 px-2 inline  ${color} text-sm text-white`}>{category}</span>
        <h1 className=" font-bold dark:text-white uppercase text-lg mt-1 break-words">{title}...</h1>
       <span className="flex mt-1 items-center gap-2 text-sm text-gray-400"> <BsCalendarRange/> <span>{date.format(new Date(createdAt.toString()),"ddd, DD MMM YYYY")}</span></span>
    </div>
  </div>
  )
}

export default BannerChild