"use client"
import MainBlog from '@/components/blogs/MainBlog';
import { getTopBlogs } from '@/helper/api';
import { BlogType } from '@/helper/types';
import { cleanUpBlog, getOneBlog } from '@/redux/SingleBlog/SingleBlogAction';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useParams, usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Blog = () => {
  const dispatch= useAppDispatch();
  const {data}= useAppSelector(store=>store.SingleBlogReducer)
  let {blogId}= useParams();
  const router= useRouter();
  const pathname= usePathname()
  useEffect(()=>{
    blogId= blogId.split("/")[1]
    dispatch(cleanUpBlog());
    dispatch(getOneBlog(`/blogs/${blogId}`))
  },[])
  console.log(data)
  if(!blogId){
    throw new Error("404 Not Found !")
    return;
  }
  return (
    <div className=' min-h-screen'>
      {data&&<MainBlog {...data} />}
      </div>
  )
}

export default Blog