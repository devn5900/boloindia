import { BlogType } from "@/helper/types";
import Image from "next/image";
import React, { memo } from "react";
import TextIcon from "../Mini/TextIcon";
import {BsCalendar2Check} from 'react-icons/bs'
import date from 'date-and-time'
const BlogSleep = ({
  author,
  title,
  content,
  createdAt,
  createdBy,
  image,
  category,
}: BlogType) => {
  return (
    <div className=" grid grid-cols-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="rounded-lg overflow-hidden">
        <Image
          width={500}
          height={250}
          className=" object-cover max-w-[95%] max-h-44"
          placeholder="blur"
          loading="lazy"
          blurDataURL={image}
          src={image}
          alt={title}
        />
      </a>
      <div className=" flex flex-col gap-2 p-2 ">
        <TextIcon text={category} color="bg-[#C72553]" />
        <a href="#">
          <h5 className=" xs:text-sm sm:text-md md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title.toUpperCase()}
          </h5>
        </a>
        <p className=" font-normal xs:text-xs sm:text-xs text-gray-700 dark:text-gray-300">
          {content.split(" ").splice(0,15).join(" ")}
        </p>
        <div className="flex flex-col  gap-1">
          <p className="text-gray-600 text-xs dark:text-gray-300">
            By - <span className="text-black dark:text-gray-300 xs:text-xs sm:text-xs md:text-sm">{author}</span>
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-2 dark:text-gray-300">
            <span>

            <BsCalendar2Check/>
            </span>
            <span>
                {date.format(new Date(createdAt),"ddd, MM DD YYYY")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(BlogSleep);
