import React from "react";
import { Link } from "react-router-dom";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Dashboard1 from "../Dashboard1";
import Group82 from "../Group82";
import Group822 from "../Group822";
import Group112 from "../Group112";
import "./DesktopMyReportsDISTRIBUTERSONLY.css";

function DesktopMyReportsDISTRIBUTERSONLY(props) {
  const {
    icon,
    franklinJr,
    superAdmin,
    arrow,
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
    myReports,
    dashboard1Props,
    group82Props,
    group822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-my-reports-distributers-only screen">
        <div className="overlap-group6-3">
          <div className="group-container-3">
            <div className="group-113-3">
              <Searchbox />
              <Group2 />
              <div className="profile-7">
                <div className="overlap-group1-19">
                  <img className="icon-6" src={icon} />
                </div>
                <Link to="/desktop-top-right-menu">
                  <div className="profile-8">
                    <div className="overlap-group-41">
                      <div className="franklin-jr-4 avenir-black-eerie-black-16px">{franklinJr}</div>
                      <div className="super-admin-9 avenir-book-normal-stack-14px">{superAdmin}</div>
                    </div>
                    <img className="arrow-10" src={arrow} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="overlap-group4-7">
              <div className="footer-3"></div>
              <div className="menus-3">
                <Link to="/desktop-dashboard">
                  <div className="x01-6">
                    <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                    <div className="dashboard-8 avenir-medium-cod-gray-18px">{dashboard}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-connections-ecwid-social-connect-dashboard">
                  <div className="x02-3">
                    <div className="proposal-3" style={{ backgroundImage: `url(${proposal})` }}></div>
                    <div className="projects-13 avenir-medium-black-18px">{projects}</div>
                  </div>
                </Link>
                <Link to="/desktop-my-account">
                  <div className="group-83-3">
                    <Group82 iconUser={group82Props.iconUser} />
                  </div>
                </Link>
                <div className="group-84-3">
                  <Group822 group85Props={group822Props.group85Props} />
                </div>
              </div>
              <div className="overlap-group1-20" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <div className="button-withdraw-all-earning-12">
                  <div className="learn-more-5 avenir-medium-black-13px">{learnMore}</div>
                </div>
              </div>
              <div className="overlap-group2-10" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="overlap-group1-21">
                  <img className="your-image-here-6" src={yourImageHere1} />
                  <img className="sleepangle-6" src={sleepangle1} />
                  <a href="https://nulifespan.com/store-2/" target="_blank">
                    <div className="group-25-6">
                      <div className="overlap-group-42" style={{ backgroundImage: `url(${overlapGroup})` }}>
                        <div className="explore-3 avenir-book-normal-white-13px">{explore}</div>
                      </div>
                    </div>
                  </a>
                  <div className="ongoing-6 avenir-book-normal-black-12px">{ongoing1}</div>
                </div>
                <div className="just-in-3 bodoni72-bold-eerie-black-24px">{justIn}</div>
              </div>
              <div className="overlap-group3-6" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                <img className="your-image-here-7" src={yourImageHere2} />
                <img className="sleepangle-7" src={sleepangle2} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-25-7">
                    <div className="overlap-group-43" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                      <div className="subscribe-3 avenir-book-normal-white-13px">{subscribe}</div>
                    </div>
                  </div>
                </a>
                <div className="posse-box-3 bodoni72-bold-eerie-black-24px">{posseBox}</div>
                <p className="ongoing-7 avenir-book-normal-black-12px">{ongoing2}</p>
              </div>
            </div>
            <Group112 />
          </div>
          <div className="my-reports montserrat-bold-black-44px">{myReports}</div>
        </div>
      </div>
    </div>
  );
}

export default DesktopMyReportsDISTRIBUTERSONLY;
