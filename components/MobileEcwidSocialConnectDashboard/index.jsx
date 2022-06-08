import React from "react";
import { Link } from "react-router-dom";
import Group86 from "../Group86";
import styled from "styled-components";
import { MontserratBoldBlack24px } from "../../styledMixins";
import "./MobileEcwidSocialConnectDashboard.css";

function MobileEcwidSocialConnectDashboard(props) {
  const { overlapGroup, myConnections, searchbox } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-ecwid-social-connect-dashboard screen">
        <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
          <NAV>
            <Group86 />
            <Link to="/mobile-hamburger-menu">
              <Hamburgermenu>
                <X01></X01>
                <X02></X02>
                <X02></X02>
              </Hamburgermenu>
            </Link>
          </NAV>
          <FlexRow>
            <MyConnections>{myConnections}</MyConnections>
            <Link to="/mobile-search-pop">
              <Searchbox src={searchbox} />
            </Link>
          </FlexRow>
        </OverlapGroup>
      </div>
    </div>
  );
}

const OverlapGroup = styled.div`
  width: 414px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 1337px;
  background-size: cover;
  background-position: 50% 50%;
`;

const NAV = styled.div`
  width: 414px;
  height: 79px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: var(--white);
`;

const Hamburgermenu = styled.div`
  margin-bottom: -22.3px;
  width: 46px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  padding: 13px 0;
  align-items: center;
  min-height: 46px;
  cursor: pointer;
`;

const X01 = styled.div`
  width: 26px;
  height: 3px;
  margin-top: 1px;
  background-color: var(--eerie-black);
  border-radius: 8px;
`;

const X02 = styled.div`
  width: 26px;
  height: 3px;
  margin-top: 5px;
  background-color: var(--eerie-black);
  border-radius: 8px;
`;

const FlexRow = styled.div`
  margin-top: 19px;
  margin-right: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 384px;
`;

const MyConnections = styled.div`
  ${MontserratBoldBlack24px}
  min-height: 31px;
  margin-top: 5.5px;
  min-width: 197px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Searchbox = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 107px;
  object-fit: cover;
  cursor: pointer;
`;

export default MobileEcwidSocialConnectDashboard;
