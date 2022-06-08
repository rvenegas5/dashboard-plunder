import React from "react";
import styled from "styled-components";
import { AvenirMediumBlack4px } from "../../styledMixins";


function ButtonWithdrawAllEarning4(props) {
  const { className } = props;

  return (
    <ButtonWithdrawAllEarning className={`button-withdraw-all-earning-20 ${className || ""}`}>
      <SHOPNOW className="shop-now-4">SHOP NOW</SHOPNOW>
    </ButtonWithdrawAllEarning>
  );
}

const ButtonWithdrawAllEarning = styled.div`
  height: 13px;
  margin-right: 2.11px;
  display: flex;
  padding: 1.7px 7px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 40px;
  background-color: var(--bizarre);
  border-radius: 10px;
  box-shadow: 2.7783708572387695px 15.75692367553711px 40px #695f970d;

  &.button-withdraw-all-earning-20.button-withdraw-all-earning-21 {
    margin-top: 11px;
    margin-left: 1.22px;
    margin-right: unset;
  }
`;

const SHOPNOW = styled.div`
  ${AvenirMediumBlack4px}
  min-height: 7px;
  min-width: 24px;
  text-align: center;
  letter-spacing: 0.02px;
  line-height: 9px;
  white-space: nowrap;
`;

export default ButtonWithdrawAllEarning4;
