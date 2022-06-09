import React from "react";
import { Link } from "react-router-dom";
import Group86 from "../Group86";
import X013 from "../X013";
import ButtonWithdrawAllEarning4 from "../ButtonWithdrawAllEarning4";
import Group683 from "../Group683";
import "./MobileDashboard.css";

function MobileDashboard(props) {
  const {
    welcome,
    activityLogs1,
    plunderdesignComXxxxxxx,
    vector2,
    iconStar1,
    x5Per1Spent,
    onPersonalReferr,
    path51,
    path52,
    path53,
    path54,
    bonusRewards,
    forEvery200InPurchases,
    path59,
    path60,
    path61,
    path62,
    path63,
    levelUp,
    achieveAffiliateEarn10Per1,
    learnMore,
    availablePoints,
    number1,
    overlapGroup2,
    available50OffCoupons,
    activityLogs2,
    overlapGroup1,
    exclusiveItemAccess,
    group96,
    number2,
    address1,
    address2,
    number3,
    rectangle311,
    path641,
    iconStar2,
    price1,
    price2,
    x25AwayFrom10BonusPoints1,
    activityLogs3,
    rectangle312,
    path642,
    iconLabel,
    price3,
    price4,
    x25AwayFrom10BonusPoints2,
    activityLogs4,
    activityLogs5,
    rectangle313,
    path643,
    iconHeart,
    price5,
    price6,
    x25AwayFrom10BonusPoints3,
    activityLogs6,
    rectangle314,
    rectangle32,
    iconGift1,
    rectangle34,
    path644,
    iconGift2,
    x20BonusPoints,
    x30BonusPoints,
    x50BonusPoints,
    x75BonusPointsGifts,
    x9Months,
    x6Months,
    x12Months,
    x3Months,
    address3,
    overlapGroup5,
    justIn,
    ongoing1,
    overlapGroup3,
    explore,
    sleepangle1,
    overlapGroup6,
    posseBox,
    ongoing2,
    overlapGroup4,
    subscribe,
    sleepangle2,
    x013Props,
    group6831Props,
    group6832Props,
    buttonWithdrawAllEarning4Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-dashboard screen">
        <div className="flex-col-4">
          <div className="nav-5">
            <Group86 />
            <Link to="/mobile-hamburger-menu">
              <div className="hamburgermenu">
                <div className="x01-9"></div>
                <div className="hamburgermenu-item"></div>
                <div className="hamburgermenu-item"></div>
              </div>
            </Link>
          </div>
          <div className="flex-row-15">
            <div className="overlap-group-container-1">
              <div className="overlap-group8-1">
                <div className="welcome-3 opensans-normal-quick-silver-12px">{welcome}</div>
                <div className="activity-logs-12 avenir-heavy-normal-eerie-black-18px">{activityLogs1}</div>
              </div>
              <div className="overlap-group1-38">
                <div className="group-91-1 border-0-5px-dove-gray">
                  <div className="plunderdesigncomxxxxxxx-3 avenir-medium-black-10px">{plunderdesignComXxxxxxx}</div>
                </div>
                <X013 className={x013Props.className} />
              </div>
            </div>
            <Link to="/mobile-search-pop">
              <div className="searchbox-9">
                <div className="search-2-2">
                  <div className="vector-container-9">
                    <img className="vector-53" src="/img/vector@1x.png" />
                    <img className="vector-54" src={vector2} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="group-container-6">
          <div className="group-79-3">
            <div className="group-106">
              <img className="icon-star-4" src={iconStar1} />
              <div className="x5-per-1-spent-3 avenir-heavy-normal-eerie-black-9px">{x5Per1Spent}</div>
              <p className="on-personal-referr-3 avenir-book-normal-eerie-black-4px">{onPersonalReferr}</p>
            </div>
          </div>
          <div className="group-80-3">
            <div className="group-64-3">
              <div className="path-container-14">
                <img className="path-51-3" src={path51} />
                <img className="path-52-3" src={path52} />
                <img className="path-53-3" src={path53} />
                <img className="path-54-3" src={path54} />
              </div>
            </div>
            <div className="bonus-rewards-3 avenir-heavy-normal-eerie-black-9px">{bonusRewards}</div>
            <p className="for-every-200-in-purchases-3 avenir-book-normal-eerie-black-4px">{forEvery200InPurchases}</p>
          </div>
          <div className="group-70-3">
            <div className="group-81-3">
              <div className="group-69-3">
                <img className="path-59-3" src={path59} />
                <img className="path-60-3" src={path60} />
                <img className="path-61-3" src={path61} />
                <div className="path-container-15">
                  <img className="path-62-3" src={path62} />
                  <img className="path-63-3" src={path63} />
                </div>
              </div>
              <div className="level-up-3 avenir-heavy-normal-eerie-black-9px">{levelUp}</div>
              <p className="achieve-affiliate-earn-10-per-1-3 avenir-book-normal-eerie-black-4px">
                {achieveAffiliateEarn10Per1}
              </p>
              <div className="learn-more-7">{learnMore}</div>
            </div>
          </div>
        </div>
        <div className="rectangle-29-3"></div>
        <div className="flex-row-16">
          <div className="overlap-group7-3">
            <div className="card-rewards-3">
              <div className="earning-report-5">
                <div className="text-earning-this-month-12">
                  <div className="available-points-3 avenir-book-normal-log-cabin-6px">{availablePoints}</div>
                  <div className="number-9">{number1}</div>
                  <ButtonWithdrawAllEarning4 />
                </div>
              </div>
            </div>
            <div className="overlap-group2-18" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="share-link-6">
                <div className="text-earning-this-month-13">
                  <div className="group-1-7">
                    <div className="available-50-off-coupons-3 avenir-book-normal-log-cabin-6px">
                      {available50OffCoupons}
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-108">
                <Group683 />
                <Group683 className={group6831Props.className} />
                <Group683 className={group6832Props.className} />
              </div>
            </div>
            <div className="activity-logs-13">{activityLogs2}</div>
          </div>
          <div className="card-share-link-1">
            <div className="group-109">
              <div className="overlap-group-64" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <div className="exclusive-item-access-3 avenir-book-normal-log-cabin-6px">{exclusiveItemAccess}</div>
                <div className="group-96-1" style={{ backgroundImage: `url(${group96})` }}>
                  <div className="number-10">{number2}</div>
                </div>
                <ButtonWithdrawAllEarning4 className={buttonWithdrawAllEarning4Props.className} />
              </div>
            </div>
          </div>
        </div>
        <div className="earning-report-6">
          <div className="text-earning-this-month-14">
            <div className="address-9">{address1}</div>
            <div className="overlap-group-65">
              <p className="address-10">{address2}</p>
              <div className="number-11 bodoni72-bold-black-43px">{number3}</div>
            </div>
          </div>
        </div>
        <div className="group-110">
          <div className="group-78-3">
            <div className="group-72-3">
              <div className="overlap-group1-39">
                <div className="overlap-group-63">
                  <img className="rectangle-31-9" src={rectangle311} />
                  <div className="rectangle-32-15 border-2px-dove-gray"></div>
                  <img className="path-64-6" src={path641} />
                  <img className="icon-star-5" src={iconStar2} />
                </div>
                <div className="price-8 avenir-heavy-normal-white-11px">{price1}</div>
                <div className="price-9 avenir-heavy-normal-sonic-silver-7px">{price2}</div>
                <p className="x25-away-from-10-bonus-points-5 avenir-book-normal-sonic-silver-4px">
                  {x25AwayFrom10BonusPoints1}
                </p>
              </div>
              <div className="activity-logs-11 avenir-heavy-normal-eerie-black-10px">{activityLogs3}</div>
            </div>
            <div className="group-73-3">
              <div className="overlap-group2-19">
                <div className="overlap-group-63">
                  <img className="rectangle-31-10" src={rectangle312} />
                  <div className="rectangle-32-16 border-2px-dove-gray"></div>
                  <img className="path-64-6" src={path642} />
                  <img className="icon-12" src={iconLabel} />
                </div>
                <div className="price-8 avenir-heavy-normal-white-11px">{price3}</div>
                <div className="price-9 avenir-heavy-normal-sonic-silver-7px">{price4}</div>
                <p className="x25-away-from-10-bonus-points-6 avenir-book-normal-sonic-silver-4px">
                  {x25AwayFrom10BonusPoints2}
                </p>
              </div>
              <div className="activity-logs-11 avenir-heavy-normal-eerie-black-10px">{activityLogs4}</div>
            </div>
            <div className="group-75-3">
              <div className="overlap-group3-11">
                <p className="activity-logs-11 avenir-heavy-normal-eerie-black-10px">{activityLogs5}</p>
                <div className="overlap-group1-40">
                  <div className="overlap-group-66">
                    <img className="rectangle-31-11" src={rectangle313} />
                    <div className="rectangle-32-17 border-2px-dove-gray"></div>
                    <img className="path-64-6" src={path643} />
                    <img className="icon-12" src={iconHeart} />
                  </div>
                  <div className="price-10 avenir-heavy-normal-white-11px">{price5}</div>
                  <div className="price-9 avenir-heavy-normal-sonic-silver-7px">{price6}</div>
                  <p className="x25-away-from-10-bonus-points-5 avenir-book-normal-sonic-silver-4px">
                    {x25AwayFrom10BonusPoints3}
                  </p>
                </div>
              </div>
            </div>
            <div className="group-76-3">
              <div className="overlap-group4-10">
                <div className="activity-logs-11 avenir-heavy-normal-eerie-black-10px">{activityLogs6}</div>
                <div className="group-74-3">
                  <div className="overlap-group3-12 avenir-heavy-normal-sonic-silver-5px">
                    <div className="overlap-group2-20">
                      <div className="overlap-group-67">
                        <img className="rectangle-31-12" src={rectangle314} />
                        <img className="rectangle-32-18" src={rectangle32} />
                        <div className="rectangle-33-6 border-2px-dove-gray"></div>
                        <img className="icon-gift-4" src={iconGift1} />
                        <img className="rectangle-34-3" src={rectangle34} />
                        <div className="rectangle-35-3 border-1px-dove-gray"></div>
                      </div>
                      <div className="group-77-3">
                        <div className="overlap-group1-41">
                          <div className="rectangle-31-13 border-2px-dove-gray"></div>
                          <div className="rectangle-32-19 border-2px-dove-gray"></div>
                          <div className="rectangle-33-7 border-2px-dove-gray"></div>
                          <img className="path-64-7" src={path644} />
                          <img className="icon-gift-5" src={iconGift2} />
                          <div className="x20bonus-points-3 avenir-heavy-normal-white-4px">{x20BonusPoints}</div>
                          <div className="x30bonus-points-3 avenir-heavy-normal-white-4px">{x30BonusPoints}</div>
                          <div className="x50bonus-points-3 avenir-heavy-normal-pale-sky-4px">{x50BonusPoints}</div>
                        </div>
                        <div className="x75bonus-points-gifts-3 avenir-heavy-normal-pale-sky-4px">
                          {x75BonusPointsGifts}
                        </div>
                      </div>
                      <div className="x9months-3 avenir-heavy-normal-sonic-silver-5px">{x9Months}</div>
                      <div className="x6months-3 avenir-heavy-normal-sonic-silver-5px">{x6Months}</div>
                    </div>
                    <div className="x12months-3">{x12Months}</div>
                    <div className="x3months-3">{x3Months}</div>
                  </div>
                  <p className="address-11 avenir-book-normal-sonic-silver-4px">{address3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="marketing-ad-2">
          <div className="overlap-group5-3" style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <div className="group-container-7">
              <div className="overlap-group1-42">
                <div className="just-in-5 bodoni72-bold-eerie-black-32px">{justIn}</div>
                <div className="ongoing-10 avenir-book-normal-black-12px">{ongoing1}</div>
              </div>
              <a href="https://nulifespan.com/store-2/" target="_blank">
                <div className="group-25-10">
                  <div className="overlap-group-68" style={{ backgroundImage: `url(${overlapGroup3})` }}>
                    <div className="explore-5 avenir-book-normal-white-15px">{explore}</div>
                  </div>
                </div>
              </a>
            </div>
            <img className="sleepangle-10" src={sleepangle1} />
          </div>
        </div>
        <div className="marketing-ad-2-1">
          <div className="overlap-group6-4" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <div className="group-container-8">
              <div className="overlap-group1-43">
                <div className="posse-box-5 bodoni72-bold-eerie-black-32px">{posseBox}</div>
                <p className="ongoing-11 avenir-book-normal-black-12px">{ongoing2}</p>
              </div>
              <a href="https://nulifespan.com/store-2/" target="_blank">
                <div className="group-111">
                  <div className="overlap-group-69" style={{ backgroundImage: `url(${overlapGroup4})` }}>
                    <div className="subscribe-5 avenir-book-normal-white-15px">{subscribe}</div>
                  </div>
                </div>
              </a>
            </div>
            <img className="sleepangle-11" src={sleepangle2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileDashboard;
