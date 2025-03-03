import React from 'react'
import PastryCard from './pastrycard';
import mangoTiramisu from "/src/assets/images/Easy Mango Tiramisu.jpeg"; 
import wheatSourdough from "/src/assets/images/WheatSourdoughLoaf02_400x400.webp";
import multigrainLoaf from "/src/assets/images/MultigrainLoaf_400x400.webp";
import frenchBaguette from "/src/assets/images/FrenchBaguette_400x400.webp";
import brocheBuns from "/src/assets/images/brioche-buns-paper-lined-board-680x1020.jpg";
import spinachCornSandwich from "/src/assets/images/HIGH-RES_Spinach_Corn_Cheese_Sandwich_-_Square.webp";
import hotGulabJamun from "/src/assets/images/Gulab Jamun Recipe - How to make Tasty Gulab Jamun Easily at Home - Khaddoroshik.jpeg";
import blueberryBlast from "/src/assets/images/Delicious Blueberry Desserts Collection.jpeg";
import fruitCustard from "/src/assets/images/Fruit Custard (Easy Indian Dessert).jpeg";
import caramelCustard from "/src/assets/images/Caramel Custard Recipe.jpeg";
import strawberryChocolate from "/src/assets/images/LONDON’S VIRAL CHOCOLATE STRAWBERRY - Bake with Shivesh.jpeg";
import deliciousKheer from "/src/assets/images/Kheer (Authentic Indian Rice Pudding).jpeg";
import { EnquiryForm } from './EnquiryForm';
import { SearchBar } from './searchBar';




const pastries = [
    { id: 1, name: "Mango Tiramisu", price: 190, image: mangoTiramisu },
    { id: 2, name: "Wheat Sourdough Loaf", price: 140, image: wheatSourdough },
    { id: 3, name: "Multigrain Loaf", price: 110, image: multigrainLoaf },
    { id: 4, name: "French Baguette", price: 89, image: frenchBaguette },
    { id: 5, name: "Broche Buns", price: 110, image: brocheBuns },
    { id: 6, name: "Spinach and Corn Cheese Sandwich", price: 110, image: spinachCornSandwich },
    { id: 7, name: "Hot Gulab Jamun", price: 190, image: hotGulabJamun },
    { id: 8, name: "Delicious Blueberry Blast", price: 150, image: blueberryBlast },
    { id: 9, name: "Fruit Custard", price: 140, image: fruitCustard },
    { id: 10, name: "Caramel Custard", price: 180, image: caramelCustard },
    { id: 11, name: "Strawberry Chocolate", price: 160, image: strawberryChocolate },
    { id: 12, name: "Delicious Kheer", price: 160, image: deliciousKheer },
  ];
  

export const BreadDesserts = () => {
  return (
    <div>
      <SearchBar/>
         
      <h2 className="text-center text-[#5D4037] underline text-3xl font-bold  mb-6">BREAD/BUN</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {pastries.map((pastry) => (
            <PastryCard key={pastry.id} pastry={pastry} />
        ))}
      </div>
      <EnquiryForm />
    

    </div>
  )
}
