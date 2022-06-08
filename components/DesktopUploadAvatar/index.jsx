import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import Group20 from "../Group20";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import styled from "styled-components";
import {
  Border05pxDoveGray,
  MontserratBoldCloud16px,
  MontserratBoldEerieBlack34px,
  Border1pxQuickSilver,
  ManropeNormalEerieBlack16px,
  ManropeSemiBoldEerieBlack16px,
  ManropeNormalEerieBlack10px,
} from "../../styledMixins";
import "./DesktopUploadAvatar.css";

function DesktopUploadAvatar(props) {
  const {
    desktopUploadAvatar,
    overlapGroup3,
    changeProfilePicture,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    buttonWithdrawAllEarningProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-upload-avatar screen" style={{ backgroundImage: `url(${desktopUploadAvatar})` }}>
        <OverlapGroup3 style={{ backgroundImage: `url(${overlapGroup3})` }}>
          <FlexRow>
            <ChangeProfilePicture>{changeProfilePicture}</ChangeProfilePicture>
            <ButtonCloseCopy2 />
          </FlexRow>
          <Group28>
            <Group20 />
            <FlexCol>
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
              <ButtonWithdrawAllEarning>{buttonWithdrawAllEarningProps.children}</ButtonWithdrawAllEarning>
            </FlexCol>
          </Group28>
        </OverlapGroup3>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 973px;
  margin-left: 509px;
  display: flex;
  flex-direction: column;
  padding: 23px 24px;
  align-items: flex-start;
  min-height: 435px;
  background-size: cover;
  background-position: 50% 50%;
`;

const FlexRow = styled.div`
  height: 52px;
  position: relative;
  align-self: center;
  margin-right: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 916px;
`;

const ChangeProfilePicture = styled.div`
  ${MontserratBoldEerieBlack34px}
  width: 470px;
  height: 51px;
  align-self: flex-end;
  letter-spacing: 0;
  line-height: 38px;
`;

const Group28 = styled.div`
  height: 275px;
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  min-width: 912px;
`;

const FlexCol = styled.div`
  width: 609px;
  position: relative;
  margin-left: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 185px;
`;

const OverlapGroup2 = styled.div`
  width: 609px;
  height: 129px;
  position: relative;
`;

const Active = styled.div`
  position: absolute;
  width: 609px;
  height: 129px;
  top: 0;
  left: 0;
  display: flex;
`;

const Input = styled.div`
  flex: 1;
  width: 608.6834716796875px;
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
  padding: 0 170px;
  align-items: center;
  min-width: 609px;
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
  ${ManropeNormalEerieBlack10px}
  width: 479px;
  height: 24px;
  margin-top: 11px;
  margin-left: 0.71px;
  letter-spacing: 0;
  line-height: 10px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 151px;
  height: 36px;
  top: 48px;
  left: 11px;
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

export default DesktopUploadAvatar;
