import React, { useState, useEffect } from "react";
import cold from "../../Assets/cold.jpg";
import hot from "../../Assets/hot.jpg";
import "./Home.css";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${cold})` }}>
      <div>
        <h2>Home</h2>
      </div>
      <div>
        <h2>Cities</h2>
      </div>
      <div>
        <h2>News</h2>
      </div>
      <div className="current-date">
        <p>{currentTime.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Home;
