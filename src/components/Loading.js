import React from 'react'
import { GetThemeValues } from '../components/ContextTheme';

export const Loading = () => {
  const {darkTheme} = GetThemeValues();
  
  return (
    <div className={`${darkTheme ? "bg-[rgb(32,44,55)]" : "bg-[#f2f2f2]"} w-full mt-5`}>
        <span className= {`${darkTheme ? "bg-[rgb(32,44,54)]" : "bg-[#f2f2f2]"} text-xl mx-[33%] sm:mx-[50%] md:mx-[50%] lg:mx-[50%] inline-block font-bold`}>Loading...</span>
    </div>
  )
}
