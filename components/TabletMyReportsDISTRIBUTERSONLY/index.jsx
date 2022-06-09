import React from "react";
import { Link } from "react-router-dom";
import Searchbox2 from "../Searchbox2";
import Dashboard1 from "../Dashboard1";
import Group85 from "../Group85";
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
        <div className="overlap-group3-9">
          <div className="overlap-group2-16">
            <div className="nav-4">
              <Searchbox2 search2Props={searchbox2Props.search2Props} />
              <div className="separator-5"></div>
              <Link to="/tablet-menu">
                <div className="profile-15">
                  <div className="overlap-group1-34">
                    <img className="icon-10" src={icon} />
                  </div>
                  <div className="profile-16" style={{ backgroundImage: `url(${profile})` }}></div>
                </div>
              </Link>
            </div>
            <div className="sidebar-3">
              <Link to="/tablet-dashboard">
                <div className="header-8">
                  <div className="overlap-group1-35">
                    <img className="path-71-3" src={path71} />
                  </div>
                </div>
              </Link>
              <div className="menus-7">
                <div className="menu-3 opensans-bold-cloud-16px">{menu}</div>
                <Link to="/tablet-dashboard">
                  <div className="dashboard-15">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                  </div>
                </Link>
                <Link to="/tablet-my-connections-ecwid-social-connect-dashboard">
                  <div className="email-5">
                    <div className="proposal-7" style={{ backgroundImage: `url(${proposal})` }}></div>
                  </div>
                </Link>
                <Link to="/tablet-my-account">
                  <div className="group-121-3">
                    <div className="users-3" style={{ backgroundImage: `url(${users})` }}></div>
                  </div>
                </Link>
                <div className="group-95-3">
                  <Group85
                    path69={group85Props.path69}
                    path70={group85Props.path70}
                    className={group85Props.className}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-reports-1 montserrat-bold-black-34px">{myReports}</div>
        </div>
      </div>
    </div>
  );
}

export default TabletMyReportsDISTRIBUTERSONLY;
