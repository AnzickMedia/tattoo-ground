import React from "react";
import ArtistCard from "../ArtistCard/ArtistCard";
import EventCard from "../EventCard/EventCard.jsx";
import "./Artists.scss";
import { artistas } from "../../globals";
import Review from "../Review/Review";

const Artists = ({ all }) => {
  const imgJob = artistas;
  return (
    <div className="o-artists">
      <ArtistCard />

      <div className="artistas-jobs-events">
        <div className="o-jobs">
          <h2>Featured Jobs</h2>
          <div className="o-job-img-cont">
            {imgJob.map((d) => (
              
              <img src={d.imgArtista} alt="job" />
            ))}
          </div>
        </div>

        <div className="o-future-events">
          <h2>Futured events</h2>
          <div className="o-future-eventcard-cont">
            <EventCard all={all} />
          </div>
        </div>
      </div>

      <Review/>

    </div>
  );
};

export default Artists;
