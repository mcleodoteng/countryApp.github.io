import React,{useState, useEffect} from 'react'
import { Search } from './Search'
import Filter from './Filter'
import axios from 'axios';



const NavBar = () => {
    const[apiData, setApiData] =useState([])
    const[isLoading, setisLoading]= useState(false)
    const[isError, setisError] = useState(false)
    const[countryInfo, setCountry] = useState('');
    const[regionName, setRegion] = useState('');

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
       
        //console.log(regionName)
        //fetchFilterCountrByRegionData('africa')
    },[regionName])
    
    console.log(regionName)
  return (
    <div>
        <div className='lg:flex lg:justify-between md:flex md:justify-between mt-6'>
            <Search countryInfo ={countryInfo} setCountry={setCountry}/>

            <div className='px-4 lg:mx-24 md:mx-24 sm:mx-7'>
                {/* <p className='bg-white p-2 w-[52%] mt-4 lg:w-[100%] sm:w-[30%] md:w-[100%]'>Filter by Region</p> */}
                <Filter regionName={regionName} setRegion={setRegion}/>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar