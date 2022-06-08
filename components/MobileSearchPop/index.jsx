import React from "react";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import styled from "styled-components";
import {
  ManropeNormalRoyalBlue14px,
  MontserratBoldCloud16px,
  CairoSemiBoldEerieBlack20px,
  Border1pxQuickSilver,
} from "../../styledMixins";
import "./MobileSearchPop.css";

function MobileSearchPop(props) {
  const { inputBox, inputHere, superAdmin, buttonWithdrawAllEarningProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-search-pop screen">
        <Group21>
          <Active>
            <Input>
              <INPUTBOX>{inputBox}</INPUTBOX>
              <OverlapGroup>
                <InputHere>{inputHere}</InputHere>
              </OverlapGroup>
            </Input>
          </Active>
          <FlexRow>
            <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
              {buttonWithdrawAllEarningProps.children}
            </ButtonWithdrawAllEarning>
            <SuperAdmin>{superAdmin}</SuperAdmin>
          </FlexRow>
        </Group21>
      </div>
    </div>
  );
}

const Group21 = styled.div`
  width: 379px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 20px 21.4px;
  align-items: flex-start;
  min-height: 200px;
  background-color: var(--cultured-pearl);
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
`;

const Active = styled.div`
  width: 301px;
  height: 96px;
  margin-top: 5px;
  display: flex;
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
  margin-top: 12px;
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

const FlexRow = styled.div`
  height: 40px;
  position: relative;
  margin-top: 20px;
  margin-left: 0;
  display: flex;
  align-items: center;
  min-width: 217px;
`;

const SuperAdmin = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 59px;
  height: 22px;
  margin-left: 15px;
  margin-top: 1.59px;
  letter-spacing: 0;
  line-height: 14px;
`;

export default MobileSearchPop;
