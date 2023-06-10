import React from 'react'
import { blogResType } from '../../utills/customType'
import {motion} from 'framer-motion';
import {BsCalendarRange} from 'react-icons/bs'
import date from 'date-and-time'
import { Link } from 'react-router-dom';
const BlogCard = ({title,image,category,author,createdAt}:blogResType) => {
  return (
    <div className=''>
        <div className='w-full  overflow-hidden rounded-md'>
            <motion.img 
            initial={{scale:0}}
            animate={{scale:1}}
            whileHover={{scale:1.05, opacity:0.9}}
            transition={{type:"tween"}}
            src={image?.toString()} alt={title.toString()} className='object-cover w-full h-52' />
        </div>
        <div>
       <div className="  py-3  w-full">
       <Link to={'/'}>
                <div className=" ">
                  <span
                    className={`p-1 px-2 inline  bg-orange-700 text-base text-white `}
                  >
                    {category?.toString()}
                  </span>
                  <h1 className=" font-bold text-black dark:text-white uppercase text-xl mt-1 break-words">
                   {title?.toString()}...
                  </h1>
                  <span className="flex mt-1 items-center gap-2 text-sm text-gray-500 dark:text-white">
                    By -<span className='text-black dark:text-white'>{author?.toString()}</span> | <BsCalendarRange />
                    <span>{date.format(new Date(createdAt?.toString()), "ddd, DD MMM YYYY")}</span>
                  </span>
                  
                </div>
       </Link>
              </div>
        </div>
    </div>
  )
}

export default BlogCard