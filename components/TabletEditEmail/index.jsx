import React from "react";
import "./TabletEditEmail.css";

function TabletEditEmail(props) {
  const { tabletEditEmail, inputBox, inputHere, saveChanges, superAdmin } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-edit-email screen" style={{ backgroundImage: `url(${tabletEditEmail})` }}>
        <div className="group-22-1">
          <div className="active-4">
            <div className="input-4">
              <div className="overlap-group-45">
                <div className="background-5 border-1px-quick-silver"></div>
                <div className="input-box-4 montserrat-bold-cloud-16px">{inputBox}</div>
                <div className="input-here-8 cairo-semi-bold-eerie-black-20px">{inputHere}</div>
              </div>
            </div>
          </div>
          <div className="flex-row-8">
            <div className="button-withdraw-all-earning-13">
              <div className="save-changes-2 manrope-bold-black-13px">{saveChanges}</div>
            </div>
            <div className="super-admin-10 manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletEditEmail;
