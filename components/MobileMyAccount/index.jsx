import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import Group86 from "../Group86";
import "./MobileMyAccount.css";

function MobileMyAccount(props) {
  const {
    addFriend2,
    superAdmin1,
    dashboard1,
    levelStatusCusto,
    iconCall,
    phone,
    superAdmin2,
    email21,
    email,
    superAdmin3,
    dashboard2,
    plunderdesignComWeb_Alias,
    myAccount,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-my-account screen">
        <div className="overlap-group1-44">
          <div className="background-10">
            <Link to="/mobile-upload-avatar">
              <div className="group-127-2">
                <div className="group-20-4">
                  <img className="add-friend-2-7" src={addFriend2} />
                </div>
                <div className="super-admin-18">{superAdmin1}</div>
              </div>
            </Link>
            <div className="group-23-1">
              <div className="dashboard-17 montserrat-bold-eerie-black-34px">{dashboard1}</div>
              <p className="level-status-custo-2 manrope-normal-quick-silver-12px">{levelStatusCusto}</p>
              <div className="flex-row-18">
                <img className="icon-call-2" src={iconCall} />
                <div className="phone-2 manrope-normal-quick-silver-12px">{phone}</div>
                <Link to="/mobile-edit-cell-number" className="align-self-flex-end">
                  <div className="super-admin-19 manrope-normal-royal-blue-14px">{superAdmin2}</div>
                </Link>
              </div>
              <div className="flex-row-19">
                <img className="email-2-1-2" src={email21} />
                <div className="email-6 manrope-normal-quick-silver-12px">{email}</div>
                <Link to="/mobile-edit-email" className="align-self-flex-end">
                  <div className="super-admin-20 manrope-normal-royal-blue-14px">{superAdmin3}</div>
                </Link>
              </div>
              <div className="dashboard-18 manrope-bold-eerie-black-20px">{dashboard2}</div>
              <div className="plunderdesigncomweb_alias-2 manrope-normal-quick-silver-18px">
                {plunderdesignComWeb_Alias}
              </div>
            </div>
          </div>
          <div className="title-6">
            <div className="my-account-2 montserrat-bold-black-24px">{myAccount}</div>
            <div className="ic-list-view">
              <div className="grid-1">
                <div className="grid-layout-18">
                  <img className="vector-57" src="/img/vector-110@1x.png" />
                  <img className="vector-58" src={vector2} />
                  <img className="vector-59" src={vector3} />
                </div>
              </div>
            </div>
            <div className="ic-gridview">
              <div className="thumbnail-1-1">
                <div className="layer-56">
                  <div className="vector-container-10">
                    <img className="vector-55" src={vector4} />
                    <img className="vector-56" src={vector5} />
                  </div>
                  <div className="vector-container-11">
                    <img className="vector-55" src={vector6} />
                    <img className="vector-56" src={vector7} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
          <div className="nav-7">
            <Group86 />
            <Link to="/mobile-hamburger-menu">
              <div className="hamburgermenu-2">
                <div className="x01-11"></div>
                <div className="hamburgermenu-item-2"></div>
                <div className="hamburgermenu-item-2"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMyAccount;
