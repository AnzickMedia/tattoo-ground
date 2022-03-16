import React from 'react'
import './Footer.scss'
import { FaFacebookF, FaInstagram, FaTwitter,FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='o-footer'>
      <div className="o-footer-left">
        <div className="o-contact-us">
          <h2>CONTACT US</h2>
          <h4>Lorem ipsum dolor sit.</h4>
          <h4>Lorem ipsum dolor sit.</h4>
          <h4>Lorem ipsum dolor sit.</h4>
          <h4>Lorem ipsum dolor sit.</h4>        
        </div>
        <div className="o-follow-us">
        <h2>FOLLOW US</h2>
        <div className="o-social-container">
          <FaFacebookF color='white'/>
        <h4>Facebook</h4>
        </div>
        <div className="o-social-container">
          <FaInstagram color='white'/>
        <h4>Instagram</h4>
        </div>
        <div className="o-social-container">
          <FaTwitter color='white'/>
        <h4>Twitter</h4>
        </div>
        <div className="o-social-container">
          <FaLinkedin color='white'/>
        <h4>LinkeIn</h4>
        </div>
          
            
        </div>
      </div>
      <div className="o-footer-right">
        <h1 className='gray'>TATTOO</h1>
        <h1 className='green'>GROUND</h1>
      </div>


    </div>
  )
}

export default Footer