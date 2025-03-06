import React from 'react'
import { Link } from "react-router-dom"; 
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Email from "/src/assets/images/email-vector-icon-260nw-319044695-removebg-preview.png"
import Contact from "/src/assets/images/images__5_-removebg-preview.png"
import Password from "/src/assets/images/png-clipart-password-computer-icons-security-safety-icon-safety-icon-child-safety-lock-thumbnail-removebg-preview.png"

export const SearchBar = () => {
     const [search, setSearch] = useState("");
     const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="px-4 my-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 w-full px-4">
        <div className="relative flex-grow max-w-lg w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white text-lg md:text-xl font-bold p-3 pl-10 rounded-xl text-gray-400 border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
         <Link to="/themed" className="hover:text-[#F8BBD0]  "> <button className="bg-[#5D4037] hover:bg-[#F8BBD0] transition-all duration-400 ease-in-out  cursor-pointer hover:text-[#5D4037] font-semibold text-lg text-white px-6 py-3 rounded-2xl w-full md:w-auto">
              ORDER NOW
            </button> </Link>
          
          <button 
            className="bg-[#5D4037] transition-all duration-300 cursor-pointer  ease-in-out hover:bg-[#F8BBD0] hover:text-[#5D4037] font-semibold text-lg text-white px-6 py-3 rounded-2xl w-full md:w-auto transform hover:scale-105 active:scale-95"
            onClick={() => setIsModalOpen(true)}
          >
            LOGIN/SIGN UP
          </button>
        </div>
      </div>
    </div>

    {isModalOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-[#5D4037] p-6 sm:p-8 rounded-xl text-center w-full max-w-md shadow-2xl transform transition-all duration-500 ease-out scale-100 opacity-100">
          <h2 className="text-pink-300 font-bold text-lg sm:text-xl mb-4 underline">
            WELCOME TO SWEET DESSERT HOUSE CAKE
          </h2>
          
          <form className="space-y-4">
            <div className="flex items-center bg-white px-2 py-2 rounded-xl">
            <FontAwesomeIcon className='mr-3 w-full max-w-6' icon={faUser} />
              <input type="text" placeholder="Name" className="w-full font-bold outline-none text-gray-700" />
            </div>
            <div className="flex items-center bg-white px-2 py-2 rounded-xl">
            <img src={Email} className='w-full max-w-6 mr-3' alt="" />
              <input type="email" placeholder="Email" className="w-full font-bold outline-none text-gray-700" />
            </div>
            <div className="flex items-center bg-white px-2 py-2 rounded-xl">
            <img src={Contact} className='w-full max-w-6 mr-3' alt="" />
              <input type="text" placeholder="Mobile" className="w-full font-bold outline-none text-gray-700" />
            </div>
            <div className="flex items-center bg-white px-2 py-2 rounded-xl">
            <img src={Password} className='w-full max-w-6 mr-3' alt="" />
              <input type="password" placeholder="Password" className="w-full font-bold outline-none text-gray-700" />
            </div>
            
            <button type="submit" className="bg-[#F8BBD0] text-[#5D4037] font-bold px-4 py-2 rounded-2xl mt-4">
              LOGIN/SIGN UP
            </button>
          </form>
          
          <button className="mt-4 text-white underline" onClick={() => setIsModalOpen(false)}>
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);
};