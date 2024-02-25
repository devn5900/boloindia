import Link from 'next/link'
import React from 'react'

const ShowMore = ({link,text}:{link:string,text:string}) => {
  return (
    <div className='py-7 flex justify-between items-center'>
        <h1 className='text-3xl font-extrabold dark:text-white'>{text}</h1>
        <Link href={link} className='bg-[#a9d214] hover:bg-[#8fb310] text-white px-2 py-1 rounded-sm text-sm'>Show more</Link>
    </div>
  )
}

export default ShowMore