import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card-container">
      <Link to={props.link} style={{textDecoration:"none"}}>
        <div className="card-text">
          <h1>{props.title}</h1>
          <props.icon />
          <h2>{props.subtitle}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
