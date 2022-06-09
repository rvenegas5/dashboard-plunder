import React from "react";
import Search2 from "../Search2";
import "./Searchbox.css";

function Searchbox() {
  return (
    <div className="searchbox">
      <Search2 />
      <div className="search-here cairo-semi-bold-shady-lady-16px">Search</div>
    </div>
  );
}

export default Searchbox;
