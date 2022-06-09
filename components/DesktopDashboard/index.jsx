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
import "./DesktopDashboard.css";
import { useParams } from "react-router-dom";

function DesktopDashboard(props) {
  const { email } = useParams();
  console.log(email);
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
      <div className="desktop-dashboard screen">
        <div className="overlap-group8">
          <BACKGROUND />
          <div className="group-113">
            <Searchbox />
            <Group2 />
            <Link to="/desktop-top-right-menu">
              <div className="profile">
                <div className="overlap-group1-1">
                  <img className="icon" src={icon} />
                </div>
                <Profile email={email} />
              </div>
            </Link>
          </div>
          <div className="separator"></div>
          <div className="overlap-group4">
            <div className="footer"></div>
            <div className="menus">
              <X01 dashboard1Props={x01Props.dashboard1Props} />
              <Link to="/desktop-my-connections-ecwid-social-connect-dashboard">
                <div className="x02">
                  <div
                    className="proposal"
                    style={{ backgroundImage: `url(${proposal})` }}
                  ></div>
                  <div className="projects avenir-medium-black-18px">
                    {projects}
                  </div>
                </div>
              </Link>
              <Link to="/desktop-my-account">
                <div className="group-83">
                  <Group82 iconUser={group82Props.iconUser} />
                </div>
              </Link>
              <Link to="/desktop-my-reports-distributers-only">
                <div className="group-84">
                  <Group822 group85Props={group822Props.group85Props} />
                </div>
              </Link>
            </div>
            <div
              className="overlap-group1-2"
              style={{ backgroundImage: `url(${overlapGroup1})` }}
            >
              <div className="button-withdraw-all-earning-5">
                <div className="learn-more avenir-medium-black-13px">
                  {learnMore}
                </div>
              </div>
            </div>
            <div
              className="overlap-group2-1"
              style={{ backgroundImage: `url(${overlapGroup2})` }}
            >
              <div className="overlap-group1-3">
                <img className="your-image-here" src={yourImageHere1} />
                <img className="sleepangle" src={sleepangle1} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-25">
                    <div
                      className="overlap-group-5"
                      style={{ backgroundImage: `url(${overlapGroup})` }}
                    >
                      <div className="explore avenir-book-normal-white-13px">
                        {explore}
                      </div>
                    </div>
                  </div>
                </a>
                <div className="ongoing avenir-book-normal-black-12px">
                  {ongoing1}
                </div>
              </div>
              <div className="just-in bodoni72-bold-eerie-black-24px">
                {justIn}
              </div>
            </div>
            <div
              className="overlap-group3-1"
              style={{ backgroundImage: `url(${overlapGroup3})` }}
            >
              <img className="your-image-here-1" src={yourImageHere2} />
              <img className="sleepangle-1" src={sleepangle2} />
              <a href="https://nulifespan.com/store-2/" target="_blank">
                <div className="group-25-1">
                  <div
                    className="overlap-group-6"
                    style={{ backgroundImage: `url(${overlapGroup4})` }}
                  >
                    <div className="subscribe avenir-book-normal-white-13px">
                      {subscribe}
                    </div>
                  </div>
                </div>
              </a>
              <div className="posse-box bodoni72-bold-eerie-black-24px">
                {posseBox}
              </div>
              <p className="ongoing-1 avenir-book-normal-black-12px">
                {ongoing2}
              </p>
            </div>
          </div>
          <CONTENT
            group681Props={cONTENTProps.group681Props}
            group682Props={cONTENTProps.group682Props}
            buttonWithdrawAllEarning2Props={
              cONTENTProps.buttonWithdrawAllEarning2Props
            }
            group1031Props={cONTENTProps.group1031Props}
            group1032Props={cONTENTProps.group1032Props}
            group98Props={cONTENTProps.group98Props}
            dateProps={cONTENTProps.dateProps}
          />
          <div className="activity-logs avenir-heavy-normal-eerie-black-24px">
            {activityLogs}
          </div>
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

export default DesktopDashboard;
