import React from 'react'
import './EventLocationCard.scss'
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import Boton from '../Boton/Boton';

const EventLocationCard = () => {
  return (
    <div className='o-event-loc-card'>
        <div className="o-loc-colum">
        <div className="o-img-event-location-container">
        <img src="assets/l-card-img.png" alt="" />
      </div>
      <div className="o-text-and-buttons-loc">
        <div className="o-event-loc-title">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae autem fugit repellendus debitis quia quis.</h3>
          <p>By tales</p>
        </div>
        <div className="o-boxes-container">
          
            <div className="o-box">
                box1
            </div>
            <div className="o-box">
            box2
            </div>
            <div className="o-box">
            box3
            </div>

        </div>
        <div className="o-sn-location">
          <BsFacebook size="1.3rem" />
          <RiInstagramFill size="1.36rem" />
          <AiFillTwitterCircle size="1.4rem" />

          <p>$7.30 USD</p>

          <button>get tickets</button>
        </div>
      </div>
      
      </div>
      <div className="o-bottom-card">
          <h3>Sponsors:</h3>
          <div className="o-container-imgs-btns">
          <img src="assets/loc-card-img.png" alt="" />
          <img src="assets/loc-card-img.png" alt="" />
          <img src="assets/loc-card-img.png" alt="" />
          
          <Boton texto="hola"/>
          <Boton texto="hola"/>
          </div>
      </div>
    </div>
  )
}

export default EventLocationCard