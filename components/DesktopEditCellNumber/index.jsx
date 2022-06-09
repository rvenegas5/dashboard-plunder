import React from "react";
import "./DesktopEditCellNumber.css";

function DesktopEditCellNumber(props) {
  const { desktopEditCellNumber, inputBox, inputHere, saveChanges, superAdmin } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-edit-cell-number screen" style={{ backgroundImage: `url(${desktopEditCellNumber})` }}>
        <div className="group-21">
          <div className="active-2">
            <div className="input-2">
              <div className="input-box-2 montserrat-bold-cloud-16px">{inputBox}</div>
              <div className="overlap-group-2 border-1px-quick-silver">
                <div className="input-here-4 cairo-semi-bold-eerie-black-20px">{inputHere}</div>
              </div>
            </div>
          </div>
          <div className="flex-row-2">
            <div className="button-withdraw-all-earning-4">
              <div className="save-changes-1 manrope-bold-black-13px">{saveChanges}</div>
            </div>
            <div className="super-admin-1 manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopEditCellNumber;
