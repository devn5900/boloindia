"use client"
import { getTopBlogs } from '@/helper/api'
import { Blog } from '@/helper/types'
import { AxiosResponse } from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import BlogSkeleton from './BlogSkeleton'
import BlogCard from './BlogCard'
import ShowMore from '../Mini/ShowMore'

const TopBlogs = () => {
    const [load,setLoad]= useState<Boolean>(true);
    const [data,setData]= useState<Blog>([]);
    useEffect(()=>{
        setLoad(true);
     getTopBlogs("/blogs?type=view&limit=4")
     .then(res=>{
        setLoad(false);
        setData(res);
     }).catch(res=>{
        setLoad(true);
     })
    },[])
  return (
    <div className='md:px-16 xs:px-4 sm:px-4 md:py-12 xs:py-0 sm:py-0 dark:bg-slate-800'>
        <ShowMore link={"/"} text='Top Blogs' />
        <div className='grid md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 gap-5 py-2'>
            {
                data&&data.length>0&&data.map((el,i)=>{
                    return <BlogCard key={i*1} {...el} />
                })
            }
        </div>
            {
                load&&<BlogSkeleton many={4} />
            }
    </div>
  )
}

export default TopBlogs