import React from "react";
import { Link } from "react-router-dom";
import Searchbox2 from "../Searchbox2";
import Dashboard1 from "../Dashboard1";
import Group85 from "../Group85";
import "./TabletMyConnectionsEcwidSocialConne.css";

function TabletMyConnectionsEcwidSocialConne(props) {
  const {
    background,
    icon,
    profile,
    myConnections,
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
      <div className="tablet-my-connections-ecwid-social-connect-dashboard screen">
        <div className="overlap-group2-14">
          <img className="background-8" src={background} />
          <div className="nav-2">
            <Searchbox2 search2Props={searchbox2Props.search2Props} />
            <div className="separator-3"></div>
            <Link to="/tablet-menu">
              <div className="profile-11">
                <div className="overlap-group1-29">
                  <img className="icon-8" src={icon} />
                </div>
                <div className="profile-12" style={{ backgroundImage: `url(${profile})` }}></div>
              </div>
            </Link>
          </div>
          <div className="my-connections-1 montserrat-bold-black-34px">{myConnections}</div>
          <div className="sidebar-1">
            <Link to="/tablet-dashboard">
              <div className="header-6">
                <div className="overlap-group1-30">
                  <img className="path-71-1" src={path71} />
                </div>
              </div>
            </Link>
            <div className="menus-5">
              <div className="menu-1 opensans-bold-cloud-16px">{menu}</div>
              <Link to="/tablet-dashboard">
                <div className="dashboard-11">
                  <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                </div>
              </Link>
              <div className="email-2">
                <div className="proposal-5" style={{ backgroundImage: `url(${proposal})` }}></div>
              </div>
              <Link to="/tablet-my-account">
                <div className="group-121-1">
                  <div className="users-1" style={{ backgroundImage: `url(${users})` }}></div>
                </div>
              </Link>
              <Link to="/tablet-my-reports-distributers-only">
                <div className="group-95-1">
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

export default TabletMyConnectionsEcwidSocialConne;
