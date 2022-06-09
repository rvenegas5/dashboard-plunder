import React from "react";
import "./DesktopEditEmail.css";

function DesktopEditEmail(props) {
  const { desktopEditEmail, inputBox, inputHere, saveChanges, superAdmin } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-edit-email screen" style={{ backgroundImage: `url(${desktopEditEmail})` }}>
        <div className="group-22">
          <div className="active-1">
            <div className="input-1">
              <div className="input-box-1 montserrat-bold-cloud-16px">{inputBox}</div>
              <div className="overlap-group-1 border-1px-quick-silver">
                <div className="input-here-3 cairo-semi-bold-eerie-black-20px">{inputHere}</div>
              </div>
            </div>
          </div>
          <div className="flex-row-1">
            <div className="button-withdraw-all-earning-3">
              <div className="save-changes manrope-bold-black-13px">{saveChanges}</div>
            </div>
            <div className="super-admin manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopEditEmail;
