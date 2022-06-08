import React from "react";
import styled from "styled-components";
import { ManropeBoldCodGray14px } from "../../styledMixins";


function ButtonSave(props) {
  const { className } = props;

  return (
    <ButtonSave1 className={`button-save ${className || ""}`}>
      <SHOPNOW className="shop-now-2">SHOP NOW</SHOPNOW>
    </ButtonSave1>
  );
}

const ButtonSave1 = styled.div`
  height: 40px;
  align-self: flex-end;
  margin-top: 72px;
  margin-right: 32px;
  display: flex;
  padding: 0 17px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 110px;
  background-color: var(--bizarre);
  border-radius: 10px;
  box-shadow: 1.3891854286193848px 7.878461837768555px 29px #695f9724;

  &.button-save.button-save-1 {
    margin-top: 56px;
  }
`;

const SHOPNOW = styled.div`
  ${ManropeBoldCodGray14px}
  min-height: 21px;
  margin-top: -10.43px;
  min-width: 74px;
  text-align: center;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

export default ButtonSave;
