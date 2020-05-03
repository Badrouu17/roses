import React from "react";
import { Link } from "react-router-dom";

const Card = ({ rose }) => {
  const goTo = rose.name.split(" ");
  return (
    <div className="card" id={rose.id}>
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img src={rose.photo} alt="Tour 1" className="card__picture-img" />
        </div>

        <h3 className={goTo[0] + " heading-tertirary"}>
          <span>{rose.name}</span>
        </h3>
      </div>

      <div className="card__footer">
        <p>
          <span className={goTo[0] + " card__footer-value"}>${rose.price}</span>
        </p>
        <Link
          to={`/dashboard/feed/${goTo[0] + goTo[1]}`}
          className={goTo[0] + " btn btn--color btn--small"}
        >
          SEND
        </Link>
      </div>
    </div>
  );
};

export default Card;
