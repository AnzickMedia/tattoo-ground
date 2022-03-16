import React from "react";
import "./CarouselCard.scss";


const CarouselCard = ({informacion,img,artista,estudio}) => {


  return (
    <>
      <div className="o-carousel-card-cont">
        <div className="o-carousel-card-img">
          <img src={img} alt="" />
        </div>
        <div className="o-carousel-card-texto">
          <h2>{artista}</h2>
          <p>{estudio}</p>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
