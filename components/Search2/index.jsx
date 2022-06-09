import React from "react";
import "./Search2.css";

function Search2(props) {
  const { className } = props;

  return (
    <div className={`search-2 ${className || ""}`}>
      <div className="vector-container">
        <img className="vector" src="/img/vector@1x.png" />
        <img className="vector-1" src="/img/vector-1@1x.png" />
      </div>
    </div>
  );
}

export default Search2;
