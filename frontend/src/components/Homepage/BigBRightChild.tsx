import React from 'react'
import { blogResType } from '../../utills/customType'
import {motion} from 'framer-motion'
import { BsCalendarRange } from 'react-icons/bs'
import date from 'date-and-time'
const BigBRightChild = ({title,image,num,category,createdAt,createdBy,color}:blogResType) => {
  return (
    <div className='border  border-gray-300 rounded-md'>
         <div
    className="flex gap-2    dark:bg-g-900 cursor-pointer">
    <div className="relative w-1/3">
      <div >
        <motion.img
       
       initial={{scale:0}}
       animate={{scale:1}}
       whileHover={{scale:1.05}}
       transition={{type:"spring"}}
          src={`${image}`}
          alt={`${title}`}
          className='rounded-md object-cover h-28 w-28 min-h-15 min-w-28 aspect-square'
        />
      </div>
      <div className="absolute -top-1 -left-1" ><span className={`px-1 py-0  border-4 border-white outline-none rounded-full bg-g-800 text-white`}>{num?.toString()}</span></div>
    </div>
    <div className="p-1">
        <span className={`p-1 px-2 inline  ${color} text-sm text-white`}>{category}</span>
        <h1 className=" font-bold dark:text-white uppercase text-md mt-1 break-words">{title} Lorem ipsum,,...</h1>
       <span className="flex mt-1 items-center gap-2 text-sm text-gray-400"> <BsCalendarRange/> <span>{date.format(new Date(createdAt.toString()),"ddd, DD MMM YYYY")}</span></span>
    </div>
  </div>
    </div>
  )
}

export default BigBRightChild