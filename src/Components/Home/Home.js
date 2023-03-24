

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cold from "../../Assets/cold.jpg";
import hot from "../../Assets/hot.jpg";
import Description from "../Card/Description";
import City from "../Cities/City";
import { getFormattedWeatherData } from "../DataFetch/FetchingData";
import "./Home.css";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const [weather,setWeather]=useState(null)

  const [units,setUnits]=useState('metric')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData('london',units);
      console.log('Weather data:', data);
      setWeather(data);
    };
    fetchWeatherData();
  }, [units]);
  
const ButtonClick=(unit)=>{
  
  setUnits(unit)
  
  
}

  return (
    <>
    <div className="app" style={{ backgroundImage: `url(${cold})` }}>
      <div>
        <span>

        <NavLink to='/' className='nav-link'>Home</NavLink>
        </span>
        <span>
        <NavLink className='nav-link'>Cities</NavLink>

        </span>
        <span>

        <NavLink className='nav-link'>News</NavLink>
        </span>

      </div>
      {weather && <Description weatherData={weather}></Description>}
      {weather && weather.temp && (
  <div className="current-date">
    <p style={{ display: 'inline-block' }}>
      {currentTime.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </p>
    <div style={{ marginLeft: '100px' }}>
      <span className="temp">{weather.temp.toFixed()}°{units==='metric'?"C":"F"}</span>
      {currentTime.toLocaleTimeString()}
    </div>
  </div>
)}

  
    <div>
      <City onClick={ButtonClick} units={units}></City>
    </div>

    </div>
    </>
  );
};

export default Home;