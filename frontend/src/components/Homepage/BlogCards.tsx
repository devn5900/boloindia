import React, { useEffect, useState } from 'react'
import { getData } from '../../utills/api'
import { bannerType, blogResType } from '../../utills/customType'
import BlogCard from './BlogCard'

const BlogCards = () => {
    const [data,setData]= useState<bannerType>([])
    useEffect(()=>{
        getData("/blogs?type=view&limit=4")
        .then((res:any)=>{
            console.log('red',res.data.data);
            setData(res.data.data);
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className='w-4/5 m-auto py-2'>
        <div className='grid grid-cols-4 w-full h-auto gap-3'>
        {data&&data.length>0&&data.map((el,i)=>{
            return <BlogCard key={i} {...el} />
        })}
        </div>
    </div>
  )
}

export default BlogCards