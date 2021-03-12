import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "20 px",
  border:"1px solid black"
};

customStyle.color = "blue";


ReactDOM.render(
  <div style={customStyle}>
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Noodles</li>
      <li>Jamon</li>
    </ul>
  </div>,
  document.getElementById("root")
);


