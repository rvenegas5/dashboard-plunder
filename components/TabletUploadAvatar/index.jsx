import React from "react";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import Group20 from "../Group20";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import styled from "styled-components";
import {
  Border05pxDoveGray,
  MontserratBoldCloud16px,
  ManropeNormalEerieBlack12px,
  Border1pxQuickSilver,
  ManropeNormalEerieBlack16px,
  ManropeSemiBoldEerieBlack16px,
} from "../../styledMixins";
import "./TabletUploadAvatar.css";

function TabletUploadAvatar(props) {
  const {
    tabletUploadAvatar,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    changeProfilePicture,
    buttonWithdrawAllEarningProps,
    group20Props,
    buttonCloseCopy2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-upload-avatar screen" style={{ backgroundImage: `url(${tabletUploadAvatar})` }}>
        <OverlapGroup3>
          <Rectangle17></Rectangle17>
          <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
            {buttonWithdrawAllEarningProps.children}
          </ButtonWithdrawAllEarning>
          <Group20 className={group20Props.className} />
          <OverlapGroup2>
            <Active>
              <Input>
                <INPUTBOX>{inputBox}</INPUTBOX>
                <OverlapGroup>
                  <InputHere>{inputHere1}</InputHere>
                </OverlapGroup>
                <InputHere1>{inputHere2}</InputHere1>
              </Input>
            </Active>
            <OverlapGroup1>
              <Rectangle19></Rectangle19>
              <InputHere2>{inputHere3}</InputHere2>
            </OverlapGroup1>
          </OverlapGroup2>
          <ChangeProfilePicture>{changeProfilePicture}</ChangeProfilePicture>
          <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
        </OverlapGroup3>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 527px;
  height: 573px;
  position: relative;
  margin-left: 379px;
`;

const Rectangle17 = styled.div`
  position: absolute;
  width: 573px;
  height: 527px;
  top: 23px;
  left: -23px;
  background-color: var(--romance);
  border-radius: 10px;
  transform: rotate(90deg);
  box-shadow: 0px 3px 6px #00000029;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 500px;
  height: 129px;
  top: 348px;
  left: 13px;
`;

const Active = styled.div`
  position: absolute;
  width: 500px;
  height: 129px;
  top: 0;
  left: 0;
  display: flex;
`;

const Input = styled.div`
  flex: 1;
  width: 500.28564453125px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
`;

const INPUTBOX = styled.div`
  ${MontserratBoldCloud16px}
  width: 180px;
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
  padding: 0 169.5px;
  align-items: center;
  min-width: 500px;
  border-radius: 14px;
`;

const InputHere = styled.div`
  ${ManropeNormalEerieBlack16px}
  width: 156px;
  height: 24px;
  letter-spacing: 0;
  line-height: 16px;
`;

const InputHere1 = styled.p`
  ${ManropeNormalEerieBlack12px}
  width: 371px;
  height: 24px;
  margin-top: 11px;
  margin-left: 0.71px;
  letter-spacing: 0;
  line-height: 12px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 151px;
  height: 36px;
  top: 48px;
  left: 8px;
`;

const Rectangle19 = styled.div`
  ${Border05pxDoveGray}
  position: absolute;
  width: 149px;
  height: 36px;
  top: 0;
  left: 0;
  background-color: var(--iron);
  border-radius: 10px;
`;

const InputHere2 = styled.div`
  ${ManropeSemiBoldEerieBlack16px}
  position: absolute;
  width: 151px;
  height: 24px;
  top: 7px;
  left: 0;
  text-align: center;
  letter-spacing: 0.08px;
  line-height: 16px;
`;

const ChangeProfilePicture = styled.div`
  position: absolute;
  width: 291px;
  height: 39px;
  top: 3px;
  left: 13px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--eerie-black);
  font-size: 24px;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

export default TabletUploadAvatar;
