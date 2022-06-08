import React from "react";
import Active from "../Active";
import styled from "styled-components";
import { ManropeNormalRoyalBlue14px, ManropeBoldBlack13px } from "../../styledMixins";
import "./MobileEditEmail.css";

function MobileEditEmail(props) {
  const { saveChanges, superAdmin, activeProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-edit-email screen">
        <Group21>
          <Active inputBox={activeProps.inputBox} inputHere={activeProps.inputHere} />
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
  width: 379px;
  position: relative;
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

const FlexRow = styled.div`
  margin-top: 20px;
  margin-left: 0;
  display: flex;
  align-items: center;
  min-width: 217px;
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
  height: 22px;
  margin-left: 15px;
  margin-top: 1.59px;
  letter-spacing: 0;
  line-height: 14px;
`;

export default MobileEditEmail;
