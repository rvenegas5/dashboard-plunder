import React from "react";
import Date from "../Date";
import "./Group103.css";

function Group103(props) {
  const { className, dateProps } = props;

  return (
    <div className={`group-103 ${className || ""}`}>
      <div className="group-100">
        <img className="icon-user-4" src="/img/icon-2@1x.png" />
      </div>
      <div className="overlap-group1-6">
        <div className="due-date">
          <div className="x1000-1100-4 manrope-normal-eerie-black-12px">1 pt</div>
        </div>
        <div className="group-102">
          <div className="overlap-group-26">
            <Date className={dateProps.className} />
            <div className="meeting-with-client-2 avenir-black-eerie-black-16px">Natalie B</div>
          </div>
          <div className="x1000-1100-5 manrope-extra-bold-bizarre-10px">Personal Purchase $20</div>
        </div>
      </div>
    </div>
  );
}

export default Group103;
