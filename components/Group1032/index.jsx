import React from "react";
import Group100 from "../Group100";
import DueDate2 from "../DueDate2";
import Date2 from "../Date2";
import "./Group1032.css";

function Group1032(props) {
  const { className } = props;

  return (
    <div className={`group-103-2 ${className || ""}`}>
      <Group100 />
      <div className="overlap-group-54">
        <DueDate2 />
        <div className="group-102-2">
          <div className="overlap-group-55">
            <Date2 />
            <div className="meeting-with-client-5 avenir-black-eerie-black-16px">Natalie B</div>
          </div>
          <div className="x1000-1100-12 manrope-extra-bold-bizarre-10px">Personal Purchase $20</div>
        </div>
      </div>
    </div>
  );
}

export default Group1032;
