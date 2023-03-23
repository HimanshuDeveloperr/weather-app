import React from "react";
import cold from "../../Assets/cold.jpg";
import hot from "../../Assets/hot.jpg";
import './Home.css'

const Home = () => {
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
    </div>
  );
};

export default Home;
