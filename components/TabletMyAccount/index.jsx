import React from "react";
import { Link } from "react-router-dom";
import Group20 from "../Group20";
import Searchbox2 from "../Searchbox2";
import Dashboard1 from "../Dashboard1";
import Group85 from "../Group85";
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
        <div className="overlap-group2-15">
          <div className="background-9">
            <Link to="/tablet-upload-avatar">
              <div className="group-127-1">
                <Group20 />
                <div className="super-admin-12 manrope-normal-royal-blue-14px">{superAdmin1}</div>
              </div>
            </Link>
            <div className="group-126">
              <div className="overlap-group1-31">
                <div className="level-status-custo-1 manrope-normal-quick-silver-18px">{levelStatusCusto}</div>
                <div className="dashboard-12 montserrat-bold-eerie-black-34px">{dashboard1}</div>
              </div>
              <div className="group-31">
                <img className="icon-call-1" src={iconCall} />
                <div className="phone-1 manrope-normal-quick-silver-18px">{phone}</div>
                <Link to="/tablet-edit-cell-number" className="align-self-flex-end">
                  <div className="super-admin-13 manrope-normal-royal-blue-14px">{superAdmin2}</div>
                </Link>
              </div>
              <div className="group-30">
                <img className="email-2-1-1" src={email21} />
                <div className="email-3 manrope-normal-quick-silver-18px">{email}</div>
                <Link to="/tablet-edit-email" className="align-self-flex-end">
                  <div className="super-admin-14 manrope-normal-royal-blue-14px">{superAdmin3}</div>
                </Link>
              </div>
              <div className="overlap-group-58">
                <div className="dashboard-13 manrope-bold-eerie-black-20px">{dashboard2}</div>
                <div className="plunderdesigncomweb_alias-1 manrope-normal-quick-silver-18px">
                  {plunderdesignComWeb_Alias}
                </div>
              </div>
            </div>
          </div>
          <div className="nav-3">
            <Searchbox2 search2Props={searchbox2Props.search2Props} />
            <div className="separator-4"></div>
            <Link to="/tablet-menu">
              <div className="profile-13">
                <div className="overlap-group1-32">
                  <img className="icon-9" src={icon} />
                </div>
                <div className="profile-14" style={{ backgroundImage: `url(${profile})` }}></div>
              </div>
            </Link>
          </div>
          <div className="my-account-1 montserrat-bold-black-34px">{myAccount}</div>
          <div className="sidebar-2">
            <Link to="/tablet-dashboard">
              <div className="header-7">
                <div className="overlap-group1-33">
                  <img className="path-71-2" src={path71} />
                </div>
              </div>
            </Link>
            <div className="menus-6">
              <div className="menu-2 opensans-bold-cloud-16px">{menu}</div>
              <Link to="/tablet-dashboard">
                <div className="dashboard-14">
                  <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                </div>
              </Link>
              <Link to="/tablet-my-connections-ecwid-social-connect-dashboard">
                <div className="email-4">
                  <div className="proposal-6" style={{ backgroundImage: `url(${proposal})` }}></div>
                </div>
              </Link>
              <div className="group-121-2">
                <div className="users-2" style={{ backgroundImage: `url(${users})` }}></div>
              </div>
              <Link to="/tablet-my-reports-distributers-only">
                <div className="group-95-2">
                  <Group85
                    path69={group85Props.path69}
                    path70={group85Props.path70}
                    className={group85Props.className}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletMyAccount;
