import React from 'react';
import './App.css';
import Header from "./Components/header/header"
import Aboutus from "./Components/about-us/aboutus"
import Services from "./Components/servicios/servicios"
//import Servicios from "./Components/servicios/servicios"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Lottie from "lottie-react"
import animationData from './assets/76723-robot-wave.json'




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Header element={<Lottie animationData={animationData} />} />} />
        <Route path="/about-us" element={<Aboutus element={<Lottie animationData={animationData} />} />} />
        <Route path="/services" element={<Services element={<Lottie animationData={animationData} />} />} />
      </Routes>

    </div>
  </BrowserRouter>
  );
}

export default App;
