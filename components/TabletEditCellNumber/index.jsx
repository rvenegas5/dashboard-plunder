import React from "react";
import styled from "styled-components";
import {
  ManropeNormalRoyalBlue14px,
  MontserratBoldCloud16px,
  Border1pxQuickSilver,
  ManropeBoldBlack13px,
  CairoSemiBoldEerieBlack20px,
} from "../../styledMixins";
import "./TabletEditCellNumber.css";

function TabletEditCellNumber(props) {
  const { tabletEditCellNumber, inputBox, inputHere, saveChanges, superAdmin } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-edit-cell-number screen" style={{ backgroundImage: `url(${tabletEditCellNumber})` }}>
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
            <ButtonWithdrawAllEarning>
              <SaveChanges>{saveChanges}</SaveChanges>
            </ButtonWithdrawAllEarning>
            <SuperAdmin>{superAdmin}</SuperAdmin>
          </FlexRow>
        </Group21>
      </div>
    </div>
  );
}

const Group21 = styled.div`
  width: 436px;
  margin-left: 376px;
  display: flex;
  flex-direction: column;
  padding: 22px 21.4px;
  align-items: flex-start;
  min-height: 200px;
  background-color: var(--cultured-pearl);
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
`;

const Active = styled.div`
  width: 359px;
  height: 84px;
  margin-top: 13px;
  display: flex;
`;

const Input = styled.div`
  flex: 1;
  width: 358.6834716796875px;
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
  display: flex;
  padding: 10px 21px;
  align-items: flex-start;
  min-width: 359px;
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
  margin-top: 20px;
  margin-left: 0;
  display: flex;
  align-items: center;
  min-width: 228px;
`;

const ButtonWithdrawAllEarning = styled.div`
  height: 40px;
  display: flex;
  padding: 0 26.4px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 143px;
  background-color: var(--bizarre);
  border-radius: 10px;
  box-shadow: 2.7783708572387695px 15.75692367553711px 40px #695f970d;
`;

const SaveChanges = styled.div`
  ${ManropeBoldBlack13px}
  min-height: 20px;
  margin-top: -4.7px;
  min-width: 88px;
  text-align: center;
  letter-spacing: 0;
  line-height: 49px;
  white-space: nowrap;
`;

const SuperAdmin = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 59px;
  height: 28px;
  margin-left: 26px;
  margin-top: 1.59px;
  letter-spacing: 0;
  line-height: 14px;
`;

export default TabletEditCellNumber;
