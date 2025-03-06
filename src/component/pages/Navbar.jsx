import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; 
import logo from "/src/assets/images/Bakereies_Logo-removebg-preview.png";

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#5D4037] text-white p-2 flex justify-around items-center relative">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <motion.img
            src={logo}
            alt="Sweet Dessert House Cake"
            className="w-40"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        <ul className="hidden md:flex text-lg font-bold gap-12">
          <motion.li whileHover={{ scale: 1.1, color: "#F8BBD0" }}><Link to="/">HOME</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#F8BBD0" }}><Link to="/themed">THEMED</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#F8BBD0" }}><Link to="/pastries">PASTRIES</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#F8BBD0" }}><Link to="/bread-desserts">BREAD/DESSERTS</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#F8BBD0" }}><Link to="/beverages">BEVERAGES</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#F8BBD0" }}><Link to="/our-identity">OUR IDENTITY</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#F8BBD0" }}><Link to="/reach-out">REACH OUT</Link></motion.li>
        </ul>

        <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#5D4037] flex flex-col items-center text-lg font-bold p-4 space-y-4 md:hidden z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link to="/" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/themed" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>THEMED</Link>
            <Link to="/pastries" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>PASTRIES</Link>
            <Link to="/bread-desserts" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>BREAD/DESSERTS</Link>
            <Link to="/beverages" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>BEVERAGES</Link>
            <Link to="/our-identity" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>OUR IDENTITY</Link>
            <Link to="/reach-out" className="hover:text-[#F8BBD0]" onClick={() => setIsMenuOpen(false)}>REACH OUT</Link>
          </motion.div>
        )}
      </nav>
    </div>
  );
};
