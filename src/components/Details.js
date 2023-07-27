import React, { useState,useEffect } from 'react'
import { Header } from './Header'
import {MdArrowBack } from 'react-icons/md'
import LoadingPage from './LoadingPage';
import { GetThemeValues } from '../components/ContextTheme';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import data from '../assets/data.json'
import DetailsCard from './DetailsCard';
import { Flag } from './Flag';



export const Details = () => {
    const {darkTheme} = GetThemeValues();
    const navigate = useNavigate();
    const[apiData, setApiData] =useState([])
    //const[countryNames, setCountryName] =useState('')
    const[isLoading, setisLoading]= useState(false)
    const[isError, setisError] = useState(false)
    const {id} = useParams();
 
  useEffect(()=> {
        
    setisLoading(true)
    async function fetchCountryNameApi(country){

        const response = await axios.get(`https://restcountries.com/v2/name/${country}`)
        const data = await response.data
        setApiData(data)
        setisLoading(false)
        console.log(data)
    }
    
    fetchCountryNameApi(id)
  
  },[id])
  
  
  return (

    <div className= {`${darkTheme ? "bg-[#202c36]" : "bg-[#f2f2f2]"} w-[100%] lg:h-[100vh]`}>
        
    
        <div>
            <button onClick={() =>{navigate("/")}} className={`${darkTheme ? "bg-[#2b3944] text-white" : "bg-[#f2f2f2]"} w-[29%] text-lg bg-white  lg:w-[10%] lg:mx-32 md:w-[11%] md:mx-28 sm:w-[16%] sm:mx-12 flex flex-row gap-2 mt-8 ml-6 px-6 py-1 shadow-lg shadow-black font-thin`}><MdArrowBack className='mt-1 mx-auto text-lg'/>Back</button>
        </div>

        {
                isLoading && <LoadingPage/>
            }

            {
                
                apiData.map((country) => (
                    <DetailsCard key={country?.altSpellings[1]} countryData={country}/>
                ))
            
            }
           
            {
                isError && <h1 className='text-red'>Error Occured</h1>
            }
        

    </div>
  )
}
