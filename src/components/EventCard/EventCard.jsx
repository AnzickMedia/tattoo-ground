import React, { useState } from 'react'
import './EventCard.scss'
import {all} from '../../globals.js'


const EventCard = () => {

const data =all;


  
  return (
  <>
    {data.map((d) => (
    <div className='o-eventcard'>
        <div className="o-img-cont">
            <img src={d.img} alt="" />
            </div>

            
      
          
        <div className="o-text-event-card">
                <h3 className='title-card'>{d.titulo}</h3>
                <p className='fecha'>{d.fecha}</p>
                <p className='descripcion'>{d.descripcion}</p>
                <p>{d.organizador}</p>
            </div>


            
        </div>
        ))}
        </>
  )
}

export default EventCard