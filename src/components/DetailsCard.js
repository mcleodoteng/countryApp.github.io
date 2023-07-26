import React from 'react'
import { GetThemeValues } from '../components/ContextTheme';

const DetailsCard = ({countryData}) => {
    const {darkTheme} = GetThemeValues();
  return (
    <div>
        <div className='mt-12'>
            <div className=' w-[90%] mx-auto mt-8 rounded-md font-sans lg:flex lg:w-[100%] md:flex md:w-[90%] sm:w-[60%]'>
                {/* Flag Display*/}
                <div className='bg-black w-[100%] lg:w-[35%] lg:mx-32 lg:h-80 md:w-[43%] md:mx-16 md:h-80 sm:w-[90%] sm:mx-auto sm:h-80 h-56 rounded-sm mx-auto p-4'>
                    <img src={countryData?.flags.png} alt= {countryData?.name} className='h-56 -mt-4 w-96 sm:h-72 md:w-[410px] md:h-[320px] lg:w-[550px]'/>
                </div>
                {/* Details of Flag */}

                <div className='mt-6 mx-2 lg:-mx-10 md:-mx-5 md:mt-0 sm:mx-5'>
                    
                    <h1 className= {`${darkTheme ? "text-white" : "bg-[#f2f2f2]"} font-bold text-xl`}>{countryData?.name}</h1>

                    <div className='mt-5 flex flex-col gap-3'>
                        <div className='lg:flex md:flex'>
                            <div className={`${darkTheme ? "text-white" : "bg-[#f2f2f2]"} flex flex-col gap-3`}>
                                <p className= 'font-normal'>Native Name: <span className='font-extralight'>{countryData?.nativeName}</span></p>

                                <p className='font-normal'>Population: <span className='font-extralight'>{countryData?.population}</span></p>
                                
                                <p className='font-normal'>Region: <span className='font-extralight'>{countryData?.region}</span></p>

                                <p className='font-normal'>Sub Region: <span className='font-extralight'>{countryData?.subregion}</span></p>
                                
                                <p className='font-normal'>Capital: <span className='font-extralight'>{countryData?.capital}</span></p>

                            </div>
                            
                            <div className= {`${darkTheme ? "text-white" : "bg-[#f2f2f2]"} mt-10 flex flex-col gap-3 lg:mt-0 lg:mx-16 md:mt-0 md:mx-16 `}>
                                <p className='font-normal'>Top Level Domain: <span className='font-extralight'>{countryData?.topLevelDomain[0]}</span></p>

                                <p className='font-normal'>Currencies: <span className='font-extralight'>{countryData?.currencies[0].name} ( {countryData?.currencies[0].symbol} )</span></p>
                            
                                <p className='font-normal'>Languages: <span className='font-extralight'>{countryData?.languages[0].name} </span></p>
                            </div>
                        </div>

                        <div className='mt-10 lg:flex md:flex '>
                            <h1 className={`${darkTheme ? "text-white" : "bg-[#f2f2f2]"} font-semibold text-lg`}>Border Countries:</h1>
                            <div className='flex justify-between ml-6 mt-5 w-[80%] gap-4 lg:w-[60%] lg:mx-2 lg:mt-0 md:w-[60%] md:mx-2 md:mt-0 font-thin'>
                                <p className={`${darkTheme ? "bg-[#2b3945] text-white shadow-black" : "bg-[#f2f2f2]"} bg-white px-4 py-1  shadow-lg`}>{countryData?.borders[0]}</p>
                                <p className={`${darkTheme ? "bg-[#2b3945] text-white shadow-black" : "bg-[#f2f2f2]"} bg-white px-4 py-1  shadow-lg`}>{countryData?.borders[1]}</p>
                                <p className={`${darkTheme ? "bg-[#2b3945] text-white shadow-black" : "bg-[#f2f2f2]"} bg-white px-4 py-1  shadow-lg`}>{countryData?.borders[2]}</p>
                            </div>
                        </div>
                        <br/>
                        <br/>


                        
                        
                    </div>
                
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default DetailsCard