import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";import { FaChalkboardUser } from "react-icons/fa6";
import { LuStore } from "react-icons/lu"; 
import './css/nav.css'
import { FaHome } from "react-icons/fa";



export const Nav = () => {
  return (
    <nav className='navbar'> 
    <div className="logo"> <LuStore />
</div>
   <NavLink to='Home'><FaHome />Home </NavLink>
   <NavLink to='products'><FaBuilding/>Products </NavLink>
   <NavLink to='cart'> <FaCartPlus/>Cart</NavLink>
   <NavLink to='login'> <FaChalkboardUser />Login</NavLink>


    
    </nav>
  )
}
