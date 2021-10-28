import React from "react";

export const Tile = ({props}) => {
  let propValues = Object.values(props);
  return (
    <div className="tile-container">
      {
        propValues.map((value, index) => (
          <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
            {value}
          </p>
        ))
      }
    </div>
  );
};
