import React from "react";
import { Link } from "react-router-dom";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Profile from "../Profile";
import Dashboard1 from "../Dashboard1";
import Group82 from "../Group82";
import Group822 from "../Group822";
import Group112 from "../Group112";
import styled from "styled-components";
import {
  AvenirMediumCodGray18px,
  AvenirMediumBlack13px,
  AvenirBookNormalWhite13px,
  MontserratBoldBlack44px,
  AvenirMediumBlack18px,
  Bodoni72BoldEerieBlack24px,
  AvenirBookNormalBlack12px,
} from "../../styledMixins";
import "./DesktopMyConnectionsEcwidSocialConn.css";

function DesktopMyConnectionsEcwidSocialConn(props) {
  const {
    desktopMyConnectionsEcwidSocialConn,
    icon,
    dashboard,
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
    myConnections,
    dashboard1Props,
    group82Props,
    group822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div
        className="desktop-my-connections-ecwid-social-connect-dashboard screen"
        style={{ backgroundImage: `url(${desktopMyConnectionsEcwidSocialConn})` }}
      >
        <OverlapGroup6>
          <GroupContainer>
            <Group113>
              <NAV>
                <Searchbox />
                <Group2 />
                <Separator></Separator>
                <Link to="/desktop-top-right-menu">
                  <Profile1>
                    <OverlapGroup1>
                      <Icon src={icon} />
                    </OverlapGroup1>
                    <Profile />
                  </Profile1>
                </Link>
              </NAV>
            </Group113>
            <OverlapGroup4>
              <Footer></Footer>
              <Menus>
                <Link to="/desktop-dashboard">
                  <X01>
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                    <Dashboard>{dashboard}</Dashboard>
                  </X01>
                </Link>
                <Link to="/desktop-my-account">
                  <X02>
                    <Proposal style={{ backgroundImage: `url(${proposal})` }}></Proposal>
                    <Projects>{projects}</Projects>
                  </X02>
                </Link>
                <Link to="/desktop-my-account">
                  <Group83>
                    <Group82 iconUser={group82Props.iconUser} />
                  </Group83>
                </Link>
                <Link to="/desktop-my-reports-distributers-only">
                  <Group84>
                    <Group822 group85Props={group822Props.group85Props} />
                  </Group84>
                </Link>
              </Menus>
              <OverlapGroup11 style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <ButtonWithdrawAllEarning>
                  <LEARNMORE>{learnMore}</LEARNMORE>
                </ButtonWithdrawAllEarning>
              </OverlapGroup11>
              <OverlapGroup2 style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <OverlapGroup12>
                  <YourImageHere src={yourImageHere1} />
                  <SLEEPANGLE src={sleepangle1} />
                  <a href="https://nulifespan.com/store-2/" target="_blank">
                    <Group25>
                      <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
                        <EXPLORE>{explore}</EXPLORE>
                      </OverlapGroup>
                    </Group25>
                  </a>
                  <Ongoing>{ongoing1}</Ongoing>
                </OverlapGroup12>
                <JustIn>{justIn}</JustIn>
              </OverlapGroup2>
              <OverlapGroup3 style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <YourImageHere1 src={yourImageHere2} />
                <SLEEPANGLE1 src={sleepangle2} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <Group251>
                    <OverlapGroup5 style={{ backgroundImage: `url(${overlapGroup4})` }}>
                      <SUBSCRIBE>{subscribe}</SUBSCRIBE>
                    </OverlapGroup5>
                  </Group251>
                </a>
                <PosseBox>{posseBox}</PosseBox>
                <Ongoing1>{ongoing2}</Ongoing1>
              </OverlapGroup3>
            </OverlapGroup4>
            <Group112 />
          </GroupContainer>
          <MyConnections>{myConnections}</MyConnections>
        </OverlapGroup6>
      </div>
    </div>
  );
}

const OverlapGroup6 = styled.div`
  width: 1920px;
  height: 1439px;
  position: relative;
`;

const GroupContainer = styled.div`
  position: absolute;
  width: 1920px;
  height: 1439px;
  top: 0;
  left: 0;
`;

const Group113 = styled.div`
  position: absolute;
  width: 1920px;
  height: 120px;
  top: 0;
  left: 0;
  display: flex;
`;

const NAV = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  padding: 0 50px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1920px;
  background-color: var(--white);
`;

const Separator = styled.div`
  width: 1px;
  height: 56px;
  margin-left: 37px;
  background-color: var(--silver-sand);
  border-radius: 8px;
  opacity: 0.5;
`;

const Profile1 = styled.div`
  position: relative;
  margin-left: 30px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  min-width: 223px;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
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

const Dashboard = styled.div`
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
  cursor: pointer;
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

const OverlapGroup11 = styled.div`
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

const OverlapGroup12 = styled.div`
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

const OverlapGroup = styled.div`
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

const OverlapGroup3 = styled.div`
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

const OverlapGroup5 = styled.div`
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

const MyConnections = styled.div`
  ${MontserratBoldBlack44px}
  position: absolute;
  top: 155px;
  left: 404px;
  letter-spacing: 0;
  line-height: 44px;
  white-space: nowrap;
`;

export default DesktopMyConnectionsEcwidSocialConn;
