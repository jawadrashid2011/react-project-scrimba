import React from "react";

export default function Card() {
  return (
    <section>
      <div className="card">
        <img src="../images/katie-zaferes.png" className="card--image" />
        <div className="card--top-line">
          <div className="card--stats">
            <img src="../images/star.png" className="card--small-image" />
            <span className="card--rating">5.0</span>
            <span className="card--number-ratings">(6)</span>
            <span className="card--country">USA</span>
          </div>
        </div>
        <div className="card--middle-line">Life lessons with Katie Zaferes</div>
        <div className="card--bottom-line">
          <span className="card--price">From $136</span>{" "}
          <span className="card--per">/ person</span>
        </div>
      </div>
    </section>
  );
}
