import React from "react";
import "./NavBar.scss";
import {  Link, BrowserRouter } from "react-router-dom";

const NavBar = () => {



  return (
    <div className="o-nav">
      <div className="o-nav-izq">
        <div className="o-title-container">
          <a href="/">
          <h1 className="gray">TATTO</h1>
          <h1 className="green">GROUND</h1>
          </a>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="o-nav-der">
       <BrowserRouter>
        <Link to='/browse'>BROWSE</Link>
        <Link to='/'>SHOP</Link>
        <Link to='/'>ARTISTS</Link>
        <Link to='/'>CONTACT</Link>
        </BrowserRouter>
        
          {/*por ahora usar <a> luego usar react router*/}
         
          
        
        <img src="assets/profile.png" alt="" />
      </div>
      
    </div>
  );
};

export default NavBar;
