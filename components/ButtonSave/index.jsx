import React from "react";
import "./ButtonSave.css";

function ButtonSave(props) {
  const { className } = props;

  return (
    <div className={`button-save ${className || ""}`}>
      <div className="shop-now-3 manrope-bold-cod-gray-14px">SHOP NOW</div>
    </div>
  );
}

export default ButtonSave;
