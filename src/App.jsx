
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import { Pastries } from "./component/Pastries";
import { BreadDesserts } from "./component/BreadDesserts";
import { Beverages } from "./component/Beverages";
import { OurIdentity } from "./component/OurIdentity";
import { Reachout } from "./component/Reachout";
import { ThemeCakes } from "./component/ThemeCakes";
import { Footer } from "./component/pages/Footer";
import { Navbar } from "./component/pages/Navbar";




function App() {

  return (

    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/pastries" element={<Pastries />}/>
      <Route path="/bread-desserts" element={<BreadDesserts />}/>
      <Route path="/beverages" element={<Beverages />}/>
      <Route path="/our-identity" element={<OurIdentity />}/>
      <Route path="/reach-out" element={<Reachout />}/>
      <Route path="/themed" element={<ThemeCakes />}/>

    </Routes>
    
    <Footer />
    </>
    
  
  )
}

export default App
