
import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/src/assets/images/Bakereies_Logo-removebg-preview.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
       <nav className="bg-[#5D4037] text-white p-2 flex justify-around  items-center relative">
    
      <a href="home">
        <img src={logo} alt="Sweet Dessert House Cake" className="w-40" />
      </a>

      <ul className="hidden md:flex  text-lg font-bold gap-12">
        <li className="hover:text-[#F8BBD0]"><a href="/#/home">HOME</a></li>
        <li className="hover:text-[#F8BBD0]"><a href="/#/themed">THEMED</a></li>
        <li className="hover:text-[#F8BBD0]"><a href="/#/pastries">PASTRIES</a></li>
        <li className="hover:text-[#F8BBD0]"><a href="/#/bread-desserts">BREAD/DESSERTS</a></li>
        <li className="hover:text-[#F8BBD0]"><a href="/#/beverages">BEVERAGES</a></li>
        <li className="hover:text-[#F8BBD0]"><a href="/#/our-identity">OUR IDENTITY</a></li>
        <li className="hover:text-[#F8BBD0]"><a href="/#/reach-out">REACH OUT</a></li>
      </ul>

    
      <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

    
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#5D4037] flex flex-col items-center text-lg font-bold p-4 space-y-4 md:hidden z-50 animate-slideInDown">
          <a href="home" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="themed" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>THEMED</a>
          <a href="pastries" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>PASTRIES</a>
          <a href="bread-desserts" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>BREAD/DESSERTS</a>
          <a href="beverages" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>BEVERAGES</a>
          <a href="our-identity" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>OUR IDENTITY</a>
          <a href="reach-out" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>REACH OUT</a>
        </div>
      )}
    </nav>
      
    </div>
  )
}
