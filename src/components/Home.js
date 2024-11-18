import React from "react";
import "./Home.css";
import profileBackground from "../images/home_background_image.png"; // Ensure the path is correct

const Home = () => {
  return (
    <section id="home" className="full-screen">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${profileBackground})`,
        }}
      ></div>
      <div className="content">
        <h1>Hey, I'm Dan. It's nice to meet you!</h1>
        <h1>FYI this website is a WIP</h1>
      </div>
    </section>
  );
};

export default Home;
