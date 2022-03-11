import React from "react";
import "./Events.scss";
import { ImLocation } from "react-icons/im";
import EventCard from "../EventCard/EventCard";

const Events = () => {
  return (
    <div className="o-events-container">
      <div className="o-looking-container">
        <h2>Looking for events in:</h2>
        <ImLocation style={{ color: "#4ecca3" }} size="2rem" />
        <h2 className="o-kanit-green"> Florida</h2>
      </div>

      <div className="o-filters">
        <a href="!">All</a>
        <a href="!">This week</a>
        <a href="!">This month</a>
      </div>

      <div className="o-card-events-container">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
