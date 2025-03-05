import React, { useState } from "react";

const CakeCards = ({ cake }) => {  
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-4 transform transition-all duration-500 hover:scale-105 Font-[Roboto] rounded-lg flex flex-col items-center">
      <div className="w-full flex justify-center">
        <img 
          src={cake.image} 
          alt={cake.name} 
          className="w-full h-78 rounded-t-2xl object-cover"
          style={{ background: "none" }}
        />
      </div>

      <div className="bg-white w-full p-4 rounded-b-2xl flex flex-col items-center shadow-md">
        <h3 className="text-lg text-[#5D4037] font-bold text-center">{cake.name}</h3>
        
        <div className="flex items-center mt-2">
          <span className="bg-[#F8BBD0] text-xl font-bold text-[#5D4037] px-4 outline-1 outline-[#5D4037] py-0.5 rounded-lg">
            {cake.weight}
          </span>
          
          <div className="flex px-2 py-1 outline-1 items-center ml-5">
            <button
              className="px-2 font-bold border-2 rounded-2xl"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <span className="px-2 font-bold text-xl border-none">{quantity}</span>
            <button
              className="px-2 font-bold border-2 rounded-2xl"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 italic mt-1">Price varies as per KG</p>  
        <p className="text-xl font-bold mt-2">₹{cake.price}.00</p>
        <button className="mt-2 transition-all duration-400 ease-in-out hover:bg-[#F8BBD0] hover:text-[#5D4037] px-4 font-bold bg-[#5D4037] text-[#F8BBD0] py-2 rounded-md">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default CakeCards;
