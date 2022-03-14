import React from "react";
import "./LocationCard.scss";

const LocationCard = ({ all }) => {
  const cardInfo = all;
  return (
    <>
      {cardInfo.map((d) => (
          <>
          <div className="o-locationcard-container">
            <div className="o-loc-img-cont">
              <img src="assets/l-card-img.png" alt="" />
            </div>
            <div className="o-loc-text-cont">
              <h3 className="title-loc">{d.titulo}</h3>
              <p className="fecha-loc">{d.fecha}</p>
              <p className="descripcion-loc">{d.descripcion}</p>
              <p>{d.organizador}</p>
            </div>
          </div>
          <div className="o-line"></div>
          </>
      ))}
    </>
  );
};

export default LocationCard;
