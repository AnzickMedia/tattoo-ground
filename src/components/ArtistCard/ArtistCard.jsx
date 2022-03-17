import React from "react";
import "./ArtistCard.scss";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";

/* FALTA AGREGAR EL MAPEO DE CONSTANTES PARA LLENAR LA CARD*/

const ArtistCard = () => {
  return (
    <div className="o-artists-card">
      <div className="o-img-artist-container">
        <img src="assets/carousel-card-img.png" alt="" />
      </div>
      <div className="o-text-and-buttons">
        <div className="o-artist-title">
          <h3>Artist name</h3>
          <h2>Artist Nickname</h2>
          <h3>Tattoo Studio</h3>
        </div>
        <div className="o-artist-info">
          <h4>Age: 30</h4>
          <h4>Experience: 5 years</h4>
          <h4>Styles: Style 3</h4>
        </div>
        <div className="o-artist-location">
          <BsFacebook size="1.3rem"/>
          <RiInstagramFill size="1.36rem"/>
          <AiFillTwitterCircle size="1.4rem"/>

          <h3>Location</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
            perspiciatis dicta eius ipsum repudiandae doloribus rem quidem
            adipisci cupiditate quis? Corrupti suscipit.
          </p>
        </div>
      </div>
      <div className="o-artist-btn-cont">
        <button>Book </button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default ArtistCard;
