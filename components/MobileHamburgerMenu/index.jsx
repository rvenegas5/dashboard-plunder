import React from "react";
import { Link } from "react-router-dom";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import Dashboard1 from "../Dashboard1";
import Group85 from "../Group85";
import styled from "styled-components";
import { AvenirMediumQuickSilver15px } from "../../styledMixins";
import "./MobileHamburgerMenu.css";

function MobileHamburgerMenu(props) {
  const {
    menu,
    dashboard,
    proposal,
    projects1,
    icon,
    projects2,
    projects3,
    path43,
    settings1,
    setting1,
    settings2,
    path41,
    settings3,
    buttonCloseCopy2Props,
    dashboard1Props,
    group85Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-hamburger-menu screen">
        <Mobile>
          <MENU style={{ backgroundImage: `url(${menu})` }}>
            <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
            <OverlapGroup1>
              <Link to="/mobile-dashboard">
                <Group120>
                  <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                  <Dashboard>{dashboard}</Dashboard>
                </Group120>
              </Link>
              <ActiveIndicator></ActiveIndicator>
            </OverlapGroup1>
            <Link to="/mobile-ecwid-social-connect-dashboard">
              <Group119>
                <Proposal style={{ backgroundImage: `url(${proposal})` }}></Proposal>
                <Projects>{projects1}</Projects>
              </Group119>
            </Link>
            <Link to="/mobile-my-account">
              <Group128>
                <Icon src={icon} />
                <Projects1>{projects2}</Projects1>
              </Group128>
            </Link>
            <Link to="/mobile-my-reports-distributers-only">
              <Group117>
                <Group85 path69={group85Props.path69} path70={group85Props.path70} className={group85Props.className} />
                <Projects2>{projects3}</Projects2>
              </Group117>
            </Link>
            <Group116>
              <Path43 src={path43} />
              <Settings>{settings1}</Settings>
            </Group116>
            <Group115>
              <Setting1 style={{ backgroundImage: `url(${setting1})` }}></Setting1>
              <Settings1>{settings2}</Settings1>
            </Group115>
            <Group114>
              <Path41 src={path41} />
              <Settings2>{settings3}</Settings2>
            </Group114>
          </MENU>
        </Mobile>
      </div>
    </div>
  );
}

const Mobile = styled.div`
  width: 318px;
  height: 640px;
  margin-left: 66px;
  margin-top: 46px;
  display: flex;
`;

const MENU = styled.div`
  flex: 1;
  width: 318px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 29px 0;
  align-items: flex-end;
  min-height: 100%;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup1 = styled.div`
  width: 318px;
  height: 50px;
  position: relative;
  margin-top: 22px;
`;

const Group120 = styled.div`
  position: absolute;
  height: 50px;
  top: 0;
  left: 0;
  display: flex;
  padding: 12px 52.3px;
  align-items: flex-start;
  min-width: 318px;
  background-color: var(--white);
  cursor: pointer;
`;

const Dashboard = styled.div`
  width: 87px;
  height: 24px;
  margin-left: 25px;
  font-family: var(--font-family-manrope);
  font-weight: 700;
  color: var(--geyser);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: 15px;
`;

const ActiveIndicator = styled.div`
  position: absolute;
  width: 6px;
  height: 49px;
  top: 0;
  left: 312px;
  background-color: var(--bizarre);
  border-radius: 25px;
`;

const Group119 = styled.div`
  height: 50px;
  margin-top: 4px;
  display: flex;
  padding: 12px 53.2px;
  align-items: center;
  min-width: 318px;
  background-color: var(--white);
  cursor: pointer;
`;

const Proposal = styled.div`
  width: 18px;
  height: 24px;
  margin-top: 0.5px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Projects = styled.div`
  ${AvenirMediumQuickSilver15px}
  width: 145px;
  height: 24px;
  align-self: flex-end;
  margin-left: 30px;
  letter-spacing: 0;
  line-height: 15px;
`;

const Group128 = styled.div`
  height: 50px;
  margin-top: 4px;
  display: flex;
  padding: 13px 53px;
  align-items: flex-start;
  min-width: 318px;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 17px;
  height: 20px;
  object-fit: cover;
`;

const Projects1 = styled.div`
  ${AvenirMediumQuickSilver15px}
  width: 145px;
  height: 24px;
  align-self: center;
  margin-left: 31px;
  letter-spacing: 0;
  line-height: 15px;
`;

const Group117 = styled.div`
  height: 50px;
  position: relative;
  margin-top: 4px;
  display: flex;
  padding: 11px 53px;
  align-items: center;
  min-width: 318px;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
`;

const Projects2 = styled.div`
  ${AvenirMediumQuickSilver15px}
  width: 145px;
  height: 24px;
  align-self: flex-end;
  margin-left: 31px;
  letter-spacing: 0;
  line-height: 15px;
`;

const Group116 = styled.div`
  height: 50px;
  margin-top: 3px;
  display: flex;
  padding: 12px 52px;
  align-items: flex-start;
  min-width: 318px;
  background-color: var(--white);
`;

const Path43 = styled.img`
  width: 23px;
  height: 25px;
  margin-top: 0;
  object-fit: cover;
`;

const Settings = styled.div`
  ${AvenirMediumQuickSilver15px}
  width: 94px;
  height: 24px;
  align-self: flex-end;
  margin-left: 26px;
  letter-spacing: 0;
  line-height: 15px;
`;

const Group115 = styled.div`
  height: 50px;
  margin-top: 4px;
  display: flex;
  padding: 11px 49.6px;
  align-items: center;
  min-width: 318px;
  background-color: var(--white);
`;

const Setting1 = styled.div`
  width: 28px;
  height: 28px;
  align-self: flex-end;
  background-size: cover;
  background-position: 50% 50%;
`;

const Settings1 = styled.div`
  ${AvenirMediumQuickSilver15px}
  width: 94px;
  height: 24px;
  margin-left: 23px;
  margin-top: 2px;
  letter-spacing: 0;
  line-height: 15px;
`;

const Group114 = styled.div`
  height: 50px;
  display: flex;
  padding: 12px 54px;
  align-items: center;
  min-width: 318px;
  background-color: var(--white);
`;

const Path41 = styled.img`
  width: 22px;
  height: 22px;
  margin-top: 0.24px;
  object-fit: cover;
`;

const Settings2 = styled.div`
  width: 94px;
  height: 24px;
  align-self: flex-end;
  margin-left: 25px;
  font-family: var(--font-family-avenir-heavy);
  font-weight: 400;
  color: var(--eerie-black);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: 15px;
`;

export default MobileHamburgerMenu;
