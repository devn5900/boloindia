"use client"
import React, { memo, useCallback, useEffect, useState } from 'react'
import Search from './Search'
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getBlogs } from '@/redux/blogs/blogActions';
import Category from './Category';
import Pagination from './Pagination';
import {format} from 'url'
import { usePathname, useRouter } from 'next/navigation';
import { rebuildQuery } from '@/helper/query';
import { queryType } from '@/helper/types';
const Tools = () => {
  const dispatch= useAppDispatch();
  const pathname= usePathname();
  const router= useRouter();
  const {queries} = useAppSelector(store=>store.blogReducer);
  useEffect(()=>{
    const filteredQuery = Object.entries(queries)
    if(filteredQuery.length>0){
     const finalQuery= filteredQuery.filter(([key, value]) => value !== '' && value !== null && value !== undefined)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
      router.push(format({pathname,query:finalQuery}))
      dispatch(getBlogs({...finalQuery,type:"view"}))
    }
},[queries])
  return (
    <div className='px-16 py-10'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
           <Search   />
           <Category  />
        </div>
        <div>
           <Pagination  />
        </div>
      </div>
    </div>
  )
}

export default memo(Tools)