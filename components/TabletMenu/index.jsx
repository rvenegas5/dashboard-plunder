import React from "react";
import { Link } from "react-router-dom";
import Group40 from "../Group40";
import "./TabletMenu.css";

function TabletMenu(props) {
  const { tabletMenu, overlapGroup1, background, addFriend2, loremIpsum, path43, dolorSitAmet, group40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-menu screen" style={{ backgroundImage: `url(${tabletMenu})` }}>
        <div className="overlap-group1-23" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <div className="background-6"></div>
          <img className="background-7" src={background} />
          <div className="arrow-11"></div>
          <Link to="/tablet-my-account">
            <div className="group-38">
              <img className="add-friend-2-5" src={addFriend2} />
              <div className="lorem-ipsum-1 manrope-semi-bold-quick-silver-20px">{loremIpsum}</div>
            </div>
          </Link>
          <Group40 className={group40Props.className} />
          <div className="group-43">
            <img className="path-43-1" src={path43} />
            <a href="https://nulifespan.com/store-2/" target="_blank">
              <div className="dolor-sit-amet-1 manrope-semi-bold-quick-silver-20px">{dolorSitAmet}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabletMenu;
