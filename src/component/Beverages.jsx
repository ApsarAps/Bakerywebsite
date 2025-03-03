import React from 'react' 
import caramelHazelnut from "/src/assets/images/Caramel Hazelnut Iced Coffee [10 Minutes].jpeg";
import hotChocolate from "/src/assets/images/HotChocolate05_400x400.webp";
import strawberryMilkShake from "/src/assets/images/Strawberry Milkshake Delight_ A Must-Try Treat for Strawberry Dessert Lovers!.jpeg";
import virginMojito from "/src/assets/images/Virgin Mojito [10 Minutes].jpeg";
import watermelonSlushie from "/src/assets/images/Watermelon Slushie Recipe (Only 4 Ingredients!) - From My Bowl.jpeg";
import bukoSaladDrink from "/src/assets/images/Buko Salad Drink - Foxy Folksy.jpeg";
import cappuccino from "/src/assets/images/Cappuccino03_400x400.webp";
import richColdCoffee from "/src/assets/images/cold-coffee.jpg";
import caffeMochaMagic from "/src/assets/images/Caffe Mocha Magic for Chocolate Coffee Lovers - Happy Baking Days.jpeg";
import ketoMatchaGreenTea from "/src/assets/images/Delicious Keto Matcha Green Tea Whipped Cream Iced Latte Recipe for Weight Loss.jpeg";
import classicMangoShake from "/src/assets/images/10.webp";
import bobaBubbleTea from "/src/assets/images/Purple Boba Tea_ Flavor, Ingredients & Recipe!.jpeg";
import PastryCard from './pastrycard';
import { EnquiryForm } from './EnquiryForm';
import { SearchBar } from './searchBar';

const beverages = [
  { id: 1, name: "Caramel Hazelnut Iced Coffee", price: 160, image: caramelHazelnut },
  { id: 2, name: "Hot Chocolate", price: 180, image: hotChocolate },
  { id: 3, name: "Strawberry Milk Shake", price: 160, image: strawberryMilkShake },
  { id: 4, name: "Virgin Mojito", price: 160, image: virginMojito },
  { id: 5, name: "Watermelon Slushie", price: 140, image: watermelonSlushie },
  { id: 6, name: "Buko Salad Drink", price: 180, image: bukoSaladDrink },
  { id: 7, name: "Cappuccino", price: 140, image: cappuccino },
  { id: 8, name: "Rich Cold Coffee", price: 160, image: richColdCoffee },
  { id: 9, name: "Caffe Mocha Magic", price: 140, image: caffeMochaMagic },
  { id: 10, name: "Keto Matcha Green Tea", price: 180, image: ketoMatchaGreenTea },
  { id: 11, name: "Classic Mango Shake", price: 160, image: classicMangoShake },
  { id: 12, name: "Boba Bubble Tea", price: 160, image: bobaBubbleTea },
];

export const Beverages = () => {
  return (
    <div id="Beverages">
          <SearchBar />

    <h2 className="text-center underline text-2xl md:text-3xl font-bold text-[#5D4037] mb-6">
      BEVERAGES
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {beverages.map((beverage) => (
        <PastryCard key={beverage.id} pastry={beverage} />
        
      ))}
    </div>
    <EnquiryForm />
  </div>


  )
}
