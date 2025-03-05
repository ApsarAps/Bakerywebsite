import React, { useState } from "react";
import CakeCards from "./CakeCards"; 
import expressTheme from "/src/assets/images/kit_kat_cake.jpg";
import birthdayTheme from "/src/assets/images/Birthday_cakes.jpg";
import weddingTheme from "/src/assets/images/wedding.jpeg";
import heartTheme from "/src/assets/images/21.jpeg";
import girlsTheme from "/src/assets/images/19.jpeg";
import boysTheme from "/src/assets/images/23.jpeg";
import { FaSearch } from "react-icons/fa";
import expressCake1 from "/src/assets/images/chocolate-truffle-cake-845926.jpg";
import expressCake2 from "/src/assets/images/blasty_blueberry_1_5.jpg";
import expressCake3 from "/src/assets/images/blackforest.jpg";
import expressCake4 from "/src/assets/images/redvelvet_cake.jpg";
import expressCake5 from "/src/assets/images/nutty_choco_delight.jpg";
import expressCake6 from "/src/assets/images/50.jpeg";
import expressCake7 from "/src/assets/images/50.jpeg";
import expressCake8 from "/src/assets/images/kit_kat_cake.jpg";
import expressCake9 from "/src/assets/images/b0c2bae9-f44e-4204-a039-cf5e5cccce99.jpeg";
import expressCake10 from "/src/assets/images/Walnut Caramel Mirror Cake with Caramel Mirror Glaze.jpeg";
import expressCake11 from "/src/assets/images/Sprinkle Birthday Cake _ Hungry Happenings.jpeg";
import expressCake12 from "/src/assets/images/Rasmalai cake.jpeg";
import birthdayCake1 from "/src/assets/images/14.jpeg";
import birthdayCake2 from "/src/assets/images/Purple Rosette Birthday Cake with Buttercream Flowers.jpeg";
import birthdayCake3 from "/src/assets/images/Princess Birthday Cakes.jpeg";
import birthdayCake4 from "/src/assets/images/11.jpeg";
import birthdayCake5 from "/src/assets/images/25+ Rainbow Cakes Ideas That Look Too Perfect to Eat.jpeg";
import birthdayCake6 from "/src/assets/images/4.jpeg";
import birthdayCake7 from "/src/assets/images/b30eebc9-b3b8-4d98-a0de-7b23521802ed.jpeg";
import birthdayCake8 from "/src/assets/images/ba87803f-0ac9-4cad-96f0-a030aa7bf636.jpeg";
import weddingCake1 from "/src/assets/images/wedding.jpeg";
import weddingCake2 from "/src/assets/images/29.jpeg";
import weddingCake3 from "/src/assets/images/Engagement cake.jpeg";
import weddingCake4 from "/src/assets/images/e2c6a4dc-a077-42b8-9ba3-d9546d6ee48d.jpeg";
import weddingCake5 from "/src/assets/images/40.jpeg";
import weddingCake6 from "/src/assets/images/a88f9426-e9f7-4c94-a08e-1524e5f272c3.jpeg";
import weddingCake7 from "/src/assets/images/0353fccd-9ebd-4e12-8737-07f3396edf1f.jpeg";
import weddingCake8 from "/src/assets/images/Rosettes and Roses White Chocolate Strawberry….jpeg";
import girlsCake1 from "/src/assets/images/Birthday cake.jpeg";
import girlsCake2 from "/src/assets/images/9.jpeg";
import girlsCake3 from "/src/assets/images/13.jpeg";
import girlsCake4 from "/src/assets/images/26.jpeg";
import girlsCake5 from "/src/assets/images/a82e3e4b-cec9-435c-9e6d-9a7acd7734b5.jpeg";
import girlsCake6 from "/src/assets/images/31.jpeg";
import girlsCake7 from "/src/assets/images/Birthday Cake Design for Girl Kid with Name Generator - Name Birthday Cakes - Write Name on Cake Images.jpeg";
import girlsCake8 from "/src/assets/images/12.jpeg";
import boysCake1 from "/src/assets/images/23.jpeg";
import boysCake2 from "/src/assets/images/50.jpeg";
import boysCake3 from "/src/assets/images/Its a wild 1!.jpeg";
import boysCake4 from "/src/assets/images/Cakes For Boys at Loisnicholson.jpeg";
import boysCake5 from "/src/assets/images/Nautical Sailboat Cake with Ombre Waves and Anchor Details.jpeg";
import boysCake6 from "/src/assets/images/36.jpeg";
import boysCake7 from "/src/assets/images/Baked with love 💕 Eggless Redvelvet cake….jpeg";
import boysCake8 from "/src/assets/images/17.jpeg";
import heartcake1 from "/src/assets/images/Easy Heart Shaped Cake Tutorial - Sugar & Sparrow.jpeg";
import heartcake2 from "/src/assets/images/Heart cake.jpeg";
import heartcake3 from "/src/assets/images/33.jpeg";
import heartcake4 from "/src/assets/images/Buy and Send All Types of Cakes Online - FNP.jpeg";
import heartcake5 from "/src/assets/images/Vintage Cake Toppers_ Add Charm and Character to Your Desserts.jpeg";
import heartcake6 from "/src/assets/images/Pink Heart Cake.jpeg";
import heartcake7 from "/src/assets/images/21.jpeg";
import heartcake8 from "/src/assets/images/Heart Shape Anniversary Cakes Ideas __ New Valentine's Day cakes _ wedding cakes ideas.jpeg";
import logo1 from"/src/assets/images/6021967-removebg-preview.png"
import logo2 from"/src/assets/images/silver-star-five-points-design_88791-59.avif"
import logo3 from"/src/assets/images/pngtree-vector-gold-star-with-circle-png-image_13064659-removebg-preview.png"
import { EnquiryForm } from "./pages/EnquiryForm";


const themes = [
  { name: "Express", image: expressTheme },
  { name: "Birthday", image: birthdayTheme },
  { name: "Wedding", image: weddingTheme },
  { name: "Heart", image: heartTheme },
  { name: "Girl's", image: girlsTheme },
  { name: "Boy's", image: boysTheme },
];

const cakeData = {
  
    Express: [
      { id: 1, name: "Premium Choco Truffle Cake", weight: "1 Kg", price: 690, image: expressCake1 },
      { id: 2, name: "Blastly Blueberry Cake", weight: "1 Kg", price: 540, image: expressCake2 },
      { id: 3, name: "Blackforest Cake", weight: "1 Kg", price: 540, image: expressCake3 },
      { id: 4, name: "RedVelvet Cake", weight: "1 Kg", price: 620, image: expressCake4 },
      { id: 5, name: "Nutty Choco Delight Cake", weight: "1 Kg", price: 640, image: expressCake5 },
      { id: 6, name: "ButterScotch Sensation", weight: "1 Kg", price: 640, image: expressCake6 },
      { id: 7, name: "Rosemilk Pistachio Cake", weight: "1 Kg", price: 640, image: expressCake7 },
      { id: 8, name: "Kit Kat Cake", weight: "1 Kg", price: 640, image: expressCake8 },
      { id: 9, name: "WhiteForest Cake", weight: "1 Kg", price: 540, image: expressCake9 },
      { id: 10, name: "Walnut Caramel Cake", weight: "1 Kg", price: 690, image: expressCake10 },
      { id: 11, name: "Sprinkle Birthday Cake", weight: "1 Kg", price: 690, image: expressCake11 },
      { id: 12, name: "Rasamalai Cake", weight: "1 Kg", price: 690, image: expressCake12 }
    
    ],
    
    Birthday: [
      { id: 13, name: "Adorable Birthday Cake", weight: "4 kg", price: 2690, image: birthdayCake1 },
      { id: 14, name: "Purple Themed Cake", weight: "1 kg", price: 1540, image: birthdayCake2 },
      { id: 15, name: "Cartoon Theme Cake", weight: "3 kg", price: 2890, image: birthdayCake3 },
      { id: 16, name: "Unicorn Fantasy Cake", weight: "2 kg", price: 1990, image: birthdayCake4 },
      { id: 17, name: "Butterfly Dream Cake", weight: "1.5 kg", price: 1690, image: birthdayCake5 },
      { id: 18, name: "Confetti Celebration", weight: "1 kg", price: 1590, image: birthdayCake6 },
      { id: 19, name: "Rainbow Sprinkles Cake", weight: "2 kg", price: 2100, image: birthdayCake7 },
      { id: 20, name: "Chocolate Drip Cake", weight: "3 kg", price: 2800, image: birthdayCake8 },
    ],
  
    Wedding: [
      { id: 21, name: "Pillar of Love", weight: "5 Kg", price: 5690, image: weddingCake1 },
  { id: 22, name: "Majestic Love Symphony", weight: "1 Kg", price: 3540, image: weddingCake2 },
  { id: 23, name: "Happily, Ever After", weight: "1 Kg", price: 3540, image: weddingCake3 },
  { id: 24, name: "White Pearl Affair", weight: "3 Kg", price: 5620, image: weddingCake4 },
  { id: 25, name: "My Heart, Forever Yours", weight: "1 Kg", price: 2640, image: weddingCake5 },
  { id: 26, name: "Tied With Love", weight: "1 Kg", price: 1240, image: weddingCake6 },
  { id: 27, name: "Rose Pink Celebration", weight: "1 Kg", price: 2240, image: weddingCake7 },
  { id: 28, name: "Wedding Cake", weight: "1 Kg", price: 2240, image: weddingCake8 },

    ],
  
    Heart: [
      { id: 29, name: "Rose Glossy Love", weight: "1 kg", price: 2690, image: heartcake1 },
  { id: 30, name: "Purple Celebration", weight: "1 kg", price: 3540, image: heartcake2 },
  { id: 31, name: "Melt My Heart", weight: "1 kg", price: 3540, image: heartcake3 },
  { id: 32, name: "Choco Gem Heart Delight", weight: "1 kg", price: 2620, image: heartcake4 },
  { id: 33, name: "Two Hearts, One Love", weight: "1 kg", price: 2640, image: heartcake5 },
  { id: 34, name: "Pink Heart Cake", weight: "1 kg", price: 2640, image: heartcake6 },
  { id: 35, name: "Red Velvet Heart Cake", weight: "1 kg", price: 2640, image: heartcake7 },
  { id: 36, name: "Heart Fondant Cake", weight: "1 kg", price: 2640, image: heartcake8 },
    ],
  
    "Girl's": [
      { id: 37, name: "Rose Pinky Love", weight: "1 kg", price: 2690, image: girlsCake1 },
      { id: 38, name: "Princess Celebration", weight: "1 kg", price: 3540, image: girlsCake2 },
      { id: 39, name: "Mermaid Cake", weight: "1 kg", price: 3540, image: girlsCake3 },
      { id: 40, name: "Ice Cream Delight Cake", weight: "1 kg", price: 2620, image: girlsCake4 },
      { id: 41, name: "Butterfly Wing Cake", weight: "1 kg", price: 2640, image: girlsCake5 },
      { id: 42, name: "Butterfly Rainbow Cake", weight: "1 kg", price: 2640, image: girlsCake6 },
      { id: 43, name: "Name Generator Cake", weight: "1 kg", price: 2640, image: girlsCake7 },
      { id: 44, name: "Pretty Doll Cake", weight: "1 kg", price: 2640, image: girlsCake8 },
    
    ],
  
    "Boy's": [
      { id: 45, name: "Spiderman Cake", weight: "1 kg", price: 2690, image: boysCake1 },
      { id: 46, name: "Football Theme Cake", weight: "1 kg", price: 3540, image: boysCake2 },
      { id: 47, name: "Jungle Cake", weight: "1 kg", price: 3540, image: boysCake3 },
      { id: 48, name: "Car Race Theme Cake", weight: "1 kg", price: 2620, image: boysCake4 },
      { id: 49, name: "Nautical Sail Boat Cake", weight: "1 kg", price: 2640, image: boysCake5 },
      { id: 50, name: "Batman Theme Cake", weight: "1 kg", price: 2640, image: boysCake6 },
      { id: 51, name: "Mickey Mouse Cake", weight: "1 kg", price: 2640, image: boysCake7 },
      { id: 52, name: "Football Theme Cake", weight: "1 kg", price: 2640, image: boysCake8 },
    
    ],
  
  };
export const ThemeCakes = () => {
  const [selectedCategory, setSelectedCategory] = useState("Express");
       const [search, setSearch] = useState("");
       const [showDiscounts, setShowDiscounts] = useState(false);


  return (
    <div className="px-4 py-8">
      <div className="relative">
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

            <button
              className="bg-[#5D4037] hover:bg-[#F8BBD0] transition-all duration-400 ease-in-out hover:text-[#5D4037] font-semibold text-lg text-white px-6 py-3 rounded-2xl w-full md:w-auto"
              onClick={() => setShowDiscounts(true)}
            >
              Discounts
            </button>
          </div>
        </div>

        {showDiscounts && (
          <div className="fixed inset-0 flex items-center  justify-center z-50 p-4">
            <div
              className="relative w-full max-w-[700px]  bg-no-repeat bg-center bg-cover rounded-xl text-center shadow-2xl transform transition-all duration-500 ease-out scale-100 p-4 sm:p-6 md:p-8"
              style={{
                backgroundImage: "url('/src/assets/images/breads-pastries-christmas-cake-wooden-background-heart-picture-bakery-shop-valentines-day-65833657.webp')",
              }}
            >
              <div className="absolute  inset-0 bg-[#F8BBD0] opacity-60 rounded-xl"></div>
              <div className="relative z-10">
                <div className="bg-[#5D4037] text-white rounded-xl p-3 mb-4">
                  <div className="flex flex-col  sm:flex-row items-center justify-between gap-4">
                    <img src="" alt="logo" className="w-12 h-12 sm:w-16 sm:h-16" />
                    <h2 className="text-white font-bold text-lg sm:text-lg text-center">
                      GET 100 ADDITIONAL POINTS ON YOUR FIRST ONLINE ORDER.
                    </h2>
                  </div>
                  <p className="text-md sm:text-md font-semibold mt-2">
                    Now earn Points on every order and use them on your next one.
                  </p>
                  <h2 className="text-md sm:text-md font-bold mt-2">1 Point = 1 Rupee</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="bg-[#5D4037] sm:p-2 text-white p-4 rounded-xl flex flex-col items-center">
                    <img src={logo1} alt="Welcome Gift" className="w-14 h-14 sm:w-16 sm:h-16 mb-2" />
                    <p className="font-bold text-lg underline">Welcome Gift</p>
                    <p className="text-sm sm:text-base text-center">Get 100 Points on your first order</p>
                  </div>

                  <div className="bg-[#5D4037] text-white  p-4 rounded-xl flex flex-col items-center">
                    <img src={logo2} alt="Vanilla" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-2" />
                    <p className="font-bold text-lg underline">Vanilla</p>
                    <p className="text-sm sm:text-base text-center">Get Points worth 10% of your order amount</p>
                    <p className="text-sm sm:text-base text-center">Applicable for <strong>1st to 8th order</strong></p>
                  </div>

                  <div className="bg-[#5D4037] text-white p-4 rounded-xl flex flex-col items-center">
                    <img src={logo3} alt="Saffron" className="w-14 h-14 sm:w-16 sm:h-16 mb-2" />
                    <p className="font-bold text-lg underline">Saffron</p>
                    <p className="text-sm sm:text-base text-center">Get Points worth <strong>20%</strong> of your order</p>
                    <p className="text-sm sm:text-base text-center">Applicable for <strong>9th order and onwards</strong></p>
                  </div>
                </div>

                <div className="mt-4 bg-[#5D4037] text-white p-3 rounded-xl font-semibold text-center">
                  GET 10 Points (whenever you submit a feedback)
                </div>

                <button className="mt-4 text-black font-bold underline text-lg" onClick={() => setShowDiscounts(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <h1 className="text-3xl text-[#5D4037] text-center my-8 font-bold underline">THEME CAKES</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
          {themes.map((theme) => (
            <div
              key={theme.name}
              onClick={() => setSelectedCategory(theme.name)}
              className="cursor-pointer transform transition-transform duration-300 hover:scale-110 text-center"
            >
              <img
                src={theme.image}
                alt={theme.name}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg mx-auto"
              />
              <p className="font-semibold mt-1">{theme.name}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl text-[#5D4037] text-center font-bold underline mt-6">{selectedCategory} Cakes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {cakeData[selectedCategory]?.length > 0 ? (
            cakeData[selectedCategory].map((cake) => <CakeCards key={cake.id} cake={cake} />)
          ) : (
            <p className="text-center col-span-3 font-semibold text-lg">No cakes available.</p>
          )}
        </div>
      </div>
      <EnquiryForm />
   
    </div>
  );
};
