import React from "react";
import { Link } from "react-router-dom";
import Searchbox2 from "../Searchbox2";
import Dashboard1 from "../Dashboard1";
import Group85 from "../Group85";
import styled from "styled-components";
import { OpensansBoldCloud16px, MontserratBoldBlack34px } from "../../styledMixins";
import "./TabletMyReportsDISTRIBUTERSONLY.css";

function TabletMyReportsDISTRIBUTERSONLY(props) {
  const {
    icon,
    profile,
    path71,
    menu,
    proposal,
    users,
    myReports,
    searchbox2Props,
    dashboard1Props,
    group85Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-my-reports-distributers-only screen">
        <OverlapGroup3>
          <OverlapGroup2>
            <NAV>
              <Searchbox2 search2Props={searchbox2Props.search2Props} />
              <Separator></Separator>
              <Link to="/tablet-menu">
                <Profile>
                  <OverlapGroup1>
                    <Icon src={icon} />
                  </OverlapGroup1>
                  <Profile1 style={{ backgroundImage: `url(${profile})` }}></Profile1>
                </Profile>
              </Link>
            </NAV>
            <SIDEBAR>
              <Link to="/tablet-dashboard">
                <Header>
                  <OverlapGroup11>
                    <Path71 src={path71} />
                  </OverlapGroup11>
                </Header>
              </Link>
              <Menus>
                <MENU>{menu}</MENU>
                <Link to="/tablet-dashboard">
                  <Dashboard>
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                  </Dashboard>
                </Link>
                <Link to="/tablet-my-connections-ecwid-social-connect-dashboard">
                  <Email>
                    <Proposal style={{ backgroundImage: `url(${proposal})` }}></Proposal>
                  </Email>
                </Link>
                <Link to="/tablet-my-account">
                  <Group121>
                    <Users style={{ backgroundImage: `url(${users})` }}></Users>
                  </Group121>
                </Link>
                <Group95>
                  <Group85
                    path69={group85Props.path69}
                    path70={group85Props.path70}
                    className={group85Props.className}
                  />
                </Group95>
              </Menus>
            </SIDEBAR>
          </OverlapGroup2>
          <MyReports>{myReports}</MyReports>
        </OverlapGroup3>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 1024px;
  height: 1366px;
  position: relative;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1024px;
  height: 1366px;
  top: 0;
  left: 0;
`;

const NAV = styled.div`
  position: absolute;
  height: 120px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 47px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1024px;
  background-color: var(--white);
`;

const Separator = styled.div`
  width: 1px;
  height: 56px;
  margin-left: 367px;
  background-color: var(--black-haze);
  border-radius: 8px;
`;

const Profile = styled.div`
  margin-left: 24px;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  min-width: 88px;
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

const Profile1 = styled.div`
  width: 15px;
  height: 8px;
  margin-left: 16px;
  margin-top: 1px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SIDEBAR = styled.div`
  position: absolute;
  width: 120px;
  height: 1366px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 18px 4px 70px #00000005;
`;

const Header = styled.div`
  flex: 1;
  max-height: 120px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 100%;
  background-color: var(--white);
  cursor: pointer;
`;

const OverlapGroup11 = styled.div`
  height: 56px;
  display: flex;
  padding: 12.7px 10px;
  align-items: flex-start;
  min-width: 56px;
  background-color: var(--bizarre);
  border-radius: 14px;
`;

const Path71 = styled.img`
  width: 35px;
  height: 30px;
  object-fit: cover;
`;

const Menus = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 261px;
`;

const MENU = styled.div`
  ${OpensansBoldCloud16px}
  width: 66px;
  height: 24px;
  letter-spacing: 1px;
  line-height: 16px;
`;

const Dashboard = styled.div`
  height: 50px;
  position: relative;
  margin-top: 23px;
  margin-right: 2px;
  display: flex;
  padding: 13.3px 25.3px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 74px;
  background-color: var(--gallery);
  border-radius: 10px;
  cursor: pointer;
`;

const Email = styled.div`
  height: 50px;
  margin-top: 14px;
  margin-right: 2px;
  display: flex;
  padding: 0 28.2px;
  align-items: center;
  min-width: 74px;
  background-color: var(--white);
  cursor: pointer;
`;

const Proposal = styled.div`
  width: 18px;
  height: 24px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group121 = styled.div`
  height: 50px;
  margin-right: 2px;
  display: flex;
  padding: 15.1px 24.3px;
  align-items: flex-start;
  min-width: 74px;
  background-color: var(--white);
  cursor: pointer;
`;

const Users = styled.div`
  width: 25px;
  height: 20px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group95 = styled.div`
  height: 50px;
  position: relative;
  margin-right: 2px;
  display: flex;
  padding: 12.9px 26.8px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 74px;
  background-color: var(--white);
`;

const MyReports = styled.div`
  ${MontserratBoldBlack34px}
  position: absolute;
  top: 160px;
  left: 179px;
  letter-spacing: 0;
  line-height: 34px;
  white-space: nowrap;
`;

export default TabletMyReportsDISTRIBUTERSONLY;
