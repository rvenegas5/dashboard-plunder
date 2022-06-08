import React from "react";
import { Link } from "react-router-dom";
import Group40 from "../Group40";
import styled from "styled-components";
import { ManropeSemiBoldQuickSilver20px } from "../../styledMixins";
import "./TabletMenu.css";

function TabletMenu(props) {
  const { tabletMenu, overlapGroup1, background, addFriend2, loremIpsum, path43, dolorSitAmet, group40Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-menu screen" style={{ backgroundImage: `url(${tabletMenu})` }}>
        <OverlapGroup1 style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <Background></Background>
          <Background1 src={background} />
          <Arrow></Arrow>
          <Link to="/tablet-my-account">
            <Group38>
              <AddFriend2 src={addFriend2} />
              <LoremIpsum>{loremIpsum}</LoremIpsum>
            </Group38>
          </Link>
          <Group40 className={group40Props.className} />
          <Group43>
            <Path43 src={path43} />
            <a href="https://nulifespan.com/store-2/" target="_blank">
              <DolorSitAmet>{dolorSitAmet}</DolorSitAmet>
            </a>
          </Group43>
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  width: 1024px;
  height: 1366px;
  position: relative;
  background-size: cover;
  background-position: 50% 50%;
`;

const Background = styled.div`
  position: absolute;
  width: 235px;
  height: 203px;
  top: 124px;
  left: 762px;
  background-color: var(--white);
  border-radius: 14px;
  transform: rotate(180deg);
  box-shadow: 0px 1px 56px #0000001f;
`;

const Background1 = styled.img`
  position: absolute;
  width: 203px;
  height: 70px;
  top: 257px;
  left: 794px;
  object-fit: cover;
`;

const Arrow = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 115px;
  left: 942px;
  background-color: var(--white);
  transform: rotate(225deg);
`;

const Group38 = styled.div`
  position: absolute;
  width: 180px;
  height: 51px;
  top: 146px;
  left: 793px;
  display: flex;
  cursor: pointer;
`;

const AddFriend2 = styled.img`
  margin-top: 3.4px;
  width: 20.0126953125px;
  height: 19px;
  margin-left: 0;
  object-fit: cover;
`;

const LoremIpsum = styled.div`
  ${ManropeSemiBoldQuickSilver20px}
  margin-bottom: -2px;
  margin-left: 18px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 20px;
`;

const Group43 = styled.div`
  position: absolute;
  width: 180px;
  height: 51px;
  top: 206px;
  left: 793px;
  display: flex;
`;

const Path43 = styled.img`
  margin-top: 0;
  width: 23.04931640625px;
  height: 25.4130859375px;
  margin-left: 0;
  object-fit: cover;
`;

const DolorSitAmet = styled.div`
  ${ManropeSemiBoldQuickSilver20px}
  margin-bottom: -2px;
  margin-left: 15px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 20px;
  cursor: pointer;
`;

export default TabletMenu;
