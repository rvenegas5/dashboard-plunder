import React from "react";
import { Link } from "react-router-dom";
import Group20 from "../Group20";
import Searchbox from "../Searchbox";
import Group2 from "../Group2";
import Profile from "../Profile";
import Dashboard1 from "../Dashboard1";
import Group82 from "../Group82";
import Group822 from "../Group822";
import Group112 from "../Group112";
import "./DesktopMyAccount.css";

function DesktopMyAccount(props) {
  const {
    superAdmin1,
    dashboard1,
    levelStatusCusto,
    phone,
    email,
    dashboard2,
    plunderdesignComWeb_Alias,
    iconCall,
    email21,
    superAdmin2,
    superAdmin3,
    icon,
    dashboard3,
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
    myAccount,
    dashboard1Props,
    group82Props,
    group822Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-my-account screen">
        <div className="overlap-group5-2">
          <div className="background-4">
            <Link to="/desktop-upload-avatar">
              <div className="group-127">
                <Group20 />
                <div className="super-admin-6 manrope-normal-royal-blue-14px">{superAdmin1}</div>
              </div>
            </Link>
            <div className="group-23">
              <div className="group-123">
                <div className="overlap-group1-15">
                  <div className="big-title">
                    <div className="dashboard-5 montserrat-bold-eerie-black-34px">{dashboard1}</div>
                    <div className="level-status-custo manrope-normal-quick-silver-18px">{levelStatusCusto}</div>
                    <div className="phone manrope-normal-quick-silver-18px">{phone}</div>
                    <div className="email">{email}</div>
                    <div className="overlap-group-38">
                      <div className="dashboard-6 manrope-bold-eerie-black-20px">{dashboard2}</div>
                      <div className="plunderdesigncomweb_alias manrope-normal-quick-silver-18px">
                        {plunderdesignComWeb_Alias}
                      </div>
                    </div>
                  </div>
                  <img className="icon-call" src={iconCall} />
                  <img className="email-2-1" src={email21} />
                </div>
                <div className="super-admin-container">
                  <Link to="/desktop-edit-cell-number">
                    <div className="super-admin-7 manrope-normal-royal-blue-14px">{superAdmin2}</div>
                  </Link>
                  <Link to="/desktop-edit-email">
                    <div className="super-admin-8 manrope-normal-royal-blue-14px">{superAdmin3}</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="group-113-2">
            <Searchbox />
            <Group2 />
            <Link to="/desktop-top-right-menu">
              <div className="profile-6">
                <div className="overlap-group1-16">
                  <img className="icon-5" src={icon} />
                </div>
                <Profile />
              </div>
            </Link>
          </div>
          <div className="overlap-group4-6">
            <div className="footer-2"></div>
            <div className="menus-2">
              <Link to="/desktop-dashboard">
                <div className="x01-5">
                  <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
                  <div className="dashboard-7 avenir-medium-cod-gray-18px">{dashboard3}</div>
                </div>
              </Link>
              <Link to="/desktop-my-connections-ecwid-social-connect-dashboard">
                <div className="x02-2">
                  <div className="proposal-2" style={{ backgroundImage: `url(${proposal})` }}></div>
                  <div className="projects-12 avenir-medium-black-18px">{projects}</div>
                </div>
              </Link>
              <div className="group-83-2">
                <Group82 iconUser={group82Props.iconUser} />
              </div>
              <Link to="/desktop-my-reports-distributers-only">
                <div className="group-84-2">
                  <Group822 group85Props={group822Props.group85Props} />
                </div>
              </Link>
            </div>
            <div className="overlap-group1-17" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <div className="button-withdraw-all-earning-11">
                <div className="learn-more-4 avenir-medium-black-13px">{learnMore}</div>
              </div>
            </div>
            <div className="overlap-group2-9" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="overlap-group1-18">
                <img className="your-image-here-4" src={yourImageHere1} />
                <img className="sleepangle-4" src={sleepangle1} />
                <a href="https://nulifespan.com/store-2/" target="_blank">
                  <div className="group-25-4">
                    <div className="overlap-group-39" style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <div className="explore-2 avenir-book-normal-white-13px">{explore}</div>
                    </div>
                  </div>
                </a>
                <div className="ongoing-4 avenir-book-normal-black-12px">{ongoing1}</div>
              </div>
              <div className="just-in-2 bodoni72-bold-eerie-black-24px">{justIn}</div>
            </div>
            <div className="overlap-group3-5" style={{ backgroundImage: `url(${overlapGroup3})` }}>
              <img className="your-image-here-5" src={yourImageHere2} />
              <img className="sleepangle-5" src={sleepangle2} />
              <a href="https://nulifespan.com/store-2/" target="_blank">
                <div className="group-25-5">
                  <div className="overlap-group-40" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                    <div className="subscribe-2 avenir-book-normal-white-13px">{subscribe}</div>
                  </div>
                </div>
              </a>
              <div className="posse-box-2 bodoni72-bold-eerie-black-24px">{posseBox}</div>
              <p className="ongoing-5 avenir-book-normal-black-12px">{ongoing2}</p>
            </div>
          </div>
          <Group112 />
          <div className="my-account montserrat-bold-black-44px">{myAccount}</div>
        </div>
      </div>
    </div>
  );
}

export default DesktopMyAccount;
