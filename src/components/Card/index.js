import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card col-xxl-3 col-lg-5 col-md-11">
      <img 
        className="card-img-top" 
        alt={props.alt} 
        src={props.image} /> 
      <div className="card-body">
        <hr></hr>
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">{props.description}</p>
        <a href={props.repository} className="btn btn-dark m-2">Repository</a>
        <a href={props.link} className="btn btn-dark m-2">Deployed Page</a>
      </div>
    </div>
  );
}

export default Card;
