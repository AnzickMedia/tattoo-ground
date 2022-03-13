import React from 'react'
import './Footer.scss'

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
          <h4>Lorem ipsum dolor sit.</h4>
          <h4>Lorem ipsum dolor sit.</h4>
          <h4>Lorem ipsum dolor sit.</h4>
          <h4>Lorem ipsum dolor sit.</h4>   
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