import React from "react";
import "./Featured.scss";
import EventCard from "../EventCard/EventCard";
import Carousel from 'react-elastic-carousel';

const breakPoints=[
    { width: 1, itemsToShow: 1},
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3},
    { width: 1200, itemsToShow: 4}
]

const Featured = () => {
   
  return (
    <div className="o-featured-container">
      <Carousel breakPoints={breakPoints}>
        <h1>hola mundo</h1>
        <h1>hola s</h1>
        <h1>hola mdundo</h1>
        <h1>hola mdufffndo</h1>
        <h1>hola a</h1>
        <h1>hola munado</h1>
        <h1>hola muawndo</h1>

      </Carousel>

   
    </div>
  );
};

export default Featured;
