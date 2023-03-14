import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.alt} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Repository:</strong> {props.repository}
          </li>
          <li>
            <strong> {props.description}</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
