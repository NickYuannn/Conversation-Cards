import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-text">
        <h1>{props.title}</h1>
        <props.icon />
        <h2>{props.subtitle}</h2>
      </div>
    </div>
  );
}

export default Card;
