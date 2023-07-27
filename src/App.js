import './App.css';
import { Details } from './components/Details';
import FlagCard from './components/FlagCard';
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import data from './assets/data.json'
import sunIcon from './assets/sun.png'
import moonIcon from './assets/moon-20.png'
import { GetThemeValues } from './components/ContextTheme';




function App() {
  const {darkTheme, themeHandler} = GetThemeValues();

  return (
    <div className={`${darkTheme ? "bg-[#202c36]" : "bg-[rgb(242,242,242)]"} w-[100%]`}>
      <div className= {`${darkTheme ? "bg-[#2b3944] text-white" : "bg-[rgb(255,255,255)]"} flex w-[100%] mt-0 p-5 lg:px-32 sm:px-12 md:px-28 h-[80px] mx-auto font-mono justify-between items-center bg-white `} >
        <h1 className='text-sm font-semibold lg:text-xl md:text-lg'>Where in the World?</h1>
        <div className='flex gap-2 items-center'>
          <img alt='Dark Mode' src={darkTheme ? sunIcon :moonIcon} onClick={themeHandler} className= {`${darkTheme ? " bg-#2B3844" : "bg-#2B3844"} w-[100%] lg:h-7 md:h-6 sm:h-6 h-5 font-extrabold`} /> 
          
          <span className= {`${darkTheme ? " text-white" : "bg-white"} w-[100%] uppercase lg:text-lg text-sm  text-black`}>Mode</span>
        </div>
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<FlagCard/>}/>
          <Route path='/details/:id' element={<Details/>}/> 
        </Routes>
      </Router>

    </div>
  );
}

export default App;
