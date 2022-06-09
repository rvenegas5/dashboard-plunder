import React from "react";
import Group100 from "../Group100";
import Date2 from "../Date2";
import "./X3.css";

function X3(props) {
  const { className, group100Props, date2Props } = props;

  return (
    <div className={`overlap-group7-2-item-1 ${className || ""}`}>
      <Group100 className={group100Props.className} />
      <div className="overlap-group-56">
        <div className="due-date-5">
          <div className="x1000-1100-13 manrope-normal-eerie-black-12px">3pt</div>
        </div>
        <div className="group-97-4">
          <div className="overlap-group-57">
            <div className="meeting-with-client-6 avenir-black-eerie-black-16px">Pam Gould</div>
            <Date2 className={date2Props.className} />
          </div>
          <div className="x1000-1100-14 manrope-extra-bold-geyser-10px">Customer Purchase $44</div>
        </div>
      </div>
    </div>
  );
}

export default X3;
