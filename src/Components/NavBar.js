import React from 'react'
// import { NavLink } from 'react-router-dom'
import "../Components/NavBar.css"

const NavBar = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark ms-auto class within ">
  {/* <a className="navbar-brand" href="#">Writify</a> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex" id="navbarNavAltMarkup">
    <div className="navbar-nav ">
      <a className="nav-item nav-link active navbar-left" href="#">Idea <span className="sr-only"></span></a>
      <a className="nav-item nav-link active" href="#">Mentors</a>
      <a className="nav-item nav-link active" href="#">Services</a>
      <a className="nav-item nav-link active" href="#">FAQs</a>
    </div>
  </div>
</nav>






{/* 
    <div classNameName="navbar">
    <ul>
             <li><NavLink acti to="/" classNameName="nav-item">Idea</NavLink></li>
             <li><NavLink to="/mentors" classNameName="nav-item">Mentors</NavLink></li>
             <li><NavLink to="/services" classNameName="nav-item">Services</NavLink></li>
             <li><NavLink to="/faqs" classNameName="nav-item">FAQs</NavLink></li>
         </ul>
    </div> */}
    </>
  )
}

export default NavBar