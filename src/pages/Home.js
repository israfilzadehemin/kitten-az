import React from "react";
import About from "../components/About";
import Advice from "../components/Advice";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <About />
      <Services />
      <Advice />
    </div>
  );
};

export default Home;
