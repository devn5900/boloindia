import React from 'react'

const GridImageSkeleton = () => {
  return (
<div className='flex gap-3 animate-pulse'>        <div className="w-1/2 relative overflow-hidden  cursor-pointer   bg-gray-200 rounded-md dark:bg-gray-700 mb-4"></div>
        <div className='flex flex-col w-1/2 gap-3'>
        <div className=" h-48  bg-gray-200 rounded-sm dark:bg-gray-700 "></div>  <div className=" h-44  bg-gray-200 rounded-sm dark:bg-gray-700 "></div>
        </div>
    </ div>
  )
}

export default GridImageSkeleton