import React from "react";
import { Link } from "react-router-dom";
import Group20 from "../Group20";
import Searchbox2 from "../Searchbox2";
import Dashboard1 from "../Dashboard1";
import Group85 from "../Group85";
import styled from "styled-components";
import {
  ManropeNormalRoyalBlue14px,
  MontserratBoldEerieBlack34px,
  OpensansBoldCloud16px,
  ManropeBoldEerieBlack20px,
  ManropeNormalQuickSilver18px,
  MontserratBoldBlack34px,
} from "../../styledMixins";
import "./TabletMyAccount.css";

function TabletMyAccount(props) {
  const {
    superAdmin1,
    levelStatusCusto,
    dashboard1,
    iconCall,
    phone,
    superAdmin2,
    email21,
    email,
    superAdmin3,
    dashboard2,
    plunderdesignComWeb_Alias,
    icon,
    profile,
    myAccount,
    path71,
    menu,
    proposal,
    users,
    searchbox2Props,
    dashboard1Props,
    group85Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-my-account screen">
        <OverlapGroup2>
          <BACKGROUND>
            <Link to="/tablet-upload-avatar">
              <Group127>
                <Group20 />
                <SuperAdmin>{superAdmin1}</SuperAdmin>
              </Group127>
            </Link>
            <Group126>
              <OverlapGroup1>
                <LevelStatusCusto>{levelStatusCusto}</LevelStatusCusto>
                <Dashboard>{dashboard1}</Dashboard>
              </OverlapGroup1>
              <Group31>
                <IconCall src={iconCall} />
                <Phone>{phone}</Phone>
                <Link to="/tablet-edit-cell-number" className="align-self-flex-end">
                  <SuperAdmin1>{superAdmin2}</SuperAdmin1>
                </Link>
              </Group31>
              <Group30>
                <Email21 src={email21} />
                <Email>{email}</Email>
                <Link to="/tablet-edit-email" className="align-self-flex-end">
                  <SuperAdmin2>{superAdmin3}</SuperAdmin2>
                </Link>
              </Group30>
              <OverlapGroup>
                <Dashboard2>{dashboard2}</Dashboard2>
                <PlunderdesigncomwebAlias>{plunderdesignComWeb_Alias}</PlunderdesigncomwebAlias>
              </OverlapGroup>
            </Group126>
          </BACKGROUND>
          <NAV>
            <Searchbox2 search2Props={searchbox2Props.search2Props} />
            <Separator></Separator>
            <Link to="/tablet-menu">
              <Profile>
                <OverlapGroup11>
                  <Icon src={icon} />
                </OverlapGroup11>
                <Profile1 style={{ backgroundImage: `url(${profile})` }}></Profile1>
              </Profile>
            </Link>
          </NAV>
          <MyAccount>{myAccount}</MyAccount>
          <SIDEBAR>
            <Link to="/tablet-dashboard">
              <Header>
                <OverlapGroup12>
                  <Path71 src={path71} />
                </OverlapGroup12>
              </Header>
            </Link>
            <Menus>
              <MENU>{menu}</MENU>
              <Link to="/tablet-dashboard">
                <Dashboard3>
                  <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                </Dashboard3>
              </Link>
              <Link to="/tablet-my-connections-ecwid-social-connect-dashboard">
                <Email1>
                  <Proposal style={{ backgroundImage: `url(${proposal})` }}></Proposal>
                </Email1>
              </Link>
              <Group121>
                <Users style={{ backgroundImage: `url(${users})` }}></Users>
              </Group121>
              <Link to="/tablet-my-reports-distributers-only">
                <Group95>
                  <Group85
                    path69={group85Props.path69}
                    path70={group85Props.path70}
                    className={group85Props.className}
                  />
                </Group95>
              </Link>
            </Menus>
          </SIDEBAR>
        </OverlapGroup2>
      </div>
    </div>
  );
}

const OverlapGroup2 = styled.div`
  width: 1024px;
  height: 1366px;
  position: relative;
`;

const BACKGROUND = styled.div`
  position: absolute;
  width: 1024px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 219px 154px;
  align-items: flex-start;
  min-height: 1363px;
  background-color: var(--hint-of-red);
`;

const Group127 = styled.div`
  width: 275px;
  position: relative;
  margin-left: 0;
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

const Group126 = styled.div`
  width: 509px;
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 395px;
`;

const OverlapGroup1 = styled.div`
  width: 477px;
  height: 133px;
  position: relative;
  margin-top: -2px;
  margin-left: 0;
`;

const LevelStatusCusto = styled.div`
  ${ManropeNormalQuickSilver18px}
  position: absolute;
  top: 55px;
  left: 0;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const Dashboard = styled.div`
  ${MontserratBoldEerieBlack34px}
  position: absolute;
  width: 477px;
  height: 66px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 38px;
`;

const Group31 = styled.div`
  height: 26px;
  margin-top: 73px;
  margin-left: 0;
  display: flex;
  align-items: center;
  min-width: 511px;
`;

const IconCall = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 1.5px;
  object-fit: cover;
`;

const Phone = styled.div`
  ${ManropeNormalQuickSilver18px}
  min-height: 26px;
  margin-left: 12px;
  min-width: 61px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const SuperAdmin1 = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 59px;
  height: 28px;
  align-self: flex-end;
  margin-left: 357px;
  margin-bottom: -2px;
  letter-spacing: 0;
  line-height: 14px;
  cursor: pointer;
`;

const Group30 = styled.div`
  height: 26px;
  margin-top: 49px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 511px;
`;

const Email21 = styled.img`
  width: 20px;
  height: 14px;
  margin-top: 0;
  object-fit: cover;
`;

const Email = styled.div`
  ${ManropeNormalQuickSilver18px}
  min-height: 26px;
  margin-left: 14px;
  min-width: 51px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
`;

const SuperAdmin2 = styled.div`
  ${ManropeNormalRoyalBlue14px}
  width: 59px;
  height: 28px;
  align-self: flex-end;
  margin-left: 367px;
  margin-bottom: -2px;
  letter-spacing: 0;
  line-height: 14px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 452px;
  height: 36px;
  position: relative;
  margin-top: 50px;
  margin-left: 0;
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
  top: 10px;
  left: 173px;
  letter-spacing: 0;
  line-height: 26px;
  white-space: nowrap;
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

const Profile1 = styled.div`
  width: 15px;
  height: 8px;
  margin-left: 16px;
  margin-top: 1px;
  background-size: cover;
  background-position: 50% 50%;
`;

const MyAccount = styled.div`
  ${MontserratBoldBlack34px}
  position: absolute;
  top: 148px;
  left: 155px;
  letter-spacing: 0;
  line-height: 34px;
  white-space: nowrap;
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

const OverlapGroup12 = styled.div`
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

const Dashboard3 = styled.div`
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

const Email1 = styled.div`
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
  cursor: pointer;
`;

export default TabletMyAccount;
