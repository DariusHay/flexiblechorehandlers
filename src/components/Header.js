import React from 'react';
import Typed from 'react-typed';



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
        <a href='/flexiblefloorhandlers/contact' className="btn-main-offer">Contact Us</a>
      </div>
    </div>
  )
}

export default Header
