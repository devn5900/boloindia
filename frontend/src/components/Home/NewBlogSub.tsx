import React from 'react'
import NewBlogLeft from './NewBlogLeft'
import NewBlogRight from './NewBlogRight'
import ShowMore from '../Mini/ShowMore'

const NewBlogSub = () => {
  return (
    <div className='md:px-16 xs:px-4 sm:px-4 py-8 dark:bg-slate-900'>
        <ShowMore link='/blogs' text='New Blogs' />
        <div className='flex md:flex-row xs:flex-col sm:flex-col xs:gap-3 sm:gap-3 md:gap-0 justify-between py-2'>
        <NewBlogLeft/>
        <NewBlogRight/>
        </div>
    </div>
  )
}

export default NewBlogSub