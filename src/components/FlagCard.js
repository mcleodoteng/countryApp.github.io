import React,{useState, useEffect} from 'react'
import data from '../assets/data.json'
import { Flag } from './Flag';
import LoadingPage from './LoadingPage';
import { Search } from './Search';
import axios from 'axios';
import Filter from './Filter';
import { useParams } from 'react-router-dom';

const FlagCard = () => {
    const[apiData, setApiData] =useState([])
    const[isLoading, setisLoading]= useState(false)
    const[isError, setisError] = useState(false)
    const[countryInfo, setCountry] = useState('');
    const[regionName, setRegion] = useState('');
    const {id} = useParams();
  

  


    useEffect(()=> {
        setisLoading(true)
        async function fetchCountryApi(){

            const response = await axios.get('https://restcountries.com/v3.1/all')
            const data = await response.data
            setApiData(data)
            setisLoading(false)
            console.log(data)
        }
        fetchCountryApi()
    },[])
   
    useEffect(()=> {
        
        setisLoading(true)
        async function fetchRegionApi(region){

            const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
            const data = await response.data
            setApiData(data)
            setisLoading(false)
            console.log(data)
        }
         
        fetchRegionApi(regionName)
       

    },[regionName])
    console.log(regionName)

    


  return (
    <div>
        <div className='lg:flex lg:justify-between md:flex md:justify-between mt-6'>
            <Search countryInfo ={countryInfo} setCountry={setCountry}/>

            <div className='px-4 lg:mx-24 md:mx-24 sm:mx-7'>

                <Filter regionName={regionName} setRegion={setRegion}/>
                
            </div>
        </div>
        

        <div className=' lg:grid lg:grid-cols-4 lg:w-[88%] items-center lg:mx-auto sm:grid sm:grid-cols-2 sm:w-[90%] sm:mx-auto md:grid md:grid-cols-2 md:w-[80%] md:mx-auto'>
            
            {
                isLoading && <LoadingPage/>
            }

            {
                
                apiData.filter((item) => {
                    return countryInfo.toLocaleLowerCase() === ''?item:item.name.common.toLocaleLowerCase().includes(countryInfo)
                }).map((country) => (
                    <Flag key={country?.id} countryData={country}/>
                ))
            
            }
           
            {
                isError && <h1 className='text-red'>Error Occured</h1>
            }
            
        </div> 
    </div>
  )
}

export default FlagCard