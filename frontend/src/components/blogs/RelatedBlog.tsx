"use client"
import { getTopBlogs } from '@/helper/api';
import { Blog } from '@/helper/types';
import React, { useEffect, useState } from 'react'
import RelatedChild from './RelatedChild';
import PreLoader from '../Mini/PreLoader';
import { useAppSelector } from '@/redux/store';

const RelatedBlog = () => {
    const [data,setData]=useState<Blog>([]);
    const {data:BlogData}= useAppSelector(store=>store.SingleBlogReducer);
    const {category}= BlogData;
    const [isLoad,setIsLoad]= useState(false);
    useEffect(()=>{
      setIsLoad(true);
        getTopBlogs(`/blogs?category=${category}&limit=5&sort=createdBy&order=asc&type=view`)
        .then((res)=>{
            setData(res);
            setIsLoad(false);
        }).catch((err)=>{
          setIsLoad(false);
        })
        
    },[])
  return (
    <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
     {isLoad?<PreLoader/>: <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
        {data&&data.length>0&&data.map((el)=>{
                return <RelatedChild {...el} />
            })}
      </div>}
  </div>
  )
}

export default RelatedBlog