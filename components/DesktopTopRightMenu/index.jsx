import React from "react";
import { Link } from "react-router-dom";
import Group40 from "../Group40";
import "./DesktopTopRightMenu.css";

function DesktopTopRightMenu(props) {
  const { desktopTopRightMenu, background, addFriend2, loremIpsum, path43, dolorSitAmet } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-top-right-menu screen" style={{ backgroundImage: `url(${desktopTopRightMenu})` }}>
        <div className="overlap-group-4">
          <div className="background"></div>
          <img className="background-1" src={background} />
          <div className="arrow"></div>
          <Link to="/desktop-my-account">
            <div className="group-42">
              <img className="add-friend-2-4" src={addFriend2} />
              <div className="lorem-ipsum manrope-semi-bold-quick-silver-20px">{loremIpsum}</div>
            </div>
          </Link>
          <div className="group-41">
            <img className="path-43" src={path43} />
            <a href="https://nulifespan.com/store-2/" target="_blank">
              <div className="dolor-sit-amet manrope-semi-bold-quick-silver-20px">{dolorSitAmet}</div>
            </a>
          </div>
          <Group40 />
        </div>
      </div>
    </div>
  );
}

export default DesktopTopRightMenu;
