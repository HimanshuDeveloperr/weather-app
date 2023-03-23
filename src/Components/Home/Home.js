import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cold from "../../Assets/cold.jpg";
import hot from "../../Assets/hot.jpg";
import Description from "../Card/Description";
import { getFormattedWeatherData } from "../DataFetch/FetchingData";
import "./Home.css";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  useEffect(()=>{
    const fetchWeatherData=async ()=>{
      const data=await getFormattedWeatherData('paris')
      console.log(data)
    }
    fetchWeatherData()
  },[])



  return (
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
      
      <div>
        <Description></Description>
      </div>
      
     
      <div className="current-date">
  <p style={{display:'inline-block'}}>{currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
   <div style={{marginLeft:'100px'}}>
        <span className="temp">32°c</span>
     
     {currentTime.toLocaleTimeString()}
    </div>
</div>

    </div>
  );
};

export default Home;
