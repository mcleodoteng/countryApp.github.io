import React,{useState,useEffect} from 'react'
import axios from "axios";
import Data from "../assets/data.json" //assert{ type: "json" };

const useCountryDataApi = () => {
    // Presenting data
    const [countryData, setCountryData] = useState(null);
    const [countryDetails, setCountryDetails] = useState(null);

    // Checking loading stage
    const [isLoading, setIsLoading] = useState(false);

    // Checking error stage
    const [isError, setIsError] = useState(null); 

    //Handling Effects
    // useEffect(() => {},[])

    const fetchCountryData = async () => {

        try {
            setIsLoading(prev => !prev);
            const response = await axios.get(`https://restcountries.com/v3.1/all`)
            const data = response.data != null ? response.data : Data;
            //const fetchdata = res.data;
            //const fetchdata = JSON.parse(Data);
            setCountryData(data);
            setIsLoading(prev => !prev);
        } catch (error) {
            console.log('Error response', error.response);
            setIsError('No Results',error);
        } 
    }

    const fetchSearchCountryData = async (country) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
            const data = response.data;
            setCountryData(data);
            setIsLoading(false);
        } catch (error) {
            console.log('Error response', error.response);
            setIsError('No Results',error);
            //setIsLoading(false)

        }
    }
 


    const fetchFilterCountrByRegionData = async (region) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
            const data = response.data;
            setCountryData(data);
            setIsLoading(false);
        } catch (error) {
            console.log('Error response', error.response);
            setIsError('No Results',error);

        }
    }

    const fetchDisplayCountryData = async (country) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://restcountries.com/v2/name/${country}`)
            const data = response.data;
            setCountryDetails(data);
            setIsLoading(false);
        } catch (error) {
            console.log('Error response', error.response);
            setIsError('No Results',error);

        }
    }    



  return { isLoading, countryData, countryDetails,isError, fetchCountryData, 
    fetchSearchCountryData, fetchFilterCountrByRegionData,
    fetchDisplayCountryData }
}

export default useCountryDataApi; 