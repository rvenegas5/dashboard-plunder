import React from "react";
import { Link } from "react-router-dom";
import Group86 from "../Group86";
import Pagination from "../Pagination";
import styled from "styled-components";
import { MontserratBoldBlack24px } from "../../styledMixins";
import "./MobileMyReportsDISTRIBUTERSONLY.css";

function MobileMyReportsDISTRIBUTERSONLY(props) {
  const { myReports, paginationProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-reports-distributers-only screen">
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
        <MyReports>{myReports}</MyReports>
        <Pagination className={paginationProps.className} />
      </div>
    </div>
  );
}

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

const MyReports = styled.div`
  ${MontserratBoldBlack24px}
  min-height: 31px;
  margin-top: 20px;
  margin-left: 27px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default MobileMyReportsDISTRIBUTERSONLY;
