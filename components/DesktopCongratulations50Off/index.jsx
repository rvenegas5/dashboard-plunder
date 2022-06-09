import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import NameOnCard from "../NameOnCard";
import "./DesktopCongratulations50Off.css";

function DesktopCongratulations50Off(props) {
  const { desktopCongratulations50Off, congratulations, overlapGroup, shopNow, buttonCloseCopy2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div
        className="desktop-congratulations-50-off screen"
        style={{ backgroundImage: `url(${desktopCongratulations50Off})` }}
      >
        <div className="add-new-card-popup">
          <div className="content-popup">
            <div className="tab-note-info"></div>
            <div className="flex-row-3">
              <div className="title">
                <div className="congratulations avenir-black-black-18px">{congratulations}</div>
              </div>
              <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
            </div>
            <NameOnCard />
            <div className="overlap-group-3" style={{ backgroundImage: `url(${overlapGroup})` }}>
              <div className="shop-now manrope-bold-cod-gray-14px">{shopNow}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopCongratulations50Off;
