import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useState } from "react";


export const SearchBar = () => {
     const [search, setSearch] = useState("");
  return (
    <div className='px-4 my-6'>
        <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4 w-full px-4">

  <div className="relative flex-grow max-w-lg">
    <input
      type="text"
      placeholder="Search"
      className="w-full bg-white text-xl font-bold p-3 pl-10 rounded-xl text-gray-400 border"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
  </div>
  <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
    <button className="bg-[#5D4037]  hover:bg-[#F8BBD0]  transition-all duration-400 ease-in-out hover:text-[#5D4037]   font-semibold text-lg text-white px-6 py-3 rounded-2xl w-full md:w-auto">
      ORDER NOW
    </button>
    <button className="bg-[#5D4037]  transition-all duration-400 ease-in-out hover:bg-[#F8BBD0] hover:text-[#5D4037]  font-semibold text-lg text-white px-6 py-3 rounded-2xl w-full md:w-auto">
      LOGIN/SIGN UP
    </button>
  </div>
</div>
    
    


        

      </div>
    </div>
  )
}
