import React from 'react'
import Boton from '../Boton/Boton'
import './Discover.scss'

const Discover = () => {
  return (
    <div className='o-discover'>
       <div className="o-discover-card">
           <img src="assets/discover.jpg" alt="discover" />
       </div>
       <div className="o-discover-card-text">
           <h1>Discover new events anywhere!</h1>
           <Boton texto="Discover"/>
       </div>
    </div>
  )
}

export default Discover