"use client"

import Blog from '@/components/blogs/Blog'
import Tools from '@/components/blogs/Tools'
import React from 'react'

const page = () => {
  return (
    <div className=' min-h-screen'>
        <Tools/>
        <Blog/>
    </div>
  )
}

export default page