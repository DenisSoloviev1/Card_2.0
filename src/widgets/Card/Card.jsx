import React from "react";
import "./Card.scss";

export default function Card() {
  return (
    <div className="card">
      <img src="images/me.jpg" alt="me" className="myPhoto" />
      <div className="bio">
        <h1>Денис Соловьев</h1>
        <p>Frontend developer</p>
      </div>
    </div>
  );
}
