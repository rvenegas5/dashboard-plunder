import React from "react";
import { Link } from "react-router-dom";
import Group86 from "../Group86";
import "./MobileEcwidSocialConnectDashboard.css";

function MobileEcwidSocialConnectDashboard(props) {
  const { overlapGroup, myConnections, searchbox } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-ecwid-social-connect-dashboard screen">
        <div className="overlap-group-70" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="nav-6">
            <Group86 />
            <Link to="/mobile-hamburger-menu">
              <div className="hamburgermenu-1">
                <div className="x01-10"></div>
                <div className="hamburgermenu-item-1"></div>
                <div className="hamburgermenu-item-1"></div>
              </div>
            </Link>
          </div>
          <div className="flex-row-17">
            <div className="my-connections-2 montserrat-bold-black-24px">{myConnections}</div>
            <Link to="/mobile-search-pop">
              <img className="searchbox-10" src={searchbox} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileEcwidSocialConnectDashboard;
