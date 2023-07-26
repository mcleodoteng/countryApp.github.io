import React from 'react'
import useCountryDataAPI from "./useCountryDataApi";

export let countryContext = React.createContext();

const page = () => {
    const countryDataAPI = useCountryDataAPI;
  return (
    <div>
    
        <countryContext.Provider value={countryDataAPI}>
            
        </countryContext.Provider>
    
    </div>
  )
}

export default page