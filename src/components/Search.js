import React,{useContext,useState, useEffect} from 'react'
import {CiSearch} from 'react-icons/ci'
import { countryContext } from "../api/Pages";
import useCountryDataApi from '../api/useCountryDataApi';
import { GetThemeValues } from '../components/ContextTheme';
import Filter from './Filter';
import LoadingPage from './LoadingPage';
import { Flag } from './Flag';


export const Search = ({countryInfo, setCountry}) => {
    
    const {darkTheme} = GetThemeValues();


    
    const Handlechange =(e) => {
        setCountry(e.target.value);
    }
    
  return (
    <div >
        {/* Input Area */}
        <form  className= {`${darkTheme ? "bg-[rgb(43,56,68)] text-white" : "bg-[#f2f2f2]"} flex w-[90%] mx-auto mt-5 sm:w-[40%] sm:ml-9 md:mx-24 lg:mx-28 font-sans lg:w-[90%] md:w-[90%] bg-[#ffffff] justify-between items-center px-2 py-3 shadow-md`} >
            <div className='flex gap-2 justify-center items-center w-[88%]'>
                <span><CiSearch className='text-xl font-bold text-[#1e49e4]'/></span>
                <input type="text"  value={countryInfo} onChange={Handlechange} placeholder='Search for a country...' className= {`${darkTheme ? "bg-[#2B3844] text-white" : "bg-white"} border-0 text-sm outline-[#1139ca] w-[100%] px-2 py-2`}/>
            </div>
            <div>
                {/* <button className='bg-[#1139ca] px-2 py-2 rounded-md text-white text-[12px]'> Search </button>  */}
            </div>
            
            
        </form>

        

    </div>

  )
}
