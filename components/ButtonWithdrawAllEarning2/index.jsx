import React from "react";
import styled from "styled-components";
import { AvenirMediumBlack14px } from "../../styledMixins";


function ButtonWithdrawAllEarning2(props) {
  const { className } = props;

  return (
    <ButtonWithdrawAllEarning className={`button-withdraw-all-earning-6 ${className || ""}`}>
      <SHOPNOW className="shop-now-1">SHOP NOW</SHOPNOW>
    </ButtonWithdrawAllEarning>
  );
}

const ButtonWithdrawAllEarning = styled.div`
  position: absolute;
  height: 35px;
  top: 88px;
  left: 0;
  display: flex;
  padding: 1.9px 14px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 110px;
  background-color: var(--bizarre);
  border-radius: 10px;
  box-shadow: 2.7783708572387695px 15.75692367553711px 40px #695f970d;

  &.button-withdraw-all-earning-6.button-withdraw-all-earning-7 {
    align-self: center;
    margin-top: 20px;
    margin-right: 0;
    position: unset;
    top: unset;
    left: unset;
  }

  &.button-withdraw-all-earning-6.button-withdraw-all-earning-9 {
    align-self: center;
    margin-top: 20px;
    margin-right: 0;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const SHOPNOW = styled.div`
  ${AvenirMediumBlack14px}
  min-height: 21px;
  min-width: 80px;
  text-align: center;
  letter-spacing: 0.08px;
  line-height: 30px;
  white-space: nowrap;
`;

export default ButtonWithdrawAllEarning2;
