import React from "react";
import ButtonWithdrawAllEarning from "../ButtonWithdrawAllEarning";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import styled from "styled-components";
import {
  Border05pxDoveGray,
  MontserratBoldCloud16px,
  Border1pxQuickSilver,
  ManropeNormalEerieBlack16px,
  ManropeSemiBoldEerieBlack16px,
  ManropeNormalEerieBlack10px,
} from "../../styledMixins";
import "./MobileUploadAvatar.css";

function MobileUploadAvatar(props) {
  const {
    addFriend2,
    inputBox,
    inputHere1,
    inputHere2,
    inputHere3,
    changeProfilePicture,
    buttonWithdrawAllEarningProps,
    buttonCloseCopy2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-upload-avatar screen">
        <OverlapGroup4>
          <OverlapGroup3>
            <Rectangle17></Rectangle17>
            <ButtonWithdrawAllEarning1>
              <ButtonWithdrawAllEarning className={buttonWithdrawAllEarningProps.className}>
                {buttonWithdrawAllEarningProps.children}
              </ButtonWithdrawAllEarning>
            </ButtonWithdrawAllEarning1>
            <Group20>
              <AddFriend2 src={addFriend2} />
            </Group20>
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
            <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
          </OverlapGroup3>
          <ChangeProfilePicture>{changeProfilePicture}</ChangeProfilePicture>
        </OverlapGroup4>
      </div>
    </div>
  );
}

const OverlapGroup4 = styled.div`
  width: 374px;
  height: 473px;
  position: relative;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 374px;
  height: 473px;
  top: 0;
  left: 0;
`;

const Rectangle17 = styled.div`
  position: absolute;
  width: 473px;
  height: 374px;
  top: 50px;
  left: -50px;
  background-color: var(--romance);
  border-radius: 10px;
  transform: rotate(90deg);
  box-shadow: 0px 3px 6px #00000029;
`;

const ButtonWithdrawAllEarning1 = styled.div`
  position: absolute;
  width: 143px;
  height: 40px;
  top: 417px;
  left: 13px;
  display: flex;
`;

const Group20 = styled.div`
  position: absolute;
  height: 172px;
  top: 65px;
  left: 14px;
  display: flex;
  padding: 28.5px 34.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 171px;
  background-color: var(--silver-sand);
  border-radius: 14px;
`;

const AddFriend2 = styled.img`
  width: 102px;
  height: 114px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 348px;
  height: 147px;
  top: 258px;
  left: 13px;
`;

const Active = styled.div`
  position: absolute;
  width: 348px;
  height: 147px;
  top: 0;
  left: 0;
  display: flex;
`;

const Input = styled.div`
  flex: 1;
  width: 349.86376953125px;
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
  padding: 0 17.4px;
  justify-content: flex-end;
  align-items: center;
  min-width: 348px;
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
  width: 349px;
  height: 42px;
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
  width: 304px;
  height: 39px;
  top: 6px;
  left: 14px;
  font-family: var(--font-family-montserrat);
  font-weight: 700;
  color: var(--eerie-black);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

export default MobileUploadAvatar;
