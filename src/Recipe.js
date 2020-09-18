import React from "react";

const Recipe = ({ image, title, calories }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} />
    </div>
  );
};

export default Recipe;
