import React from "react";
import "./TabletEditCellNumber.css";

function TabletEditCellNumber(props) {
  const { tabletEditCellNumber, inputBox, inputHere, saveChanges, superAdmin } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-edit-cell-number screen" style={{ backgroundImage: `url(${tabletEditCellNumber})` }}>
        <div className="group-21-1">
          <div className="active-5">
            <div className="input-5">
              <div className="input-box-5 montserrat-bold-cloud-16px">{inputBox}</div>
              <div className="overlap-group-46 border-1px-quick-silver">
                <div className="input-here-9 cairo-semi-bold-eerie-black-20px">{inputHere}</div>
              </div>
            </div>
          </div>
          <div className="flex-row-9">
            <div className="button-withdraw-all-earning-14">
              <div className="save-changes-3 manrope-bold-black-13px">{saveChanges}</div>
            </div>
            <div className="super-admin-11 manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletEditCellNumber;
