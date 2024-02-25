import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import date from 'date-and-time'
import Comments from '../comments/Comments'
import {BiLink, BiLogoFacebook, } from 'react-icons/bi'
import {BsTwitter, BsWhatsapp} from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import {MdDone} from 'react-icons/md'
import {  useAppSelector } from '@/redux/store'
import RelatedBlog from './RelatedBlog'
import Link from 'next/link'
import TextSkeleton from '../skeletons/TextSkeleton'
import CustomTextSkeleton from '../skeletons/CustomTextSkeleton'
const MainBlog = () => {
  const {data,isLoad,isErr}= useAppSelector(store=>store.SingleBlogReducer)
const {author,category,createdBy,createdAt,content,dislike,image,isPublished,likes,tags,title,comments,updatedAt,_id}=data;
    const pathName= usePathname();
    const [share,setSahre]= useState(`${window.location.origin}/${pathName}`)
    const [copy,setCopy]= useState(false);
  const  handleCopy=useCallback(()=>{
        navigator.clipboard.writeText(share);
        setCopy(true);
        setTimeout(()=>{
            setCopy(false)
        },1500)
  },[copy,share])
  return (
<div>
<main className="pt-8 pb-16 lg:pt-16 lg:pb-16 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-[70%]  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex justify-between items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      {isLoad?<div className=' w-16 h-16 bg-gray-200 mr-4 animate-pulse rounded-full' ></div>:<Image loading='lazy' className="  mr-4 w-16 h-16 rounded-full" src={createdBy.image} alt={createdBy.name} width={100} height={100} />}
                     <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{createdBy.name}</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400"></p>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400"><time  title="February 8th, 2022">{date.format(new Date(createdAt),"ddd, MMM DD YYYY")}</time></p>
                      </div>
                  </div>
                  <div>
                  <div className='flex items-center justify-around gap-2  '>
                    <div className='  cursor-pointer  mb-2 inline-block rounded px-5 py-2.5 text-sm font-medium uppercase leading-normal  text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-600'>
                    <BiLogoFacebook className='' />
                    </div>

                    <div className='mb-2  cursor-pointer  inline-block rounded px-5 py-2.5 text-sm font-medium uppercase leading-normal  text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-green-500'>
                    <BsWhatsapp className=' cursor-pointer' />
                    </div>

                    <div className='mb-2 cursor-pointer  inline-block rounded px-5 py-2.5 text-sm font-medium uppercase leading-normal  text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-[#1da1f2]'>
                    <BsTwitter/>
                    </div>
                    <button disabled={copy} onClick={handleCopy} className={`mb-2 inline-block  cursor-pointer  rounded px-5 py-2.5 text-md font-medium uppercase leading-normal  text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ${copy?"bg-white":"bg-slate-500"}`}>
                   {!copy? <BiLink  className=' cursor-pointer ' />
                    :<MdDone className=' cursor-pointer text-green-700' />}
                    </button>
                  </div>
                  </div>
              </address>
              {isLoad? <CustomTextSkeleton no={4} />:<div className='flex items-center gap-4'>
              <h1 className=" text-3xl font-extrabold leading-tight text-gray-900  lg:text-4xl dark:text-white">{title.toLocaleUpperCase()}</h1>
              <Link href={`/blogs?category=${category}`}>
              <p className=' bg-blue-500 text-white px-2 py-1 text-xs rounded-sm'>{category}</p>
              </Link>
              </div>}
          </header>
          <div className='pb-14'>
            {isLoad?<div className=' rounded-lg w-full h-56 bg-gray-200 animate-pulse ' ></div>:image&&<Image src={image} alt={title} width={500} height={300} className='w-full object-center rounded-lg object-cover h-80 mb-8'  />}

          {isLoad?<TextSkeleton/>:content}
          </div>
         <Comments />
      </article>
  </div>
</main>
<aside aria-label="Related articles" className="py-8 lg:py-22 bg-gray-50 dark:bg-gray-800">
 <RelatedBlog />
</aside>

</div>
  )
}

export default MainBlog