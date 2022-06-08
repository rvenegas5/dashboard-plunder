import React from "react";
import styled from "styled-components";
import { AvenirMediumBlack7px } from "../../styledMixins";


function ButtonWithdrawAllEarning3(props) {
  const { className } = props;

  return (
    <ButtonWithdrawAllEarning className={`button-withdraw-all-earning-15 ${className || ""}`}>
      <SHOPNOW className="shop-now-3">SHOP NOW</SHOPNOW>
    </ButtonWithdrawAllEarning>
  );
}

const ButtonWithdrawAllEarning = styled.div`
  position: absolute;
  height: 18px;
  top: 46px;
  left: 0;
  display: flex;
  padding: 1.4px 7.6px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 58px;
  background-color: var(--bizarre);
  border-radius: 10px;
  box-shadow: 2.7783708572387695px 15.75692367553711px 40px #695f970d;

  &.button-withdraw-all-earning-15.button-withdraw-all-earning-16 {
    align-self: center;
    margin-top: 16px;
    margin-right: 0;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const SHOPNOW = styled.div`
  ${AvenirMediumBlack7px}
  min-height: 12px;
  min-width: 42px;
  text-align: center;
  letter-spacing: 0.04px;
  line-height: 15px;
  white-space: nowrap;
`;

export default ButtonWithdrawAllEarning3;
