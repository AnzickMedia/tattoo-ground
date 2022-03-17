import React from 'react'
import "./Menu.scss";

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`menu ${menuOpen ? "active" : null}`}>
            <ul>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="/browse">BROWSE</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="/">SHOP</a>
                </li>
                
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="/artists">ARTISTS</a>
                </li>
                <li onClick={()=> setMenuOpen(false)}>
                    <a href="/">CONTACT</a>
                </li>
            </ul>
            
        </div>
  )
}

export default Menu