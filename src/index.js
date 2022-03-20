import React from "react";
import ReactDOM from "react-dom";
import "../src/styles.css";

//import App from "./App";

const rootElement = document.getElementById("root");

const hour = new Date().getHours();
console.log(hour);
var greeting;

var customStyle = {
  color: ""
};

if (hour < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (hour < 18) {
  greeting = "Good evening";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
  //headText.setAttribute("style","color:blue");
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  rootElement
);
