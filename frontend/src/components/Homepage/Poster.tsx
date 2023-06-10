import React, { useEffect, useState } from "react";
import date from "date-and-time";
import { BsCalendarRange } from "react-icons/bs";
import { getData } from "../../utills/api";
import { bannerType } from "../../utills/customType";
import {motion} from 'framer-motion'
import GridImageSkeleton from "../skeleton/GridImageSkeleton";
const Poster = () => {
    const [data,setData]= useState<bannerType>([]);
    const [load,setLoad]= useState<Boolean>(true);
    useEffect(()=>{
      setLoad(true);
        getData('/blogs?type=view&limit=3&sort=createdAt')
        .then((res:any)=>{
         console.log('res',res.data.data);
           setData(res.data.data)
           setLoad(false);
        }).catch((err:any)=>{
           console.log(err);
        })
     },[]) 
  return (
    <div className="dark:bg-g-800 py-5">
    <div className="w-4/5 m-auto py-2 overflow-hidden ">
    {!load?  <div className="flex gap-3 ">
          <div className="w-1/2 relative overflow-hidden rounded-md cursor-pointer">
            <div>
              <motion.img
               initial={{scale:0}}
               animate={{scale:1}}
               whileHover={{scale:1.05}}
               transition={{type:"spring", stiffness:120}}
                src={data[0]?.image?.toString()}
                alt={data[0]?.title?.toString()}
                className="rounded-md object-cover object-center w-full"
              />
            </div>
            <div>
              <div className="absolute bottom-0 p-3 backdrop-filter backdrop-blur-base bg-gradient-to-b from-transparent via-transparent to-black/50 inset-y-96 w-full ">
                <div className="absolute bottom-4">
                  <span
                    className={`p-1 px-2 inline  bg-b-700 text-base text-white`}
                  >
                   {data[0]?.category?.toString()}
                  </span>
                  <h1 className=" font-bold text-white uppercase text-xl mt-1 break-words">
                    This is you, but you not...
                  </h1>
                  <span className="flex mt-1 items-center gap-2 text-sm text-white">
                    By - {data[0]?.author?.toString()} | <BsCalendarRange />
                    <span>{date.format(new Date(data[0]?.createdAt?.toString()), "ddd, DD MMM YYYY")}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div  className="flex flex-col w-1/2 gap-2">
            <div className="  w-full overflow-hidden relative rounded-md cursor-pointer ">
            <motion.img 
              initial={{scale:0}}
              animate={{scale:1}}
              whileHover={{scale:1.05}}
              transition={{type:"spring"}}
                src={data[1]?.image?.toString()}
                alt=""
                className=" object-cover object-center w-full aspect-b1 rounded-md"
              />
               <div className="absolute bottom-0 p-3 backdrop-filter backdrop-blur-base bg-gradient-to-b from-transparent via-transparent to-black/50  inset-y-1/2  w-full">
                <div className="absolute bottom-4">
                  <span
                    className={`p-1 px-2 inline  bg-purple-700 text-base text-white`}
                  >
                    {data[1]?.category?.toString()}
                  </span>
                  <h1 className=" font-bold text-white uppercase text-xl mt-1 break-words">
                   {data[1]?.title?.toString()}...
                  </h1>
                  <span className="flex mt-1 items-center gap-2 text-sm text-white">
                    By - {data[1]?.author?.toString()} | <BsCalendarRange />
                    <span>{date.format(new Date(data[1]?.createdAt?.toString()), "ddd, DD MMM YYYY")}</span>
                  </span>
                  
                </div>
              </div>
            </div>
            <div className="  w-full overflow-hidden relative rounded-md cursor-pointer">
            <motion.img  initial={{scale:0}}
               animate={{scale:1}}
               whileHover={{scale:1.05}}
               transition={{type:"spring"}}
                src={data[2]?.image?.toString()}
                alt=""
                className=" object-cover aspect-b1 rounded-md"
              />
               <div className="absolute bottom-0 p-3 backdrop-filter backdrop-blur-base bg-gradient-to-b from-transparent via-transparent to-black/50 inset-y-1/3 w-full">
                <div className="absolute bottom-4">
                  <span
                    className={`p-1 px-2 inline  bg-orange-700 text-base text-white`}
                  >
                    {data[2]?.category?.toString()}
                  </span>
                  <h1 className=" font-bold text-white uppercase text-xl mt-1 break-words">
                   {data[2]?.title?.toString()}...
                  </h1>
                  <span className="flex mt-1 items-center gap-2 text-sm text-white">
                    By - {data[2]?.author?.toString()} | <BsCalendarRange />
                    <span>{date.format(new Date(data[2]?.createdAt?.toString()), "ddd, DD MMM YYYY")}</span>
                  </span>
                  
                </div>
              </div>
            </div>
            {/* <div className=" w-full overflow-hidden relative">
            <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuSjZB7Gs8_EdZgLWLMxSi-yfCP34uAREt8e_vzb12S6GHtrA2rGVxemSC9h5JSTbBFXJnNXWR-LCh6xSwQWvFm1HfdSo9qinXcoL96x9Zr8hgQD5E7z0isyPQWWyM4_3_UFSL6Y5ONv78wk3u9JYU9eUzEUWdtqzImsIZwJNm67RuQTyBBiJbTDN2/w669-h506-p-k-no-nu/blogger%20templates123.jpg"
                alt=""
                className=" object-cover aspect-b1 rounded-md"
              />
               <div className="absolute bottom-0 p-3">
                <div className="">
                  <span
                    className={`p-1 px-2 inline  bg-orange-700 text-base text-white`}
                  >
                    Fiction
                  </span>
                  <h1 className=" font-bold text-white uppercase text-xl mt-1 break-words">
                    This is you, but you not...
                  </h1>
                  <span className="flex mt-1 items-center gap-2 text-base text-white">
                    By - Devn Mishra | <BsCalendarRange />
                    <span>{date.format(new Date(), "ddd, DD MMM YYYY")}</span>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>:<><GridImageSkeleton/></> }
      </div>
    </div>
  );
};

export default Poster;
