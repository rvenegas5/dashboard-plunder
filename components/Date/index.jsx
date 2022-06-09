import React from "react";
import "./Date.css";

function Date(props) {
  const { className } = props;

  return (
    <div className={`date-4-1 ${className || ""}`}>
      <div className="calendar-2"></div>
      <div className="date-5 manrope-normal-quick-silver-10px">January 17, 2021</div>
    </div>
  );
}

export default Date;
