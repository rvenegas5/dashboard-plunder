import React from "react";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import "./MobileSearchPop.css";

function MobileSearchPop(props) {
  const { inputBox, inputHere, superAdmin, buttonWithdrawAllEarningProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-search-pop screen">
        <div className="group-21-2">
          <div className="active-6">
            <div className="input-6">
              <div className="input-box-6 montserrat-bold-cloud-16px">{inputBox}</div>
              <div className="overlap-group-59 border-1px-quick-silver">
                <div className="input-here-10 cairo-semi-bold-eerie-black-20px">{inputHere}</div>
              </div>
            </div>
          </div>
          <div className="flex-row-11">
            <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
              {buttonWithdrawAllEarningProps.children}
            </ButtonWithdrawAllEarning>
            <div className="super-admin-15 manrope-normal-royal-blue-14px">{superAdmin}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSearchPop;
