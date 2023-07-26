import React,{useContext,useState,useEffect} from 'react'
import useCountryDataApi from '../api/useCountryDataApi';
import { countryContext } from "../api/Pages";
import LoadingPage from './LoadingPage';
import { Flag } from './Flag';
import { GetThemeValues } from '../components/ContextTheme';
import axios from 'axios';
import { Search } from './Search';
import data from '../assets/data.json'


const Filter = ({regionName, setRegion}) => {
    //const [isLoading, setisLoading] = useState(false);
    const [filtervalue, setFilterValue] = useState("");
    const countryDataAPI = useContext(countryContext);
    //const [regionName, setRegion] = useState("");
    const[isLoading, setisLoading]= useState(false)
    const[apiData, setApiData] =useState([])
    const[isError, setisError] = useState(false)
    const{ countryData, fetchFilterCountrByRegionData, fetchCountryData} = useCountryDataApi()
    const[countryInfo, setCountry] = useState('');

    const {darkTheme} = GetThemeValues();


    const Selecthandle = (e) => {
        setRegion(e.target.value);
        
    }
    
    
    useEffect(()=> {
        // setisLoading(true)
        // async function fetchRegionApi(region){

        //     const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
        //     const data = await response.data
        //     setApiData(data)
        //     setisLoading(false)
        //     console.log(data)
        // }
        // fetchRegionApi()
        //fetchFilterCountrByRegionData('asia')
    },[])

    

    //console.log(regionName)


  return (
    
    <div>
            <select value={regionName} onChange={Selecthandle} className= {`${darkTheme ? "bg-[#2B3844] text-white" : "bg-white"} w-[45%] p-2 mt-7 lg:w-[100%] sm:w-[25%] md:w-[105%] shadow-md ml-1`}>
                <option value="africa" >Filter by Region</option> 
                <option type='button'  value="africa">Africa</option>
                <option type='button'  value="america">America</option>
                <option type='button' value="asia">Asia</option>
                <option type='button'  value="europe">Europe</option>
                <option type='button' value="oceania">Oceania</option>

            </select>
    </div>
  )
  
}


export default Filter
