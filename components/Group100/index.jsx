import React from "react";
import "./Group100.css";

function Group100(props) {
  const { className } = props;

  return (
    <div className={`group-100-1 ${className || ""}`}>
      <img className="icon-user-6" src="/img/icon-13@1x.png" />
    </div>
  );
}

export default Group100;
