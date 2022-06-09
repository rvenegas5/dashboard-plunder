import React from "react";
import "./Date2.css";

function Date2(props) {
  const { className } = props;

  return (
    <div className={`date-9-1 ${className || ""}`}>
      <div className="calendar-3"></div>
      <div className="date-11 manrope-normal-quick-silver-10px">January 17, 2021</div>
    </div>
  );
}

export default Date2;
