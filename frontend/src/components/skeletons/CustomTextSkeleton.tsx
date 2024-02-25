import React from 'react'

const CustomTextSkeleton = ({no}:{no:number}) => {
    const newArr= new Array(no).fill("");
  return (
    <div className='flex flex-col gap-3'>

    <div className=" flex flex-col gap-2 w-32 space-x-2 max-w-[480px]">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        
    </div>
    </div>
  )
}

export default CustomTextSkeleton