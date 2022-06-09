import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import NameOnCard from "../NameOnCard";
import ButtonSave from "../ButtonSave";
import "./TabletCongratulations50Off.css";

function TabletCongratulations50Off(props) {
  const { tabletCongratulations50Off, congratulations, buttonCloseCopy2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div
        className="tablet-congratulations-50-off screen"
        style={{ backgroundImage: `url(${tabletCongratulations50Off})` }}
      >
        <div className="add-new-card-popup-1">
          <div className="content-popup-1">
            <div className="tab-note-info-1"></div>
            <div className="flex-row-10">
              <div className="title-3">
                <div className="congratulations-1 avenir-black-black-18px">{congratulations}</div>
              </div>
              <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
            </div>
            <NameOnCard />
            <ButtonSave />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletCongratulations50Off;
