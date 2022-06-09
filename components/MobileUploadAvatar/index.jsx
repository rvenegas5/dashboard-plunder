import React from "react";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import "./MobileUploadAvatar.css";

function MobileUploadAvatar(props) {
  const {
    addFriend2,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    changeProfilePicture,
    buttonWithdrawAllEarningProps,
    buttonCloseCopy2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-upload-avatar screen">
        <div className="overlap-group4-9">
          <div className="overlap-group3-10">
            <div className="rectangle-17-1"></div>
            <div className="button-withdraw-all-earning-17">
              <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
                {buttonWithdrawAllEarningProps.children}
              </ButtonWithdrawAllEarning>
            </div>
            <div className="group-20-3">
              <img className="add-friend-2-6" src={addFriend2} />
            </div>
            <div className="overlap-group2-17">
              <div className="active-7">
                <div className="input-7">
                  <div className="input-box-7 montserrat-bold-cloud-16px">{inputBox}</div>
                  <div className="overlap-group-60 border-1px-quick-silver">
                    <div className="input-here-11 manrope-normal-eerie-black-16px">{inputHere1}</div>
                  </div>
                  <p className="input-here-12 manrope-normal-eerie-black-10px">{inputHere2}</p>
                </div>
              </div>
              <div className="overlap-group1-36">
                <div className="rectangle-19-2 border-0-5px-dove-gray"></div>
                <div className="input-here-13 manrope-semi-bold-eerie-black-16px">{inputHere3}</div>
              </div>
            </div>
            <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
          </div>
          <div className="change-profile-picture-2">{changeProfilePicture}</div>
        </div>
      </div>
    </div>
  );
}

export default MobileUploadAvatar;
