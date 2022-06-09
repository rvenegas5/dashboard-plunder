import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import ButtonSave from "../ButtonSave";
import "./MobileCongratulations50Off.css";

function MobileCongratulations50Off(props) {
  const { congratulations, the50OffItemWil, buttonCloseCopy2Props, buttonSaveProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-congratulations-50-off screen">
        <div className="add-new-card-popup-2">
          <div className="content-popup-2">
            <div className="tab-note-info-2"></div>
            <div className="flex-row-14">
              <div className="title-5">
                <div className="congratulations-2 avenir-black-black-18px">{congratulations}</div>
              </div>
              <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
            </div>
            <div className="name-on-card-2">
              <p className="the-50-off-item-wil-2">{the50OffItemWil}</p>
            </div>
            <ButtonSave className={buttonSaveProps.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileCongratulations50Off;
