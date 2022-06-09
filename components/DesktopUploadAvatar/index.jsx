import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import Group20 from "../Group20";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import "./DesktopUploadAvatar.css";

function DesktopUploadAvatar(props) {
  const {
    desktopUploadAvatar,
    overlapGroup3,
    changeProfilePicture,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    buttonWithdrawAllEarningProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-upload-avatar screen" style={{ backgroundImage: `url(${desktopUploadAvatar})` }}>
        <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <div className="flex-row">
            <div className="change-profile-picture montserrat-bold-eerie-black-34px">{changeProfilePicture}</div>
            <ButtonCloseCopy2 />
          </div>
          <div className="group-28">
            <Group20 />
            <div className="flex-col">
              <div className="overlap-group2">
                <div className="active">
                  <div className="input">
                    <div className="input-box montserrat-bold-cloud-16px">{inputBox}</div>
                    <div className="overlap-group border-1px-quick-silver">
                      <div className="input-here manrope-normal-eerie-black-16px">{inputHere1}</div>
                    </div>
                    <p className="input-here-1 manrope-normal-eerie-black-10px">{inputHere2}</p>
                  </div>
                </div>
                <div className="overlap-group1">
                  <div className="rectangle-19 border-0-5px-dove-gray"></div>
                  <div className="input-here-2 manrope-semi-bold-eerie-black-16px">{inputHere3}</div>
                </div>
              </div>
              <ButtonWithdrawAllEarning>{buttonWithdrawAllEarningProps.children}</ButtonWithdrawAllEarning>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopUploadAvatar;
