import React from "react";
import Active from "../Active";
import "./MobileEditCellNumber.css";

function MobileEditCellNumber(props) {
  const { saveChanges, superAdmin, activeProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-edit-cell-number screen">
        <div className="group-21-4">
          <Active inputBox={activeProps.inputBox} inputHere={activeProps.inputHere} className={activeProps.className} />
          <div className="flex-row-13">
            <div className="button-withdraw-all-earning-19">
              <div className="save-changes-5 manrope-bold-black-13px">{saveChanges}</div>
            </div>
            <div className="super-admin-17 manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileEditCellNumber;
