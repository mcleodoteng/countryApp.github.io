import React from 'react'
import {MdLightMode,MdDarkMode} from 'react-icons/md'

export const Header = () => {
  return (
    <div className='flex w-[100%] mt-0 p-5 lg:px-32 sm:px-12 md:px-28 h-[80px] mx-auto font-mono justify-between items-center bg-white'>
        <h1 className='text-sm font-semibold lg:text-xl md:text-lg'>Where in the World?</h1>
        <div className='flex gap-2 items-center'>
            <MdDarkMode className='text-lg text-[#0f0f0f]'/>
            <span className='uppercase text-sm text-black'>Dark Mode</span>
        </div>
    </div>
  )
}
