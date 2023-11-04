import React from "react";

export default function Die(props) {
  return (
    <div class="die-face">
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
