import React from "react";
import { useState,useRef } from "react";
import cake1 from "/src/assets/images/50.jpeg";
import cake2 from "/src/assets/images/51.webp";
import cake3 from "/src/assets/images/53.jpeg";
import cake4 from "/src/assets/images/52.jpeg";
import cake5 from "/src/assets/images/60.jpeg";
import cake6 from "/src/assets/images/56.jpeg";
import cake7 from "/src/assets/images/57.jpeg";
import cake8 from "/src/assets/images/58.jpeg";
import cake9 from "/src/assets/images/55.webp";
import img1 from "../assets/images/48.jpeg";
import img2 from "../assets/images/44.jpeg";
import img3 from "../assets/images/43.jpeg";
import img4 from "../assets/images/20 Fun Baby.jpeg";
import img5 from "../assets/images/29.jpeg";
import img6 from "../assets/images/18.jpeg";
import img7 from "../assets/images/45.jpeg";
import img8 from "../assets/images/27.jpeg";
import img9 from "../assets/images/41.jpeg";
import img10 from "../assets/images/42.jpeg";
import img11 from "../assets/images/24.jpeg";
import img12 from "../assets/images/37.jpeg";
import { EnquiryForm } from "./EnquiryForm";
import { SearchBar } from "./searchBar";

const cakeImages = [cake1, cake2, cake3, cake4, cake5, cake6,cake7,cake8,cake9];
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

export default function Home() {
  
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    sliderRef.current.scrollLeft -= e.movementX;
  };


  return (
    <div className="font-[Roboto] min-h-screen">
      <SearchBar />
        <div
        ref={sliderRef}
        className={`p-4 flex gap-6 select-none overflow-hidden ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Cake"
            className="h-100 w-[270px] object-cover rounded-2xl flex-shrink-0"
          />
        ))}
      </div>


      
      
      <div className="text-center p-6">
        <h2 className="text-4xl text-[#5D4037] font-bold underline">OUR TALE</h2>
        <p className="text-[#5D4037] mt-10 leading-10 text-2xl   mx-auto">
        Egg-free. Vegetarian. Vegan. We Promise! <br />
        Keeping taste and texture our highest priority in construction of our desserts, we bring to you a range of healthy delights that celebrates any occasion in your calendar! There's something for everyone here... From petite desserts to rich cakes to themed cake with celebrations! We make you what you want, in the flavors and flour as per your wish. Pleased to have won many hearts with our vegetarian flag soaring high, we continue with our motto of creating egg-free desserts without any compromise.
        </p>
      </div>
      
      <h2 className="text-4xl text-[#5D4037] text-center my-8 font-bold underline">IN VOGUE</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
  {[
    "BISCOFF DRIP CAKE", "RASPBERRY CHEESECAKE", "RASAMALAI CAKE",
    "ELANEER PUDDING", "LEMON CAKE", "FERRERO ROCHER CAKE",
    "KUNAFA CHOCOLATE", "ROSE MILK CAKE", "CHOCO DREAM CAKE"
  ].map((item, index) => (
    <div key={index} className="p-2 rounded overflow-hidden transform transition-transform duration-300 hover:scale-105 group">
      <div className="relative overflow-hidden">

        <img
          src={cakeImages[index]}
          alt={item}
          className="h-80 w-full object-cover rounded transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="bg-[#5D4037] py-4 w-full absolute bottom-0 left-0">
          <h3 className="text-center text-xl sm:text-2xl text-white font-bold transform transition-all duration-500 ease-in-out group-hover:translate-x-4 group-hover:scale-105">
            {item}
          </h3>
        </div>
      </div>
    </div>
  ))}
</div>

       <EnquiryForm/>





    </div>
    
  );
}


