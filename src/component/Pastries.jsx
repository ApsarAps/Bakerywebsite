import React from "react";
import PastryCard from "./pastrycard";

import redVelvet from "/src/assets/images/Rich-Red velvet.webp";
import chocoTruffle from "/src/assets/images/5.jpeg";
import blackforest from "/src/assets/images/Blackforest Pastry And Dessert.jpeg";
import brownie from "/src/assets/images/MOST AMAZING Small Batch Fudge Brownies.jpeg";
import pineapple from "/src/assets/images/pineapplepastry.jpg";
import mango from "/src/assets/images/Mango-Triangle-pastry.jpg";
import chocoLava from "/src/assets/images/Chocolate-Lava-Cakes-1.jpg";
import deathChocolate from "/src/assets/images/Deathbychocolate-_1.webp";
import strawberryJar from "/src/assets/images/Red Velvet Cupcakes - The Perfect Valentine's Day Dessert Recipe.jpeg";
import hazelnut from "/src/assets/images/images (1).jpeg";
import redVelvetCupcake from "/src/assets/images/Red Velvet Cupcakes - The Perfect Valentine's Day Dessert Recipe.jpeg";
import assortedCupcake from "/src/assets/images/15.jpeg";
import { EnquiryForm } from "./EnquiryForm";
import { SearchBar } from "./searchBar";

const pastries = [
  { id: 1, name: "Rich Red Velvet Pastry", price: 150, image: redVelvet },
  { id: 2, name: "Choco Truffle Pastry", price: 160, image: chocoTruffle },
  { id: 3, name: "Blackforest Pastry", price: 140, image: blackforest },
  { id: 4, name: "Rich Brownie", price: 120, image: brownie },
  { id: 5, name: "Pineapple Pastry", price: 130, image: pineapple },
  { id: 6, name: "Mango Pastry", price: 135, image: mango },
  { id: 7, name: "Choco Lava Cake", price: 180, image: chocoLava },
  { id: 8, name: "Death By Chocolate", price: 200, image: deathChocolate },
  { id: 9, name: "Strawberry Jar", price: 170, image: strawberryJar },
  { id: 10, name: "Hazelnut Cheesecake Jar", price: 190, image: hazelnut },
  { id: 11, name: "Red Velvet Cup Cakes", price: 160, image: redVelvetCupcake },
  { id: 12, name: "Assorted Flavour Cup Cake", price: 175, image: assortedCupcake },
];

export const Pastries = () => {
  return ( 
    <div>
      <SearchBar />
      <h2 className="text-3xl text-[#5D4037] underline font-bold text-center mb-6"> PASTRIES</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pastries.map((pastry) => (
          <PastryCard key={pastry.id} pastry={pastry} />
        
        
        ))}
      </div>
      <EnquiryForm/>
    </div>
  );
};

