"use client"
import { getBlogs } from '@/redux/blogs/blogActions'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import React, { useEffect } from 'react'
import BlogCard from './BlogCard'
import { BlogType } from '@/helper/types'
const Blog = () => {
const {page,blogs}= useAppSelector(store=>store.blogReducer);
  return (
    <div className='px-16'>
        <div className='grid grid-cols-4 gap-2'>
          {
            blogs&&blogs.length>0&&blogs.map((el:BlogType,i:number)=>{
              return <BlogCard key={i*3} {...el} />
            })
          }
        </div>
    </div>
  )
}

export default Blog