import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink 
      className={(e) => (e.isActive ? "text-red-400" : "")} to="/">Home </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/recipes">Recipes </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/about">About </NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")} to="/favroi">Favroite </NavLink>
      
    </div>
  )
}

export default Navbar
