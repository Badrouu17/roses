import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card" id={1}>
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img
            src={require("./../../../scss/img/roses_bg2.jpg")}
            alt="Tour 1"
            className="card__picture-img"
          />
        </div>

        <h3 className="heading-tertirary">
          <span>The red drug</span>
        </h3>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">${"2"} </span>
        </p>
        <Link to={`/tour/${1}`} className="btn btn--green btn--small">
          SEND
        </Link>
      </div>
    </div>
  );
};

export default Card;
