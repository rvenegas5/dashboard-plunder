import React from "react";
import "./Group85.css";

function Group85(props) {
  const { path69, path70, className } = props;

  return (
    <div className={`group-85 ${className || ""}`}>
      <div className="path-container">
        <img className="path-69" src={path69} />
        <img className="path-70" src={path70} />
      </div>
    </div>
  );
}

export default Group85;
