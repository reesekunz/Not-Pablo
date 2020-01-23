import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content-container">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
        <Footer />
    </div>
  );
}

export default App;
