import React from 'react'
import date from 'date-and-time'
import { BsCalendarRange } from 'react-icons/bs'
import {motion} from 'framer-motion'
import { blogResType } from '../../utills/customType'
const BigBLeftChild = ({title,image,author,category,createdAt}:blogResType) => {
  return (
    <div className="w-1/2 relative overflow-hidden rounded-md cursor-pointer border border-gray-300">
    <div className=''>
      <motion.img
       initial={{scale:0}}
       animate={{scale:1}}
       whileHover={{scale:1.02}}
       transition={{type:"spring", stiffness:120}}
        src={image?.toString()}
        alt={title.toString()}
        className="rounded-md object-cover object-center h-96 w-full"
      />
    </div>
    <div>
      <div className=" bottom-0 p-3  w-full ">
        <div className=" bottom-4">
          <span
            className={`p-1 px-2 inline  bg-purple-700 text-sm text-white`}
          >
           {category?.toString()}
          </span>
          <h1 className=" font-bold text-black dark:text-white uppercase text-3xl mt-1 break-words">
          {title?.toString()}
...
          </h1>
          <span className="flex mt-1 items-center gap-2 text-sm text-black dark:text-white">
            By - {author?.toString()} | <BsCalendarRange />
            <span>{date.format(new Date(createdAt?.toString()), "ddd, DD MMM YYYY")}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BigBLeftChild