"use client"
import { getTopBlogs } from '@/helper/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {BsFillBellFill} from 'react-icons/bs'
const NewBlogRight = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    getTopBlogs("/blogs/categories")
    .then((res)=>{
      setData(res.categories.splice(0,5));
    }).catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div>

      <div className='  p-6 bg-[#ecf4fa] -z-0 dark:-z-0 relative rounded-md overflow-hidden'>
        <div className='border-[0.01rem]  w-full relative bg-transparent border-gray-200'>
          <span className='rounded-full flex items-center justify-center -top-5 absolute h-[2.5rem] w-[2.5rem] m-auto left-0 right-0  bg-blue-800'><BsFillBellFill className='text-white text-lg'/></span>
          <div className='text-center p-8 pt-8'>
            <h1 className='text-xl font-semibold py-3'>Subscribe</h1>
            <p className=' text-gray-700'>Get Notified About Next <br/> Update Direct to Your inbox</p>
            <button className='py-1 w-full my-3 px-3 rounded-md text-white font-semibold text-md bg-[#ff791f] cursor-pointer'>SUBSCRIBE</button>
            <p className='text-xs font-semibold text-gray-500'>We promise that we don't spam !</p>
          </div>
        </div>
        <div className='p-20 rounded-full -bottom-10 -z-10 -right-10 bg-[#d2ee6a] absolute'></div>
      </div>
    <div className='flex gap-3  flex-wrap items-center justify-center p-4'>
    {
      data&&data.length>0&&data.map((el,i)=>{
        return <Link href={`/blogs?page=1&category=${el}`} key={i*2} className=' dark:text-white border-2 p-2 text-sm border-blue-700 rounded-md font-semibold transition-all delay-150 hover:bg-blue-700 hover:text-white'>{el}</Link>
      })
    }
    </div>
    </div>
  )
}

export default NewBlogRight