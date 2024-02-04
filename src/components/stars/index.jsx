import React from "react";
import StarActive from "./../../Images/star-active.png"
import Star from "./../../Images/star.png";


export default function Stars({ stars = 4 }) {
  return (
    <React.Fragment>
      {[...Array(5)].map((star, index) => {
        return (
          <span>
            <img src={index < stars ? StarActive : Star} alt="error" key={index} />
          </span>
        );
      })}
    </React.Fragment>
  );
}