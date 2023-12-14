import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";import { FaChalkboardUser } from "react-icons/fa6";



export const Nav = () => {
  return (
    <div>
   <NavLink to='products'><FaBuilding/>Products </NavLink>
   <NavLink to='cart'> <FaCartPlus/>Cart</NavLink>
   <NavLink to='login'> <FaChalkboardUser />
Login </NavLink>


    
    </div>
  )
}
