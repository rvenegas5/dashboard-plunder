import React from "react";
import { Link } from "react-router-dom";
import Group20 from "../Group20";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Profile from "../Profile";
import Dashboard1 from "../Dashboard1";
import Group82 from "../Group82";
import Group822 from "../Group822";
import Group112 from "../Group112";
import styled from "styled-components";
import {
  ManropeNormalRoyalBlue14px,
  ManropeBoldEerieBlack20px,
  AvenirBookNormalWhite13px,
  MontserratBoldBlack44px,
  AvenirBookNormalBlack12px,
  MontserratBoldEerieBlack34px,
  AvenirMediumCodGray18px,
  AvenirMediumBlack13px,
  Bodoni72BoldEerieBlack24px,
  AvenirMediumBlack18px,
  ManropeNormalQuickSilver18px,
} from "../../styledMixins";
import "./DesktopMyAccount.css";

function DesktopMyAccount(props) {
  const {
    superAdmin1,
    dashboard1,
    levelStatusCusto,
    phone,
    email,
    dashboard2,
    plunderdesignComWeb_Alias,
    iconCall,
    email21,
    superAdmin2,
    superAdmin3,
    icon,
    dashboard3,
    proposal,
    projects,
    overlapGroup1,
    learnMore,
    overlapGroup2,
    yourImageHere1,
    sleepangle1,
    overlapGroup,
    explore,
    ongoing1,
    justIn,
    overlapGroup3,
    yourImageHere2,
    sleepangle2,
    overlapGroup4,
    subscribe,
    posseBox,
    ongoing2,
    myAccount,
    dashboard1Props,
    group82Props,
    group822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-my-account screen">
        <OverlapGroup5>
          <BACKGROUND>
            <Link to="/desktop-upload-avatar">
              <Group127>
                <Group20 />
                <SuperAdmin>{superAdmin1}</SuperAdmin>
              </Group127>
            </Link>
            <Group23>
              <Group123>
                <OverlapGroup1>
                  <BigTitle>
                    <Dashboard>{dashboard1}</Dashboard>
                    <LevelStatusCusto>{levelStatusCusto}</LevelStatusCusto>
                    <Phone>{phone}</Phone>
                    <Email>{email}</Email>
                    <OverlapGroup>
                      <Dashboard2>{dashboard2}</Dashboard2>
                      <PlunderdesigncomwebAlias>{plunderdesignComWeb_Alias}</PlunderdesigncomwebAlias>
                    </OverlapGroup>
                  </BigTitle>
                  <IconCall src={iconCall} />
                  <Email21 src={email21} />
                </OverlapGroup1>
                <SuperAdminContainer>
                  <Link to="/desktop-edit-cell-number">
                    <SuperAdmin1>{superAdmin2}</SuperAdmin1>
                  </Link>
                  <Link to="/desktop-edit-email">
                    <SuperAdmin2>{superAdmin3}</SuperAdmin2>
                  </Link>
                </SuperAdminContainer>
              </Group123>
            </Group23>
          </BACKGROUND>
          <Group113>
            <Searchbox />
            <Group2 />
            <Link to="/desktop-top-right-menu">
              <Profile1>
                <OverlapGroup11>
                  <Icon src={icon} />
                </OverlapGroup11>
                <Profile />
              </Profile1>
            </Link>
          </Group113>
          <OverlapGroup4>
            <Footer></Footer>
            <Menus>
              <Link to="/desktop-dashboard">
                <X01>
                  <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                  <Dashboard3>{dashboard3}</Dashboard3>
                </X01>
              </Link>
              <Link to="/desktop-my-connections-ecwid-social-connect-dashboard">
                <X02>
                  <Proposal style={{ backgroundImage: `url(${proposal})` }}></Proposal>
                  <Projects>{projects}</Projects>
                </X02>
              </Link>
              <Group83>
                <Group82 iconUser={group82Props.iconUser} />
              </Group83>
              <Link to="/desktop-my-reports-distributers-only">
                <Group84>
                  <Group822 group85Props={group822Props.group85Props} />
                </Group84>
              </Link>
            </Menus>
            <OverlapGroup12 style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <ButtonWithdrawAllEarning>
                <LEARNMORE>{learnMore}</LEARNMORE>
              </ButtonWithdrawAllEarning>
            </OverlapGroup12>
            <OverlapGroup2 style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <OverlapGroup13>
                <YourImageHere src={yourImageHere1} />
                <SLEEPANGLE src={sleepangle1} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <Group25>
                    <OverlapGroup3 style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <EXPLORE>{explore}</EXPLORE>
                    </OverlapGroup3>
                  </Group25>
                </a>
                <Ongoing>{ongoing1}</Ongoing>
              </OverlapGroup13>
              <JustIn>{justIn}</JustIn>
            </OverlapGroup2>
            <OverlapGroup31 style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <YourImageHere1 src={yourImageHere2} />
              <SLEEPANGLE1 src={sleepangle2} />
              <a href="https://nulifespan.com/store-2/" target="_blank">
                <Group251>
                  <OverlapGroup6 style={{ backgroundImage: `url(${overlapGroup4})` }}>
                    <SUBSCRIBE>{subscribe}</SUBSCRIBE>
                  </OverlapGroup6>
                </Group251>
              </a>
              <PosseBox>{posseBox}</PosseBox>
              <Ongoing1>{ongoing2}</Ongoing1>
            </OverlapGroup31>
          </OverlapGroup4>
          <Group112 />
          <MyAccount>{myAccount}</MyAccount>
        </OverlapGroup5>
      </div>
    </div>
  );
}

const OverlapGroup5 = styled.div`
  width: 1920px;
  height: 1439px;
  position: relative;
`;

const BACKGROUND = styled.div`
  position: absolute;
  width: 1920px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 236px 410px;
  align-items: flex-start;
  min-height: 1421px;
  background-color: var(--hint-of-red);
`;

const Group127 = styled.div`
  width: 275px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 315px;
  cursor: pointer;
`;

const SuperAdmin = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 107px;
  height: 26px;
  margin-top: 16px;
  margin-left: 2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 14px;
`;

const Group23 = styled.div`
  width: 509px;
  height: 417px;
  margin-top: 40px;
  display: flex;
`;

const Group123 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 511px;
`;

const OverlapGroup1 = styled.div`
  width: 445px;
  height: 417px;
  position: relative;
`;

const BigTitle = styled.div`
  position: absolute;
  width: 445px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 417px;
`;

const Dashboard = styled.div`
  ${MontserratBoldEerieBlack34px}
  width: 330px;
  height: 54px;
  margin-top: -2px;
  letter-spacing: 0;
  line-height: 38px;
`;

const LevelStatusCusto = styled.div`
  ${ManropeNormalQuickSilver18px}
  min-height: 78px;
  margin-top: 23px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Phone = styled.div`
  ${ManropeNormalQuickSilver18px}
  min-height: 26px;
  margin-top: 65px;
  margin-left: 34px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Email = styled.div`
  min-height: 26px;
  margin-top: 55px;
  margin-left: 34px;
  font-family: var(--font-family-manrope);
  color: #7a86a1;
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 445px;
  height: 34px;
  position: relative;
  margin-top: 52px;
`;

const Dashboard2 = styled.div`
  ${ManropeBoldEerieBlack20px}
  position: absolute;
  width: 330px;
  height: 33px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 38px;
  white-space: nowrap;
`;

const PlunderdesigncomwebAlias = styled.div`
  ${ManropeNormalQuickSilver18px}
  position: absolute;
  top: 8px;
  left: 166px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const IconCall = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 221px;
  left: 0;
  object-fit: cover;
`;

const Email21 = styled.img`
  position: absolute;
  width: 20px;
  height: 14px;
  top: 305px;
  left: 0;
  object-fit: cover;
`;

const SuperAdminContainer = styled.div`
  width: 59px;
  margin-left: 7px;
  margin-top: 145px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 98px;
`;

const SuperAdmin1 = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 59px;
  height: 28px;
  letter-spacing: 0;
  line-height: 14px;
  cursor: pointer;
`;

const SuperAdmin2 = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 59px;
  height: 28px;
  margin-top: 42px;
  letter-spacing: 0;
  line-height: 14px;
  cursor: pointer;
`;

const Group113 = styled.div`
  position: absolute;
  height: 120px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 50px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1920px;
  background-color: var(--white);
`;

const Profile1 = styled.div`
  position: relative;
  margin-left: 68px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  min-width: 223px;
  cursor: pointer;
`;

const OverlapGroup11 = styled.div`
  height: 57px;
  display: flex;
  padding: 15px 17px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 57px;
  background-color: var(--silver-sand);
  border-radius: 14px;
`;

const Icon = styled.img`
  width: 22px;
  height: 26px;
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 345px;
  height: 1455px;
  top: 0;
  left: 0;
`;

const Footer = styled.div`
  position: absolute;
  width: 345px;
  height: 1421px;
  top: 0;
  left: 0;
  background-color: var(--white);
  box-shadow: 18px 4px 70px #00000005;
`;

const Menus = styled.div`
  position: absolute;
  width: 285px;
  top: 120px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 220px;
`;

const X01 = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  padding: 9px 22.3px;
  align-items: center;
  min-width: 285px;
  background-color: var(--bizarre);
  border-radius: 10px;
  cursor: pointer;
`;

const Dashboard3 = styled.div`
  ${AvenirMediumCodGray18px}
  width: 98px;
  height: 31px;
  align-self: flex-end;
  margin-left: 28px;
  letter-spacing: 0;
  line-height: 18px;
`;

const X02 = styled.div`
  height: 50px;
  margin-top: 14px;
  display: flex;
  padding: 9px 25.2px;
  align-items: center;
  min-width: 285px;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
`;

const Proposal = styled.div`
  width: 18px;
  height: 24px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Projects = styled.div`
  ${AvenirMediumBlack18px}
  width: 145px;
  height: 29px;
  align-self: flex-end;
  margin-left: 31px;
  letter-spacing: 0;
  line-height: 18px;
`;

const Group83 = styled.div`
  height: 50px;
  position: relative;
  margin-top: 6px;
  display: flex;
  padding: 11px 26px;
  align-items: flex-end;
  min-width: 285px;
  background-color: var(--white);
  border-radius: 10px;
`;

const Group84 = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  padding: 11px 26px;
  align-items: flex-end;
  min-width: 285px;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
`;

const OverlapGroup12 = styled.div`
  position: absolute;
  height: 600px;
  top: 382px;
  left: 30px;
  display: flex;
  padding: 17.2px 14px;
  align-items: flex-end;
  min-width: 285px;
  border-radius: 10px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ButtonWithdrawAllEarning = styled.div`
  height: 40px;
  display: flex;
  padding: 0 9.7px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 108px;
  background-color: var(--bizarre);
  border-radius: 10px;
  box-shadow: 2.7783708572387695px 15.75692367553711px 40px #695f970d;
`;

const LEARNMORE = styled.div`
  ${AvenirMediumBlack13px}
  min-height: 20px;
  margin-top: -3.5px;
  min-width: 86px;
  text-align: center;
  letter-spacing: 0.08px;
  line-height: 49px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 309px;
  height: 224px;
  top: 1001px;
  left: 18px;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup13 = styled.div`
  position: absolute;
  width: 270px;
  height: 200px;
  top: 8px;
  left: 27px;
`;

const YourImageHere = styled.img`
  position: absolute;
  width: 191px;
  height: 191px;
  top: 7px;
  left: 79px;
  object-fit: cover;
`;

const SLEEPANGLE = styled.img`
  position: absolute;
  width: 128px;
  height: 200px;
  top: 0;
  left: 142px;
  object-fit: cover;
`;

const Group25 = styled.div`
  position: absolute;
  height: 40px;
  top: 147px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 114px;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  height: 160px;
  margin-top: -44.24px;
  display: flex;
  padding: 40.7px 86px;
  align-items: flex-start;
  min-width: 234px;
  background-size: cover;
  background-position: 50% 50%;
`;

const EXPLORE = styled.div`
  ${AvenirBookNormalWhite13px}
  min-height: 20px;
  min-width: 58px;
  text-align: center;
  letter-spacing: 0.08px;
  line-height: 49px;
  white-space: nowrap;
`;

const Ongoing = styled.div`
  ${AvenirBookNormalBlack12px}
  position: absolute;
  width: 114px;
  height: 46px;
  top: 61px;
  left: 0;
  letter-spacing: 0;
  line-height: 12px;
`;

const JustIn = styled.div`
  ${Bodoni72BoldEerieBlack24px}
  position: absolute;
  top: 34px;
  left: 27px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const OverlapGroup31 = styled.div`
  position: absolute;
  width: 309px;
  height: 224px;
  top: 1231px;
  left: 18px;
  background-size: cover;
  background-position: 50% 50%;
`;

const YourImageHere1 = styled.img`
  position: absolute;
  width: 191px;
  height: 191px;
  top: 15px;
  left: 106px;
  object-fit: cover;
`;

const SLEEPANGLE1 = styled.img`
  position: absolute;
  width: 128px;
  height: 200px;
  top: 8px;
  left: 169px;
  object-fit: cover;
`;

const Group251 = styled.div`
  position: absolute;
  height: 40px;
  top: 158px;
  left: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 114px;
  cursor: pointer;
`;

const OverlapGroup6 = styled.div`
  height: 160px;
  margin-top: -44.24px;
  display: flex;
  padding: 40.7px 80px;
  align-items: flex-start;
  min-width: 234px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SUBSCRIBE = styled.div`
  ${AvenirBookNormalWhite13px}
  min-height: 20px;
  min-width: 70px;
  text-align: center;
  letter-spacing: 0.08px;
  line-height: 49px;
  white-space: nowrap;
`;

const PosseBox = styled.div`
  ${Bodoni72BoldEerieBlack24px}
  position: absolute;
  top: 50px;
  left: 24px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Ongoing1 = styled.p`
  ${AvenirBookNormalBlack12px}
  position: absolute;
  width: 133px;
  height: 46px;
  top: 84px;
  left: 24px;
  letter-spacing: 0;
  line-height: 12px;
`;

const MyAccount = styled.div`
  ${MontserratBoldBlack44px}
  position: absolute;
  top: 156px;
  left: 408px;
  letter-spacing: 0;
  line-height: 44px;
  white-space: nowrap;
`;

export default DesktopMyAccount;
