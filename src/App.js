import React from "react";
import "./App.css";
import About from "./components/About";
import Advice from "./components/Advice";
import Footer from "./components/Footer";
import RandomCards from "./components/RandomCards";
import Services from "./components/Services";
import Navigation from "./components/Navigation";
import BigCard from "./components/BigCard";
import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";
import CardList from "./pages/CardList";

function App() {
  return (
    <div className="App">
      <BigCard />
    </div>
  );
}

export default App;
