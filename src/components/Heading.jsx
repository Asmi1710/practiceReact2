import React from "react";

function Heading() {
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
  }
  // finally returning the heading
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
