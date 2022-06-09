import React from "react";
import { Link } from "react-router-dom";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Profile from "../Profile";
import Dashboard1 from "../Dashboard1";
import Group82 from "../Group82";
import Group822 from "../Group822";
import Group112 from "../Group112";
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
        <div className="overlap-group6-2">
          <div className="group-container-2">
            <div className="group-113-1">
              <div className="nav">
                <Searchbox />
                <Group2 />
                <div className="separator-1"></div>
                <Link to="/desktop-top-right-menu">
                  <div className="profile-5">
                    <div className="overlap-group1-12">
                      <img className="icon-4" src={icon} />
                    </div>
                    <Profile />
                  </div>
                </Link>
              </div>
            </div>
            <div className="overlap-group4-5">
              <div className="footer-1"></div>
              <div className="menus-1">
                <Link to="/desktop-dashboard">
                  <div className="x01-4">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                    <div className="dashboard-4 avenir-medium-cod-gray-18px">{dashboard}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-account">
                  <div className="x02-1">
                    <div className="proposal-1" style={{ backgroundImage: `url(${proposal})` }}></div>
                    <div className="projects-11 avenir-medium-black-18px">{projects}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-account">
                  <div className="group-83-1">
                    <Group82 iconUser={group82Props.iconUser} />
                  </div>
                </Link>
                <Link to="/desktop-my-reports-distributers-only">
                  <div className="group-84-1">
                    <Group822 group85Props={group822Props.group85Props} />
                  </div>
                </Link>
              </div>
              <div className="overlap-group1-13" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <div className="button-withdraw-all-earning-10">
                  <div className="learn-more-3 avenir-medium-black-13px">{learnMore}</div>
                </div>
              </div>
              <div className="overlap-group2-8" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="overlap-group1-14">
                  <img className="your-image-here-2" src={yourImageHere1} />
                  <img className="sleepangle-2" src={sleepangle1} />
                  <a href="https://nulifespan.com/store-2/" target="_blank">
                    <div className="group-25-2">
                      <div className="overlap-group-36" style={{ backgroundImage: `url(${overlapGroup})` }}>
                        <div className="explore-1 avenir-book-normal-white-13px">{explore}</div>
                      </div>
                    </div>
                  </a>
                  <div className="ongoing-2 avenir-book-normal-black-12px">{ongoing1}</div>
                </div>
                <div className="just-in-1 bodoni72-bold-eerie-black-24px">{justIn}</div>
              </div>
              <div className="overlap-group3-4" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <img className="your-image-here-3" src={yourImageHere2} />
                <img className="sleepangle-3" src={sleepangle2} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-25-3">
                    <div className="overlap-group-37" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                      <div className="subscribe-1 avenir-book-normal-white-13px">{subscribe}</div>
                    </div>
                  </div>
                </a>
                <div className="posse-box-1 bodoni72-bold-eerie-black-24px">{posseBox}</div>
                <p className="ongoing-3 avenir-book-normal-black-12px">{ongoing2}</p>
              </div>
            </div>
            <Group112 />
          </div>
          <div className="my-connections montserrat-bold-black-44px">{myConnections}</div>
        </div>
      </div>
    </div>
  );
}

export default DesktopMyConnectionsEcwidSocialConn;
