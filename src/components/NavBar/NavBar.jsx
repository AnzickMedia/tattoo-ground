import React from "react";
import "./NavBar.scss";


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
       <a href="/browse">BROWSE</a>
       <a href="/">SHOP</a>
        
       
       
        
          {/*por ahora usar <a> luego usar react router*/}
         
          
        
        <img src="assets/profile.png" alt="" />
      </div>
      
    </div>
  );
};

export default NavBar;
