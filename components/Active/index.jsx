import React from "react";
import "./Active.css";

function Active(props) {
  const { inputBox, inputHere, className } = props;

  return (
    <div className={`active-8 ${className || ""}`}>
      <div className="input-8">
        <div className="input-box-8 montserrat-bold-cloud-16px">{inputBox}</div>
        <div className="overlap-group-61 border-1px-quick-silver">
          <div className="input-here-14 cairo-semi-bold-eerie-black-20px">{inputHere}</div>
        </div>
      </div>
    </div>
  );
}

export default Active;
