
import React from "react";
import logo from "/src/assets/images/Bakereies_Logo-removebg-preview.png";

export const Navbar = () => {
 
  return (
    <div>
        <nav className="bg-[#5D4037] text-white p-2 flex justify-between items-center">
        <div className="flex items-center justify-between gap-4">
          <a href="home">
          <img
            src={logo}
            alt="Sweet Dessert House Cake"
            className="w-50"
          />
            </a>
          <ul className="hidden   text-xl font-bold md:flex gap-14">
            <li className=" hover:text-[#F8BBD0]"><a href="home">HOME</a></li>
            <li className=" hover:text-[#F8BBD0]"><a href="#themed">THEMED</a></li>
            <li className=" hover:text-[#F8BBD0]"><a href="pastries">PASTRIES</a></li>
            <li className=" hover:text-[#F8BBD0]"><a href="bread-desserts">BREAD/DESSERTS</a></li>
            <li className=" hover:text-[#F8BBD0]"><a href="beverages">BEVERAGES</a></li>
            <li className=" hover:text-[#F8BBD0]"><a href="our-identity">OUR IDENTITY</a></li>
            <li className=" hover:text-[#F8BBD0]"><a href="reach-out">REACH OUT</a></li>
          </ul>
        </div>
        
          
      </nav>
      
    </div>
  )
}
