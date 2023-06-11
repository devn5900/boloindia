import React from 'react'
import BigBLeft from './BigBLeft'
import BigBRight from './BigBRight'

const BigBFlex = () => {
  return (
    <div className='w-4/5 m-auto py-3'>
      <div className='grid grid-cols-3 gap-8 w-full'>
        <BigBLeft/>
        <BigBRight/>
      </div> 
    </div>
  )
}

export default BigBFlex