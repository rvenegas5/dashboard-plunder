import React from "react";
import "./ButtonWithdrawAllEarning.css";

function ButtonWithdrawAllEarning(props) {
  const { children, className } = props;

  return (
    <div className={`button-withdraw-all-earning ${className || ""}`}>
      <div className="upload manrope-bold-black-13px">{children}</div>
    </div>
  );
}

export default ButtonWithdrawAllEarning;
