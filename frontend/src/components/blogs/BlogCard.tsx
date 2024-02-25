import { BlogType } from '@/helper/types'
import Image from 'next/image'
import React from 'react'
import date from 'date-and-time'
import Link from 'next/link'
const BlogCard = ({author,category,content,createdAt,createdBy,dislike,likes,title,_id,image}:BlogType) => {
  return (
    <div className=' shadow-sm rounded-md overflow-hidden'>
        <div>
            <Image width={200} height={100} className=' w-full h-56  object-center object-cover' src={image} alt={title} loading='lazy' />
        </div>
        <Link href={`/blogs/${title.split(" ").join("-")}/${_id}`}>
        <div className='px-6 py-3'>
            <p className=' text-sm font-bold text-purple-700'>{category}</p>
            <h1 className='text-lg font-semibold'>{title}</h1>
            <p className='text-sm'>{content.split(" ").splice(0,15).join(" ")}</p>
        </div>
        </Link>
        <div className='px-6 pb-3 flex items-center gap-3'>
            <div>
            <Image width={50} className='w-10 h-10 rounded-full' height={50} src={createdBy.image} alt={createdBy.name} />
            </div>
            <div>
                <p className='text-md'>{createdBy.name}</p>
                <p className='text-sm text-gray-500'>{date.format(new Date(createdAt),"ddd, MMM DD YYYY")}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard