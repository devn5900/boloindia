import React from 'react'

const PreLoader = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
    <div className="w-12 h-12 rounded-full animate-spin
    border-y-4 border-solid border-orange-500 border-t-transparent"></div>
    </div>
  )
}

export default PreLoader