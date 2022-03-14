import React from "react";
import "./NavBar.scss";
import {BrowserRouter as Router,Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="o-nav">
      <div className="o-nav-izq">
        <div className="o-title-container">
          <h1 className="gray">TATTO</h1>
          <h1 className="green">GROUND</h1>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="o-nav-der">
        <Router>
        {/*por ahora usar <a> luego usar react router*/}
       <Link to="/browse">BROWSE</Link>
       <Link to="/shop">SHOP</Link>
       <Link to="/artists">ARTISTS</Link>
       <Link to="/contact">CONTACT</Link>
        </Router>
        <img src="assets/profile.png" alt="" />
      </div>
    </div>
  );
};

export default NavBar;
