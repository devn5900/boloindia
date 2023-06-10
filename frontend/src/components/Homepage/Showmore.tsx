import React from 'react'
import { Link } from 'react-router-dom'

const Showmore = ({title,path}:{title:String,path:String}) => {
  return (
    <div className='w-4/5 m-auto '>
        <div className='flex py-2 items-center justify-center w-full gap-5 '>
            <h3 className='text-3xl font-bold font-poppins dark:text-white '>{title}</h3>
            <span className='relative border border-collapse p-[1.3px] rounded-lg border-blueGray-500 w-full'> 
            <span className='absolute rounded-full  bg-blue-700 p-[4px] -top-0.5  -left-1'></span>
            <Link to={path.toString()}><span className='absolute bg-blue-700 p-1
            -right-1 -top-3 text-white text-sm  cursor-pointer px-3 rounded-sm'>Show more</span>
            </Link>
             </span>
        </div>
    </div>
  )
}

export default Showmore