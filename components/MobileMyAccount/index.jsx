import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import Group86 from "../Group86";
import styled from "styled-components";
import {
  ManropeNormalQuickSilver12px,
  ManropeNormalRoyalBlue14px,
  MontserratBoldEerieBlack34px,
  ManropeBoldEerieBlack20px,
  MontserratBoldBlack24px,
  ManropeNormalQuickSilver18px,
} from "../../styledMixins";
import "./MobileMyAccount.css";

function MobileMyAccount(props) {
  const {
    addFriend2,
    superAdmin1,
    dashboard1,
    levelStatusCusto,
    iconCall,
    phone,
    superAdmin2,
    email21,
    email,
    superAdmin3,
    dashboard2,
    plunderdesignComWeb_Alias,
    myAccount,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-account screen">
        <OverlapGroup1>
          <BACKGROUND>
            <Link to="/mobile-upload-avatar">
              <Group127>
                <Group20>
                  <AddFriend2 src={addFriend2} />
                </Group20>
                <SuperAdmin>{superAdmin1}</SuperAdmin>
              </Group127>
            </Link>
            <Group23>
              <Dashboard>{dashboard1}</Dashboard>
              <LevelStatusCusto>{levelStatusCusto}</LevelStatusCusto>
              <FlexRow>
                <IconCall src={iconCall} />
                <Phone>{phone}</Phone>
                <Link to="/mobile-edit-cell-number" className="align-self-flex-end">
                  <SuperAdmin1>{superAdmin2}</SuperAdmin1>
                </Link>
              </FlexRow>
              <FlexRow1>
                <Email21 src={email21} />
                <Email>{email}</Email>
                <Link to="/mobile-edit-email" className="align-self-flex-end">
                  <SuperAdmin2>{superAdmin3}</SuperAdmin2>
                </Link>
              </FlexRow1>
              <Dashboard1>{dashboard2}</Dashboard1>
              <PlunderdesigncomwebAlias>{plunderdesignComWeb_Alias}</PlunderdesigncomwebAlias>
            </Group23>
          </BACKGROUND>
          <Title>
            <MyAccount>{myAccount}</MyAccount>
            <IcListView>
              <Grid1>
                <GridLayout18>
                  <Vector src="/img/vector-110@1x.png" />
                  <Vector1 src={vector2} />
                  <Vector2 src={vector3} />
                </GridLayout18>
              </Grid1>
            </IcListView>
            <IcGridview>
              <Thumbnail11>
                <Layer56>
                  <VectorContainer>
                    <Vector3 src={vector4} />
                    <Vector4 src={vector5} />
                  </VectorContainer>
                  <VectorContainer1>
                    <Vector3 src={vector6} />
                    <Vector4 src={vector7} />
                  </VectorContainer1>
                </Layer56>
              </Thumbnail11>
            </IcGridview>
          </Title>
          <Pagination />
          <NAV>
            <Group86 />
            <Link to="/mobile-hamburger-menu">
              <Hamburgermenu>
                <X01></X01>
                <X02></X02>
                <X02></X02>
              </Hamburgermenu>
            </Link>
          </NAV>
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  width: 414px;
  height: 1103px;
  position: relative;
`;

const BACKGROUND = styled.div`
  position: absolute;
  width: 414px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 182px 21px;
  align-items: flex-start;
  min-height: 1103px;
  background-color: var(--hint-of-red);
`;

const Group127 = styled.div`
  width: 215px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 247px;
  cursor: pointer;
`;

const Group20 = styled.div`
  height: 215px;
  margin-left: 0;
  display: flex;
  padding: 35.4px 43px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 215px;
  background-color: var(--silver-sand);
  border-radius: 14px;
`;

const AddFriend2 = styled.img`
  width: 129px;
  height: 144px;
  object-fit: cover;
`;

const SuperAdmin = styled.div`
  width: 84px;
  height: 21px;
  margin-top: 13px;
  margin-left: 3px;
  font-family: var(--font-family-manrope);
  font-weight: 400;
  color: var(--royal-blue);
  font-size: var(--font-size-s);
  text-align: center;
  letter-spacing: 0;
  line-height: 10px;
`;

const Group23 = styled.div`
  width: 315px;
  margin-top: 37px;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 435px;
`;

const Dashboard = styled.div`
  ${MontserratBoldEerieBlack34px}
  width: 315px;
  height: 47px;
  margin-top: -2px;
  letter-spacing: 0;
  line-height: 38px;
`;

const LevelStatusCusto = styled.p`
  ${ManropeNormalQuickSilver12px}
  min-height: 59px;
  margin-top: 16px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const FlexRow = styled.div`
  height: 26px;
  margin-top: 90px;
  display: flex;
  align-items: flex-start;
  min-width: 315px;
`;

const IconCall = styled.img`
  width: 17px;
  height: 17px;
  align-self: center;
  margin-top: 0.25px;
  object-fit: cover;
`;

const Phone = styled.div`
  ${ManropeNormalQuickSilver12px}
  min-height: 19px;
  margin-left: 17px;
  min-width: 41px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const SuperAdmin1 = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 59px;
  height: 22px;
  align-self: flex-end;
  margin-left: 181px;
  letter-spacing: 0;
  line-height: 14px;
  cursor: pointer;
`;

const FlexRow1 = styled.div`
  height: 24px;
  margin-top: 54px;
  display: flex;
  align-items: flex-start;
  min-width: 315px;
`;

const Email21 = styled.img`
  width: 19px;
  height: 13px;
  align-self: center;
  margin-top: 1.52px;
  object-fit: cover;
`;

const Email = styled.div`
  ${ManropeNormalQuickSilver12px}
  min-height: 19px;
  margin-left: 15px;
  min-width: 35px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const SuperAdmin2 = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 59px;
  height: 21px;
  align-self: flex-end;
  margin-left: 187px;
  letter-spacing: 0;
  line-height: 14px;
  cursor: pointer;
`;

const Dashboard1 = styled.div`
  ${ManropeBoldEerieBlack20px}
  height: 33px;
  margin-bottom: -5px;
  margin-top: 51px;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const PlunderdesigncomwebAlias = styled.div`
  ${ManropeNormalQuickSilver18px}
  min-height: 26px;
  margin-top: 12px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Title = styled.div`
  position: absolute;
  height: 61px;
  top: 94px;
  left: 21px;
  display: flex;
  align-items: flex-end;
  min-width: 373px;
`;

const MyAccount = styled.div`
  ${MontserratBoldBlack24px}
  min-height: 31px;
  align-self: flex-start;
  margin-top: 2.5px;
  min-width: 145px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const IcListView = styled.div`
  height: 56px;
  margin-left: 100px;
  display: flex;
  padding: 0 19px;
  align-items: center;
  min-width: 56px;
  background-color: var(--white);
  border-radius: 14px;
  box-shadow: 0px 4px 8px #0000000a;
`;

const Grid1 = styled.div`
  width: 18px;
  height: 18px;
  display: flex;
`;

const GridLayout18 = styled.div`
  flex: 1;
  width: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
`;

const Vector = styled.img`
  width: 18px;
  height: 5px;
  object-fit: cover;
`;

const Vector1 = styled.img`
  width: 18px;
  height: 4px;
  margin-top: 2px;
  object-fit: cover;
`;

const Vector2 = styled.img`
  width: 18px;
  height: 5px;
  margin-top: 2px;
  object-fit: cover;
`;

const IcGridview = styled.div`
  height: 56px;
  margin-left: 16px;
  display: flex;
  padding: 18px 18px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 56px;
  background-color: var(--white);
  border-radius: 14px;
  box-shadow: 0px 4px 8px #0000000a;
`;

const Thumbnail11 = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
`;

const Layer56 = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  min-width: 20.00017547607422px;
`;

const VectorContainer = styled.div`
  width: 9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 20px;
`;

const Vector3 = styled.img`
  width: 9px;
  height: 9px;
  object-fit: cover;
`;

const Vector4 = styled.img`
  width: 9px;
  height: 9px;
  margin-top: 2px;
  object-fit: cover;
`;

const VectorContainer1 = styled.div`
  width: 9px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 20px;
`;

const NAV = styled.div`
  position: absolute;
  width: 414px;
  height: 79px;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--white);
`;

const Hamburgermenu = styled.div`
  margin-bottom: -22.3px;
  width: 46px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  padding: 13px 0;
  align-items: center;
  min-height: 46px;
  cursor: pointer;
`;

const X01 = styled.div`
  width: 26px;
  height: 3px;
  margin-top: 1px;
  background-color: var(--eerie-black);
  border-radius: 8px;
`;

const X02 = styled.div`
  width: 26px;
  height: 3px;
  margin-top: 5px;
  background-color: var(--eerie-black);
  border-radius: 8px;
`;

export default MobileMyAccount;
