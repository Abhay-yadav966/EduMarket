import React from 'react'

const LoadingCircle = () => {
  return (
    <div className='flex flex-col items-center mt-[15%] justify-center gap-y-2  ' >
        <div className='spinner' ></div>
        <p className=' text-bgDark text-lg font-semibold ' >Loading...</p>
    </div>
  )
}

export default LoadingCircle;