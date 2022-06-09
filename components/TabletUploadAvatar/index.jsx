import React from "react";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import Group20 from "../Group20";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import "./TabletUploadAvatar.css";

function TabletUploadAvatar(props) {
  const {
    tabletUploadAvatar,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    changeProfilePicture,
    buttonWithdrawAllEarningProps,
    group20Props,
    buttonCloseCopy2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-upload-avatar screen" style={{ backgroundImage: `url(${tabletUploadAvatar})` }}>
        <div className="overlap-group3-7">
          <div className="rectangle-17"></div>
          <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
            {buttonWithdrawAllEarningProps.children}
          </ButtonWithdrawAllEarning>
          <Group20 className={group20Props.className} />
          <div className="overlap-group2-11">
            <div className="active-3">
              <div className="input-3">
                <div className="input-box-3 montserrat-bold-cloud-16px">{inputBox}</div>
                <div className="overlap-group-44 border-1px-quick-silver">
                  <div className="input-here-5 manrope-normal-eerie-black-16px">{inputHere1}</div>
                </div>
                <p className="input-here-6 manrope-normal-eerie-black-12px">{inputHere2}</p>
              </div>
            </div>
            <div className="overlap-group1-22">
              <div className="rectangle-19-1 border-0-5px-dove-gray"></div>
              <div className="input-here-7 manrope-semi-bold-eerie-black-16px">{inputHere3}</div>
            </div>
          </div>
          <div className="change-profile-picture-1">{changeProfilePicture}</div>
          <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
        </div>
      </div>
    </div>
  );
}

export default TabletUploadAvatar;
