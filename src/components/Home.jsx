import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfig from "./ParticlesConfig";
import "./Home.scss";
import { Link } from "react-router-dom";
import logo from "../components/logo.jpg";


const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };



  return (
    <div>
      <Particles
        id="particles"
        options={ParticlesConfig}
        init={particlesInit}
      />
      <div className="hero">
        <h1>Hi, I,m Abinash</h1>
        <br />
        <h2>front-end developer</h2>
      </div>
    </div>
  );
};

export default Home;
