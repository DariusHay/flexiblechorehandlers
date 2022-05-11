import React from 'react';
import Typed from 'react-typed';



const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1 style={{ marginTop: "200px" }}>Flexible Chore Handlers </h1>
        <h2>No Chore is Too Big!</h2>
        <Typed 
        className="typed-text"
        strings={[""]}
        />
      </div>
    </div>
  )
}

export default Header
