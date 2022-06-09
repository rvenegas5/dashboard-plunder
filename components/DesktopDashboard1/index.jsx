import React from "react";
import { Link } from "react-router-dom";
import BACKGROUND from "../BACKGROUND";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Profile from "../Profile";
import X01 from "../X01";
import Group82 from "../Group82";
import Group822 from "../Group822";
import CONTENT from "../CONTENT";
import Group79 from "../Group79";
import Group80 from "../Group80";
import Group70 from "../Group70";
import Group88 from "../Group88";
import Group112 from "../Group112";
import "./DesktopDashboard1.css";

function DesktopDashboard1(props) {
  const {
    icon,
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
    activityLogs,
    x01Props,
    group82Props,
    group822Props,
    cONTENTProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-dashboard-1 screen">
        <div className="overlap-group8-2">
          <BACKGROUND />
          <div className="group-113-4">
            <Searchbox />
            <Group2 />
            <Link to="/desktop-top-right-menu">
              <div className="profile-17">
                <div className="overlap-group1-45">
                  <img className="icon-13" src={icon} />
                </div>
                <Profile />
              </div>
            </Link>
          </div>
          <div className="separator-6"></div>
          <div className="overlap-group4-11">
            <div className="footer-4"></div>
            <div className="menus-8">
              <X01 dashboard1Props={x01Props.dashboard1Props} />
              <Link to="/desktop-my-connections-ecwid-social-connect-dashboard">
                <div className="x02-4">
                  <div className="proposal-9" style={{ backgroundImage: `url(${proposal})` }}></div>
                  <div className="projects-17 avenir-medium-black-18px">{projects}</div>
                </div>
              </Link>
              <Link to="/desktop-my-account">
                <div className="group-83-4">
                  <Group82 iconUser={group82Props.iconUser} />
                </div>
              </Link>
              <Link to="/desktop-my-reports-distributers-only">
                <div className="group-84-4">
                  <Group822 group85Props={group822Props.group85Props} />
                </div>
              </Link>
            </div>
            <div className="overlap-group1-46" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="button-withdraw-all-earning-22">
                <div className="learn-more-8 avenir-medium-black-13px">{learnMore}</div>
              </div>
            </div>
            <div className="overlap-group2-21" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="overlap-group1-47">
                <img className="your-image-here-10" src={yourImageHere1} />
                <img className="sleepangle-12" src={sleepangle1} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-25-11">
                    <div className="overlap-group-73" style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <div className="explore-6 avenir-book-normal-white-13px">{explore}</div>
                    </div>
                  </div>
                </a>
                <div className="ongoing-12 avenir-book-normal-black-12px">{ongoing1}</div>
              </div>
              <div className="just-in-6 bodoni72-bold-eerie-black-24px">{justIn}</div>
            </div>
            <div className="overlap-group3-13" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <img className="your-image-here-11" src={yourImageHere2} />
              <img className="sleepangle-13" src={sleepangle2} />
              <a href="https://nulifespan.com/store-2/" target="_blank">
                <div className="group-25-12">
                  <div className="overlap-group-74" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                    <div className="subscribe-6 avenir-book-normal-white-13px">{subscribe}</div>
                  </div>
                </div>
              </a>
              <div className="posse-box-6 bodoni72-bold-eerie-black-24px">{posseBox}</div>
              <p className="ongoing-13 avenir-book-normal-black-12px">{ongoing2}</p>
            </div>
          </div>
          <CONTENT
            group681Props={cONTENTProps.group681Props}
            group682Props={cONTENTProps.group682Props}
            buttonWithdrawAllEarning2Props={cONTENTProps.buttonWithdrawAllEarning2Props}
            group1031Props={cONTENTProps.group1031Props}
            group1032Props={cONTENTProps.group1032Props}
            group98Props={cONTENTProps.group98Props}
            dateProps={cONTENTProps.dateProps}
          />
          <div className="activity-logs-14 avenir-heavy-normal-eerie-black-24px">{activityLogs}</div>
          <Group79 />
          <Group80 />
          <Group70 />
          <Group88 />
          <Group112 />
        </div>
      </div>
    </div>
  );
}

export default DesktopDashboard1;
