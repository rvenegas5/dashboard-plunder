import React from "react";
import { Link } from "react-router-dom";
import Group40 from "../Group40";
import styled from "styled-components";
import { ManropeSemiBoldQuickSilver20px } from "../../styledMixins";
import "./DesktopTopRightMenu.css";

function DesktopTopRightMenu(props) {
  const { desktopTopRightMenu, background, addFriend2, loremIpsum, path43, dolorSitAmet } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-top-right-menu screen" style={{ backgroundImage: `url(${desktopTopRightMenu})` }}>
        <OverlapGroup>
          <Background></Background>
          <Background1 src={background} />
          <Arrow></Arrow>
          <Link to="/desktop-my-account">
            <Group42>
              <AddFriend2 src={addFriend2} />
              <LoremIpsum>{loremIpsum}</LoremIpsum>
            </Group42>
          </Link>
          <Group41>
            <Path43 src={path43} />
            <a href="https://nulifespan.com/store-2/" target="_blank">
              <DolorSitAmet>{dolorSitAmet}</DolorSitAmet>
            </a>
          </Group41>
          <Group40 />
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 235px;
  height: 217px;
  position: relative;
  margin-left: 1593px;
`;

const Background = styled.div`
  position: absolute;
  width: 235px;
  height: 203px;
  top: 14px;
  left: 0;
  background-color: var(--white);
  border-radius: 14px;
  transform: rotate(180deg);
  box-shadow: 0px 1px 56px #0000001f;
`;

const Background1 = styled.img`
  position: absolute;
  width: 203px;
  height: 70px;
  top: 147px;
  left: 32px;
  object-fit: cover;
`;

const Arrow = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  top: 5px;
  left: 180px;
  background-color: var(--white);
  transform: rotate(225deg);
`;

const Group42 = styled.div`
  position: absolute;
  width: 180px;
  height: 51px;
  top: 36px;
  left: 31px;
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

const Group41 = styled.div`
  position: absolute;
  width: 182px;
  height: 51px;
  top: 96px;
  left: 29px;
  display: flex;
`;

const Path43 = styled.img`
  margin-top: 0.1px;
  width: 23.04931640625px;
  height: 25.4130859375px;
  margin-left: 0;
  object-fit: cover;
`;

const DolorSitAmet = styled.div`
  ${ManropeSemiBoldQuickSilver20px}
  margin-bottom: -2px;
  margin-left: 17px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 20px;
  cursor: pointer;
`;

export default DesktopTopRightMenu;
