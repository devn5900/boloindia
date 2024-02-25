"use client"
import React, { memo, useEffect, useState } from "react";
import { usePathname, useRouter,useSearchParams} from 'next/navigation'
import { BiSearch } from "react-icons/bi";
import useDebounce from "@/hooks/useDebounce";
import { useAppDispatch } from "@/redux/store";
import { filterOptions, getBlogs } from "@/redux/blogs/blogActions";
// import { useRouter } from "next/router";
const Search = () => {
      const param=useSearchParams()
      const dispatch= useAppDispatch();
      const [searchText,setSearchText]= useState<string>(param.get('q')||"");
      const search= useDebounce(searchText,1000)
      useEffect(()=>{
        dispatch(filterOptions({q:search}));
      },[search])
      

  return (
    <div className="flex items-center">
      <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} className="py-2 outline-none rounded-tl-md rounded-bl-md px-5 border-[0.01rem] border-[#96D4E7]" placeholder="Search text..." />
    <button className="py-2 text-white px-4 text-2xl bg-[#116897] rounded-tr-md rounded-br-md ">
      <BiSearch />
    </button>
    </div>
  );
};

export default Search;
