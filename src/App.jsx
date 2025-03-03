
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Footer } from "./component/Footer";
import Home from "./component/Home";
import { Navbar } from "./component/Navbar";
import { Pastries } from "./component/Pastries";
import { BreadDesserts } from "./component/BreadDesserts";
import { Beverages } from "./component/Beverages";
import { OurIdentity } from "./component/OurIdentity";
import { Reachout } from "./component/Reachout";


function App() {

  return (
    <>
    <Router basename="/bakery">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/pastries" element={<Pastries />}/>
      <Route path="/bread-desserts" element={<BreadDesserts />}/>
      <Route path="/beverages" element={<Beverages />}/>
      <Route path="/our-identity" element={<OurIdentity />}/>
      <Route path="/reach-out" element={<Reachout />}/>

    </Routes>
    
    <Footer/>
    </Router>
    
    </>
  )
}

export default App
