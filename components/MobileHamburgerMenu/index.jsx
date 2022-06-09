import React from "react";
import { Link } from "react-router-dom";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import Dashboard1 from "../Dashboard1";
import Group85 from "../Group85";
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
        <div className="mobile">
          <div className="menu-4" style={{ backgroundImage: `url(${menu})` }}>
            <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
            <div className="overlap-group1-37">
              <Link to="/mobile-dashboard">
                <div className="group-120">
                  <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
                  <div className="dashboard-16">{dashboard}</div>
                </div>
              </Link>
              <div className="active-indicator"></div>
            </div>
            <Link to="/mobile-ecwid-social-connect-dashboard">
              <div className="group-119">
                <div className="proposal-8" style={{ backgroundImage: `url(${proposal})` }}></div>
                <div className="projects-14 avenir-medium-quick-silver-15px">{projects1}</div>
              </div>
            </Link>
            <Link to="/mobile-my-account">
              <div className="group-128">
                <img className="icon-11" src={icon} />
                <div className="projects-15 avenir-medium-quick-silver-15px">{projects2}</div>
              </div>
            </Link>
            <Link to="/mobile-my-reports-distributers-only">
              <div className="group-117">
                <Group85 path69={group85Props.path69} path70={group85Props.path70} className={group85Props.className} />
                <div className="projects-16 avenir-medium-quick-silver-15px">{projects3}</div>
              </div>
            </Link>
            <div className="group-116">
              <img className="path-43-2" src={path43} />
              <div className="settings avenir-medium-quick-silver-15px">{settings1}</div>
            </div>
            <div className="group-115">
              <div className="setting-1" style={{ backgroundImage: `url(${setting1})` }}></div>
              <div className="settings-1 avenir-medium-quick-silver-15px">{settings2}</div>
            </div>
            <div className="group-114">
              <img className="path-41" src={path41} />
              <div className="settings-2">{settings3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHamburgerMenu;
