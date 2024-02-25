"use client"
import { getTopBlogs } from "@/helper/api";
import { categoryQueryType, categoryType } from "@/helper/types";
import { filterOptions, getBlogs } from "@/redux/blogs/blogActions";
import { useAppDispatch } from "@/redux/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, {  memo, useCallback, useEffect, useState } from "react";

const Category = () => {
    const dispatch= useAppDispatch();
    const param = useSearchParams();
    const [query,setQuery]= useState<categoryQueryType>(param.get("category")||"")
    const [categories,setCategory]= useState<categoryType>([])
    useEffect(()=> {
      getTopBlogs("/blogs/categories")
      .then((res)=>{
          setCategory(res.categories);
      })
   },[])
   useEffect(()=>{
      dispatch(filterOptions({category:query}))
   },[query,param])
  
   const updateQueryCategory = (e:any)=>{
    if(Array.isArray(query)){
        setQuery([...query,e.target.value])
    }else{
        setQuery(e.target.value)
    }
   }
  return (
    <div>
      <select
      onChange={updateQueryCategory}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
        ouline-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={""}>Filter By Category</option>
        {
            categories&&categories.length>0&&categories.map((el:string,i:number)=>{
                    return <option key={i*4} value={el} selected={query==el} >{el}</option>
            })
        }
      </select>
    </div>
  );
};

export default Category;
