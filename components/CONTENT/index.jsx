import React from "react";
import ButtonWithdrawAllEarning2 from "../ButtonWithdrawAllEarning2";
import Group68 from "../Group68";
import Group103 from "../Group103";
import Group98 from "../Group98";
import DueDate from "../DueDate";
import Date from "../Date";
import "./CONTENT.css";

function CONTENT(props) {
  const {
    group681Props,
    group682Props,
    buttonWithdrawAllEarning2Props,
    group1031Props,
    group1032Props,
    group98Props,
    dateProps,
  } = props;

  return (
    <div className="content">
      <div className="flex-col-1">
        <div className="flex-row-4">
          <div className="welcome avenir-book-normal-quick-silver-18px">
            Hello ${"{"}first_name{"}"}, welcome back!
          </div>
          <div className="overlap-group5">
            <div className="group-89 border-0-5px-dove-gray">
              <div className="plunderdesigncomxxxxxxx avenir-medium-black-19px">plunderdesign.com/xxxxxxx</div>
            </div>
            <div className="x01-2">
              <div className="dashboard-2 avenir-medium-cod-gray-18px">COPY LINK</div>
            </div>
          </div>
        </div>
        <div className="overlap-group7">
          <img className="rectangle-29" src="/img/rectangle-29@1x.png" />
          <div className="activity-logs-1 avenir-heavy-normal-eerie-black-20px">points &amp; rewards balance</div>
        </div>
        <div className="flex-row-5">
          <div className="card-rewards">
            <div className="earning-report">
              <div className="text-earning-this-month">
                <div className="available-points avenir-book-normal-log-cabin-20px">available points</div>
                <div className="overlap-group-16">
                  <div className="number bodoni72-bold-black-72px">68</div>
                  <ButtonWithdrawAllEarning2 />
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group1-4">
            <div className="share-link">
              <div className="text-earning-this-month-1">
                <div className="group-1-1">
                  <div className="available-50-off-coupons avenir-book-normal-log-cabin-20px">
                    available 50% off coupons
                  </div>
                </div>
              </div>
            </div>
            <div className="group-container">
              <Group68 />
              <Group68 className={group681Props.className} />
              <Group68 className={group682Props.className} />
            </div>
          </div>
          <div className="overlap-group2-2">
            <div className="share-link-1">
              <div className="text-earning-this-month-2">
                <div className="group-1-2">
                  <div className="exclusive-item-access avenir-book-normal-log-cabin-20px">exclusive item access</div>
                  <div className="overlap-group-17">
                    <div className="number-1 avenir-heavy-normal-white-32px">4</div>
                  </div>
                </div>
              </div>
            </div>
            <ButtonWithdrawAllEarning2 className={buttonWithdrawAllEarning2Props.className} />
          </div>
        </div>
        <div className="overlap-group6">
          <div className="activity-logs-2 avenir-heavy-normal-eerie-black-20px">
            bonus points &amp; rewards progress
          </div>
        </div>
      </div>
      <div className="rightbar">
        <div className="earning-report-1">
          <div className="text-earning-this-month-3">
            <div className="address avenir-book-normal-black-20px">6 month order total</div>
            <div className="overlap-group-18">
              <h1 className="number-2 bodoni72-bold-black-60px">655</h1>
              <p className="address-1 montserrat-normal-quick-silver-15px">05 May 2022 at 11:00 PM</p>
            </div>
          </div>
        </div>
        <div className="schedule">
          <div className="title-1">
            <div className="schedule-1 avenir-black-eerie-black-24px">Recent Activity</div>
            <div className="thursday-january-10th-2022 montserrat-medium-quick-silver-16px">
              Thursday, May 5th, 2022
            </div>
          </div>
        </div>
        <Group103 dateProps={group1031Props.dateProps} />
        <div className="rightbar-item">
          <Group98 />
          <div className="overlap-group2-3">
            <DueDate />
            <div className="group-97">
              <div className="overlap-group-19">
                <div className="meeting-with-client avenir-black-eerie-black-16px">Pam Gould</div>
                <div className="date">
                  <div className="calendar"></div>
                  <div className="date-1 manrope-normal-quick-silver-10px">January 17, 2021</div>
                </div>
              </div>
              <div className="x1000-1100 manrope-extra-bold-geyser-10px">Customer Purchase $44</div>
            </div>
          </div>
        </div>
        <Group103 className={group1032Props.className} dateProps={group1032Props.dateProps} />
        <div className="rightbar-item">
          <Group98 className={group98Props.className} />
          <div className="overlap-group4-1">
            <DueDate />
            <div className="group-97-1">
              <div className="overlap-group-20">
                <div className="meeting-with-client avenir-black-eerie-black-16px">Pam Gould</div>
                <Date className={dateProps.className} />
              </div>
              <div className="x1000-1100-1 manrope-extra-bold-geyser-10px">Customer Purchase $44</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CONTENT;
