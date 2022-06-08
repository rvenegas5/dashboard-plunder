import React from "react";
import styled from "styled-components";
import { MontserratBoldCloud16px, CairoSemiBoldEerieBlack20px, Border1pxQuickSilver } from "../../styledMixins";


function Active(props) {
  const { inputBox, inputHere, className } = props;

  return (
    <Active1 className={`active-8 ${className || ""}`}>
      <Input className="input-8">
        <INPUTBOX className="input-box-8">{inputBox}</INPUTBOX>
        <OverlapGroup className="overlap-group-43">
          <InputHere className="input-here-14">{inputHere}</InputHere>
        </OverlapGroup>
      </Input>
    </Active1>
  );
}

const Active1 = styled.div`
  width: 301px;
  height: 85px;
  margin-top: 16px;
  display: flex;

  &.active-8.active-9 {
    margin-top: 12px;
  }
`;

const Input = styled.div`
  flex: 1;
  width: 301.4949951171875px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
`;

const INPUTBOX = styled.div`
  ${MontserratBoldCloud16px}
  width: 151px;
  height: 24px;
  margin-left: 0.71px;
  letter-spacing: 1px;
  line-height: 16px;
`;

const OverlapGroup = styled.div`
  ${Border1pxQuickSilver}
  height: 60px;
  margin-top: 1px;
  display: flex;
  padding: 10px 21px;
  align-items: flex-start;
  min-width: 301px;
  border-radius: 14px;
`;

const InputHere = styled.div`
  ${CairoSemiBoldEerieBlack20px}
  width: 156px;
  height: 39px;
  letter-spacing: 0;
  line-height: 20px;
`;

export default Active;
