import React,{ useEffect, useContext, useState } from 'react'
import useCountryDataApi from '../api/useCountryDataApi'
import { countryContext } from "../api/Pages";
import LoadingPage from './LoadingPage';
import countryDataAPI from '../api/Pages'
import { GetThemeValues } from '../components/ContextTheme';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../assets/data.json'


export const Flag = ({countryData}) => {

  //const countryDataAPI = useContext(countryContext);
  //const countryDataAPI = useCountryDataApi();
  //const { isLoading, isError, fetchCountryData } = useCountryDataApi();

  
  // useEffect(()=> {
  //   fetchCountryData();
  // },[]);
  const {darkTheme} = GetThemeValues();
  const[apiData, setApiData] =useState([])
  //const[countryNames, setCountryName] =useState('')
  const[isLoading, setisLoading]= useState(false)
  const[isError, setisError] = useState(false)
  const navigate = useNavigate();
  const {id} = useParams();
  

  

  //const router = useRouter();
  
  
  const Handlechange =(e) => {
    //setCountryName(e.currentTarget.id);
    //setCountryName(e.currentTarget.id);
    console.log(e.currentTarget.id);
  }

//use params

  return (
    <div key={countryData?.id} role='button' onClick={() => {navigate(`/details/${countryData?.name.common}`)}} className= 'mt-8 w-[100%] lg:grid lg:grid-cols-4 lg:w-[100%] items-center lg:mx-auto sm:grid sm:grid-cols-2 sm:w-[200%] sm:mx-auto md:grid md:grid-cols-2 md:w-[210%] md:mx-auto md:-ml-10'>
        <p>{id}</p>
        <div id={countryData?.name.common} role='button' onClick={Handlechange}  className= {`${darkTheme ? "bg-[#2b3945] text-white" : "bg-[#f2f2f2]"} bg-white w-[80%] lg:w-[350%] h-96 mx-auto mt-8 rounded-sm font-sans shadow-lg md:ml-20 lg:ml-10`}>
            <Link to={`/details/${countryData?.name.common}`}>
              <div className='bg-black w-[100%] h-48 rounded-sm mx-auto'>
                <img className='w-full h-full object-cover' width={50} height={50} src={countryData?.flags.svg} alt= {countryData?.name.common} />
              </div>
            </Link>
            {/* Flag Display*/}
            
        
            {/* Details of Flag */}
            <div className='mt-7 mx-6'>
              <h1 className='font-bold text-xl'  onChange={Handlechange} >{countryData?.name.common}</h1>
                    
              <div className='mt-4 flex flex-col gap-2'>
                <p className='font-normal'>Population: <span className='font-extralight'>{countryData?.population}</span></p>
                          
                <p className='font-normal'>Region: <span className='font-extralight'>{countryData?.region}</span></p>
                            
                <p className='font-normal'>Capital: <span className='font-extralight'>{countryData?.capital}</span></p>
                            
              </div>
        
            </div>

          
          
                  
        </div>


      
    </div>
    
  
    
  )
} 