import React from "react";
import "./Featured.scss";
import Carousel from "react-elastic-carousel";
import CarouselCard from "../CarouselCard/CarouselCard";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
  { width: 1440, itemsToShow: 4 },
];

const Featured = ({titulo,informacion}) => {


  const hola = informacion;
  return (
    <div className="o-featured-container">
      <div className="o-featured-title">

      <h2>{titulo}</h2>
      </div>

<div className="o-carousel-container">
  
      <Carousel breakPoints={breakPoints}
      showArrows={true}
      disableArrowsOnEnd={false}
      
      enableMouseSwipe={false}
      enableAutoPlay={true}
      autoPlaySpeed={5000}
      >
        {hola.map((d)=>(
        <CarouselCard 
        img={d.img}
        artista={d.artista}
        estudio={d.estudio}
        
        />
        ))}
       
      </Carousel>

      
</div>
    </div>
  );
};

export default Featured;
