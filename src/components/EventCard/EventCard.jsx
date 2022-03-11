import React from 'react'
import './EventCard.scss'

const EventCard = () => {
  return (
    <div className='o-eventcard'>
        <div className="o-img-cont">
            <img src="assets/e-card-img.png" alt="" />
            </div>
        <div className="o-text-event-card">
                <h3 className='title-card'>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor.</p>
                <p>que se dice</p>
            </div>
            
        </div>
  )
}

export default EventCard