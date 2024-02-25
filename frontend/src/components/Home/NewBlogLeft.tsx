"use client"
import { getTopBlogs } from '@/helper/api';
import { Blog } from '@/helper/types';
import React, { useEffect, useState } from 'react'
import BlogSleep from './BlogSleep';
import BlogSleepSkeleton from './BlogSleepSkeleton';

const NewBlogLeft = () => {
    const [load,setLoad]= useState<Boolean>(true);
    const [data,setData]= useState<Blog>([]);
    useEffect(()=>{
        setLoad(true);
     getTopBlogs("/blogs?type=view&limit=4&sort=createdAt")
     .then(res=>{
        setLoad(false);
        setData(res);
     }).catch(res=>{
        setLoad(true);
     })
    },[])
  return (
    <div className='lg:w-[70%]'>
         <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5'>
            {
                data&&data.length>0&&data.map((el,i)=>{
                    return <BlogSleep key={i*1} {...el} />
                })
            }
        </div>
            {
                load&&<BlogSleepSkeleton many={4} />
            }
    </div>
  )
}

export default NewBlogLeft