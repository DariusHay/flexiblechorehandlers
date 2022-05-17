import React from 'react';
import Typed from 'react-typed';
import { Link } from "react-router-dom";




const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Flexible Chore Handlers </h1>
        <h2>No Chore is Too Big!</h2>
        <Typed 
        className="typed-text"
        strings={["Carpet Cleaning/ Floor Cleaning", 'Power Washing', 'Lawn Care Service', 'Carpet Cleaning', 'And More!']}
        typeSpeed={40}
        backSpeed={60}
        loop
        />
        <Link to='/contact' className="btn-main-offer">Contact Us</Link>
      </div>
    </div>
  )
}

export default Header
