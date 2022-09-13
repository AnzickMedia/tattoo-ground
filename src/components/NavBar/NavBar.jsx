import React, { useState } from "react";
import "./NavBar.scss";
import { GiHamburgerMenu} from 'react-icons/gi';
import logo from '../../img/logo-fpng.png';




const NavBar = ({menuOpen,setMenuOpen}) => {

  const [navColorScroll, setNavColorScroll] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY > 80) {
      setNavColorScroll(true);
    } else {
      setNavColorScroll(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className={navColorScroll ? "o-nav-scrolled" : "o-nav"}>
      <div className="o-nav-izq">
        <div className="o-title-container">
          <a href="/">{/* 
          <h1 className="gray">TATTO</h1>
          <h1 className="green">GROUND</h1> */}
          <img src={logo} alt="Logo tattoo ground" />
          </a>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="o-nav-der">
       <a href="/browse">BROWSE</a>
       <a href="/">SHOP</a>
       <a href="/artists">ARTISTS</a>
       <a href="/">CONTACT</a>

       
        
       
       
        
          {/*por ahora usar <a> luego usar react router*/}
         
          
        
        <img src="assets/profile.png" alt="" />
      </div>
      <div className="o-hamburguer-container" onClick={() => setMenuOpen(!menuOpen)}>
      <GiHamburgerMenu size="2rem" color="#393e46"/>
      </div>
      
    </div>
  );
};

export default NavBar;
