import React from "react";
import Boton from "../Boton/Boton";
import './News.scss'

const News = () => {
  return (
    <div className="o-news-container">
      <div className="o-img-mask">
        <img src="assets/news-img.png" alt="" />
      </div>
      <div className="o-text-container">
      <h1>Some News Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius, excepturi dignissimos quasi corrupti sunt facere porro ad quis iste recusandae in a, praesentium nulla vel rem quod consectetur qui ullam debitis dolore? Odit praesentium ipsam eveniet voluptatibus facilis? Iusto, nulla ratione? Sunt, magni qui.</p>
         <Boton texto="Register"/>
          </div>
      
    </div>
  );
};

export default News;
