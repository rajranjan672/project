import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Components/NavBar.css"

const NavBar = () => {
  return (
    <>
    <div className="navbar">
    <ul>
             <li><NavLink acti to="/" className="nav-item">Idea</NavLink></li>
             <li><NavLink to="/mentors" className="nav-item">Mentors</NavLink></li>
             <li><NavLink to="/services" className="nav-item">Services</NavLink></li>
             <li><NavLink to="/faqs" className="nav-item">FAQs</NavLink></li>
         </ul>
    </div>
    </>
  )
}

export default NavBar