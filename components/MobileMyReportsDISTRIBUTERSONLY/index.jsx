import React from "react";
import { Link } from "react-router-dom";
import Group86 from "../Group86";
import Pagination from "../Pagination";
import "./MobileMyReportsDISTRIBUTERSONLY.css";

function MobileMyReportsDISTRIBUTERSONLY(props) {
  const { myReports, paginationProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-reports-distributers-only screen">
        <div className="nav-8">
          <Group86 />
          <Link to="/mobile-hamburger-menu">
            <div className="hamburgermenu-3">
              <div className="x01-12"></div>
              <div className="hamburgermenu-item-3"></div>
              <div className="hamburgermenu-item-3"></div>
            </div>
          </Link>
        </div>
        <div className="my-reports-2 montserrat-bold-black-24px">{myReports}</div>
        <Pagination className={paginationProps.className} />
      </div>
    </div>
  );
}

export default MobileMyReportsDISTRIBUTERSONLY;
