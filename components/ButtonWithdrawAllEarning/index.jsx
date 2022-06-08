import React from "react";
import styled from "styled-components";
import { ManropeBoldBlack13px } from "../../styledMixins";


function ButtonWithdrawAllEarning(props) {
  const { children, className } = props;

  return (
    <ButtonWithdrawAllEarning1 className={`button-withdraw-all-earning ${className || ""}`}>
      <Upload className="upload">{children}</Upload>
    </ButtonWithdrawAllEarning1>
  );
}

const ButtonWithdrawAllEarning1 = styled.div`
  height: 40px;
  margin-top: 17px;
  margin-left: 0;
  display: flex;
  padding: 0 48.4px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 143px;
  background-color: var(--bizarre);
  border-radius: 10px;
  box-shadow: 2.7783708572387695px 15.75692367553711px 40px #695f970d;

  &.button-withdraw-all-earning.button-withdraw-all-earning-1 {
    position: absolute;
    top: 520px;
    left: 13px;
    margin-top: unset;
    margin-left: unset;
  }

  &.button-withdraw-all-earning.button-withdraw-all-earning-2 {
    margin-top: unset;
    margin-left: unset;
  }

  &.button-withdraw-all-earning.group-33 {
    flex: 1;
    min-width: 142.822265625px;
    height: unset;
    margin-top: unset;
    margin-left: unset;
  }
`;

const Upload = styled.div`
  ${ManropeBoldBlack13px}
  min-height: 20px;
  margin-top: -4.7px;
  min-width: 44px;
  text-align: center;
  letter-spacing: 0;
  line-height: 49px;
  white-space: nowrap;
`;

const Upload1 = styled.div`
  ${ManropeBoldBlack13px}

  .button-withdraw-all-earning.group-33  & {
    margin-top: -4.71px;
  }
`;

export default ButtonWithdrawAllEarning;
