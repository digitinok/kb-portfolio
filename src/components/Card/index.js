import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card col-lg-3 col-md-5 col-sm-11">
      <div className="img-container">
        <img alt={props.alt} src={props.image} />
      </div>
      <div className="content">
        <ul>
        <li>
            <strong>{props.name}</strong> 
          </li>          
          <li>
            {props.description}
          </li>
          <li>
            <strong>Repository: </strong> <a href={props.repository}>{props.repository}</a>
          </li>
          <li>
            <strong>Deployed Page: </strong><a href={props.link}>{props.link}</a> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
