import "./App.css";
import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import DesktopSearchPopup from "./components/DesktopSearchPopup";
import DesktopUploadAvatar from "./components/DesktopUploadAvatar";
import DesktopEditEmail from "./components/DesktopEditEmail";
import DesktopEditCellNumber from "./components/DesktopEditCellNumber";
import DesktopCongratulations50Off from "./components/DesktopCongratulations50Off";
import DesktopTopRightMenu from "./components/DesktopTopRightMenu";
import DesktopDashboard from "./components/DesktopDashboard";
import DesktopMyConnectionsEcwidSocialConn from "./components/DesktopMyConnectionsEcwidSocialConn";
import DesktopMyAccount from "./components/DesktopMyAccount";
import DesktopMyReportsDISTRIBUTERSONLY from "./components/DesktopMyReportsDISTRIBUTERSONLY";
import TabletSearchPopUp from "./components/TabletSearchPopUp";
import TabletUploadAvatar from "./components/TabletUploadAvatar";
import TabletEditEmail from "./components/TabletEditEmail";
import TabletEditCellNumber from "./components/TabletEditCellNumber";
import TabletCongratulations50Off from "./components/TabletCongratulations50Off";
import TabletMenu from "./components/TabletMenu";
import TabletDashboard from "./components/TabletDashboard";
import TabletMyConnectionsEcwidSocialConne from "./components/TabletMyConnectionsEcwidSocialConne";
import TabletMyAccount from "./components/TabletMyAccount";
import TabletMyReportsDISTRIBUTERSONLY from "./components/TabletMyReportsDISTRIBUTERSONLY";
import MobileSearchPop from "./components/MobileSearchPop";
import MobileUploadAvatar from "./components/MobileUploadAvatar";
import MobileEditEmail from "./components/MobileEditEmail";
import MobileEditCellNumber from "./components/MobileEditCellNumber";
import MobileCongratulations50Off from "./components/MobileCongratulations50Off";
import MobileHamburgerMenu from "./components/MobileHamburgerMenu";
import MobileDashboard from "./components/MobileDashboard";
import MobileEcwidSocialConnectDashboard from "./components/MobileEcwidSocialConnectDashboard";
import MobileMyAccount from "./components/MobileMyAccount";
import MobileMyReportsDISTRIBUTERSONLY from "./components/MobileMyReportsDISTRIBUTERSONLY";
import DesktopDashboard1 from "./components/DesktopDashboard1";

import Params from "./components/TestParams/Params";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/desktop-dashboard" />
        </Route>
        <Route path="/desktop-dashboard/:email/">
          <DesktopDashboard {...desktopDashboardData} />
        </Route>
        <Route path="/:path(|desktop-search-popup)">
          <DesktopSearchPopup />
        </Route>
        <Route path="/desktop-upload-avatar">
          <DesktopUploadAvatar {...desktopUploadAvatarData} />
        </Route>
        <Route path="/desktop-edit-email">
          <DesktopEditEmail
            desktopEditEmail="/img/dashboard-dim-screen-profile-1@1x.png"
            inputBox="EMAIL"
            inputHere="xxxx@xxxxx.xxx"
            saveChanges="Save Changes"
            superAdmin="Cancel"
          />
        </Route>
        <Route path="/desktop-edit-cell-number">
          <DesktopEditCellNumber
            desktopEditCellNumber="/img/dashboard-dim-screen-profile-1@1x.png"
            inputBox="MOBILE PHONE"
            inputHere="xxx-xxx-xxxx"
            saveChanges="Save Changes"
            superAdmin="Cancel"
          />
        </Route>
        <Route path="/desktop-congratulations-50-off">
          <DesktopCongratulations50Off
            desktopCongratulations50Off="/img/dimblank-desktop@1x.png"
            congratulations="Congratulations!"
            overlapGroup="/img/bg@1x.png"
            shopNow="SHOP NOW"
            buttonCloseCopy2Props={
              desktopCongratulations50OffData.buttonCloseCopy2Props
            }
          />
        </Route>
        <Route path="/desktop-top-right-menu">
          <DesktopTopRightMenu
            desktopTopRightMenu="/img/dimblank-desktop@1x.png"
            background="/img/background-1x-png@1x.png"
            addFriend2="/img/add-friend-2-1@1x.png"
            loremIpsum="My Account"
            path43="/img/path-43-1@1x.png"
            dolorSitAmet="Shop"
          />
        </Route>
        <Route path="/desktop-dashboard">
          <DesktopDashboard {...desktopDashboardData} />
        </Route>
        <Route path="/desktop-my-connections-ecwid-social-connect-dashboard">
          <DesktopMyConnectionsEcwidSocialConn
            {...desktopMyConnectionsEcwidSocialConnData}
          />
        </Route>
        <Route path="/desktop-my-account">
          <DesktopMyAccount {...desktopMyAccountData} />
        </Route>
        <Route path="/desktop-my-reports-distributers-only">
          <DesktopMyReportsDISTRIBUTERSONLY
            {...desktopMyReportsDISTRIBUTERSONLYData}
          />
        </Route>
        <Route path="/tablet-search-pop-up">
          <TabletSearchPopUp />
        </Route>
        <Route path="/tablet-upload-avatar">
          <TabletUploadAvatar {...tabletUploadAvatarData} />
        </Route>
        <Route path="/tablet-edit-email">
          <TabletEditEmail
            tabletEditEmail="/img/tablet-dim-screen-profile-1@1x.png"
            inputBox="EMAIL"
            inputHere="xxxx@xxxxx.xxx"
            saveChanges="Save Changes"
            superAdmin="Cancel"
          />
        </Route>
        <Route path="/tablet-edit-cell-number">
          <TabletEditCellNumber
            tabletEditCellNumber="/img/tablet-dim-screen-profile-1@1x.png"
            inputBox="MOBILE PHONE"
            inputHere="xxx-xxx-xxxx"
            saveChanges="Save Changes"
            superAdmin="Cancel"
          />
        </Route>
        <Route path="/tablet-congratulations-50-off">
          <TabletCongratulations50Off
            tabletCongratulations50Off="/img/dimblnk-tablet-dashboard2-dim-screen-1@1x.png"
            congratulations="Congratulations!"
            buttonCloseCopy2Props={
              tabletCongratulations50OffData.buttonCloseCopy2Props
            }
          />
        </Route>
        <Route path="/tablet-menu">
          <TabletMenu {...tabletMenuData} />
        </Route>
        <Route path="/tablet-dashboard">
          <TabletDashboard {...tabletDashboardData} />
        </Route>
        <Route path="/tablet-my-connections-ecwid-social-connect-dashboard">
          <TabletMyConnectionsEcwidSocialConne
            {...tabletMyConnectionsEcwidSocialConneData}
          />
        </Route>
        <Route path="/tablet-my-account">
          <TabletMyAccount {...tabletMyAccountData} />
        </Route>
        <Route path="/tablet-my-reports-distributers-only">
          <TabletMyReportsDISTRIBUTERSONLY
            {...tabletMyReportsDISTRIBUTERSONLYData}
          />
        </Route>
        <Route path="/mobile-search-pop">
          <MobileSearchPop
            inputBox="SEARCH"
            inputHere="Enter search term"
            superAdmin="Cancel"
            buttonWithdrawAllEarningProps={
              mobileSearchPopData.buttonWithdrawAllEarningProps
            }
          />
        </Route>
        <Route path="/mobile-upload-avatar">
          <MobileUploadAvatar {...mobileUploadAvatarData} />
        </Route>
        <Route path="/mobile-edit-email">
          <MobileEditEmail
            saveChanges="Save Changes"
            superAdmin="Cancel"
            activeProps={mobileEditEmailData.activeProps}
          />
        </Route>
        <Route path="/mobile-edit-cell-number">
          <MobileEditCellNumber
            saveChanges="Save Changes"
            superAdmin="Cancel"
            activeProps={mobileEditCellNumberData.activeProps}
          />
        </Route>
        <Route path="/mobile-congratulations-50-off">
          <MobileCongratulations50Off
            congratulations="Congratulations!"
            the50OffItemWil={
              <React.Fragment>
                The 50% OFF item will be applied to the most expensive <br />
                item in your cart.
                <br />
                <br />
                Add at least one item to your cart to see the discount.
              </React.Fragment>
            }
            buttonCloseCopy2Props={
              mobileCongratulations50OffData.buttonCloseCopy2Props
            }
            buttonSaveProps={mobileCongratulations50OffData.buttonSaveProps}
          />
        </Route>
        <Route path="/mobile-hamburger-menu">
          <MobileHamburgerMenu {...mobileHamburgerMenuData} />
        </Route>
        <Route path="/mobile-dashboard">
          <MobileDashboard {...mobileDashboardData} />
        </Route>
        <Route path="/mobile-ecwid-social-connect-dashboard">
          <MobileEcwidSocialConnectDashboard
            overlapGroup="/img/background-16@1x.png"
            myConnections="my connections"
            searchbox="/img/searchbox@1x.png"
          />
        </Route>
        <Route path="/mobile-my-account">
          <MobileMyAccount {...mobileMyAccountData} />
        </Route>
        <Route path="/mobile-my-reports-distributers-only">
          <MobileMyReportsDISTRIBUTERSONLY
            myReports="my reports"
            paginationProps={
              mobileMyReportsDISTRIBUTERSONLYData.paginationProps
            }
          />
        </Route>
        <Route path="/desktop-dashboard-1">
          <DesktopDashboard1 {...desktopDashboard1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const buttonWithdrawAllEarning1Data = {
  children: "Upload",
};

const desktopUploadAvatarData = {
  desktopUploadAvatar: "/img/dashboard-dim-screen-profile-1@1x.png",
  overlapGroup3: "/img/path-42@1x.png",
  changeProfilePicture: "Change Profile Picture",
  inputBox: "UPLOAD AVATAR",
  inputHere1: "No File Chosen",
  inputHere2: "Updates to your Avatar make a few minutes before you see them.",
  inputHere3: "Choose File",
  buttonWithdrawAllEarningProps: buttonWithdrawAllEarning1Data,
};

const buttonCloseCopy22Data = {
  className: "button-close-copy-2-1",
};

const desktopCongratulations50OffData = {
  buttonCloseCopy2Props: buttonCloseCopy22Data,
};

const dashboard11Data = {
  dashboard1: "/img/vector-8@1x.png",
};

const x011Data = {
  dashboard1Props: dashboard11Data,
};

const group821Data = {
  iconUser: "/img/icon-1@1x.png",
};

const group851Data = {
  path69: "/img/path-69@1x.png",
  path70: "/img/path-70@1x.png",
  className: "",
};

const group8221Data = {
  group85Props: group851Data,
};

const group682Data = {
  className: "group-67",
};

const group683Data = {
  className: "group-66",
};

const buttonWithdrawAllEarning22Data = {
  className: "button-withdraw-all-earning-7",
};

const date1Data = {
  className: "",
};

const group1031Data = {
  dateProps: date1Data,
};

const date2Data = {
  className: "date-4",
};

const group1032Data = {
  className: "group-104",
  dateProps: date2Data,
};

const group982Data = {
  className: "group-98-1",
};

const date3Data = {
  className: "date-8",
};

const cONTENT1Data = {
  group681Props: group682Data,
  group682Props: group683Data,
  buttonWithdrawAllEarning2Props: buttonWithdrawAllEarning22Data,
  group1031Props: group1031Data,
  group1032Props: group1032Data,
  group98Props: group982Data,
  dateProps: date3Data,
};

const desktopDashboardData = {
  icon: "/img/icon@1x.png",
  proposal: "/img/layer-2@1x.png",
  projects: "My Connections",
  overlapGroup1: "/img/left-menu-ad1@1x.png",
  learnMore: "LEARN MORE",
  overlapGroup2: "/img/path-38-1@1x.png",
  yourImageHere1: "/img/your-image-here-1@1x.png",
  sleepangle1: "/img/sleepangle@1x.png",
  overlapGroup: "/img/bg-1@1x.png",
  explore: "EXPLORE",
  ongoing1: "See what’s new …",
  justIn: "Just In",
  overlapGroup3: "/img/path-38-1@1x.png",
  yourImageHere2: "/img/your-image-here-1@1x.png",
  sleepangle2: "/img/sleepangle-1@1x.png",
  overlapGroup4: "/img/bg-1@1x.png",
  subscribe: "SUBSCRIBE",
  posseBox: "Posse Box",
  ongoing2: "Straight to your door …",
  activityLogs: "customer rewards member",
  x01Props: x011Data,
  group82Props: group821Data,
  group822Props: group8221Data,
  cONTENTProps: cONTENT1Data,
};

const dashboard12Data = {
  dashboard1: "/img/vector-8@1x.png",
};

const group823Data = {
  iconUser: "/img/icon-1@1x.png",
};

const group852Data = {
  path69: "/img/path-69@1x.png",
  path70: "/img/path-70@1x.png",
  className: "",
};

const group8222Data = {
  group85Props: group852Data,
};

const desktopMyConnectionsEcwidSocialConnData = {
  desktopMyConnectionsEcwidSocialConn: "/img/background-4@1x.png",
  icon: "/img/icon@1x.png",
  dashboard: "Dashboard",
  proposal: "/img/layer-2@1x.png",
  projects: "My Connections",
  overlapGroup1: "/img/left-menu-ad1@1x.png",
  learnMore: "LEARN MORE",
  overlapGroup2: "/img/path-38-1@1x.png",
  yourImageHere1: "/img/your-image-here-1@1x.png",
  sleepangle1: "/img/sleepangle@1x.png",
  overlapGroup: "/img/bg-1@1x.png",
  explore: "EXPLORE",
  ongoing1: "See what’s new …",
  justIn: "Just In",
  overlapGroup3: "/img/path-38-1@1x.png",
  yourImageHere2: "/img/your-image-here-1@1x.png",
  sleepangle2: "/img/sleepangle-1@1x.png",
  overlapGroup4: "/img/bg-1@1x.png",
  subscribe: "SUBSCRIBE",
  posseBox: "Posse Box",
  ongoing2: "Straight to your door …",
  myConnections: "my connections",
  dashboard1Props: dashboard12Data,
  group82Props: group823Data,
  group822Props: group8222Data,
};

const dashboard13Data = {
  dashboard1: "/img/vector-8@1x.png",
};

const group824Data = {
  iconUser: "/img/icon-1@1x.png",
};

const group853Data = {
  path69: "/img/path-69@1x.png",
  path70: "/img/path-70@1x.png",
  className: "",
};

const group8223Data = {
  group85Props: group853Data,
};

const desktopMyAccountData = {
  superAdmin1: "Change Avatar",
  dashboard1: "Franklin Jr.",
  levelStatusCusto: (
    <React.Fragment>
      Level Status Customer Type
      <br />
      Sponsor Name: Enroller_First Enroller_Last
      <br />
      Sponsor ID: Sponsor_ID
    </React.Fragment>
  ),
  phone: "${phone}",
  email: "${email}",
  dashboard2: "Your Share Link:",
  plunderdesignComWeb_Alias: "plunderdesign.com/${web_alias}",
  iconCall: "/img/phone-call-1-1@1x.png",
  email21: "/img/email--2--1-1@1x.png",
  superAdmin2: "Edit",
  superAdmin3: "Edit",
  icon: "/img/icon@1x.png",
  dashboard3: "Dashboard",
  proposal: "/img/layer-2@1x.png",
  projects: "My Connections",
  overlapGroup1: "/img/left-menu-ad1@1x.png",
  learnMore: "LEARN MORE",
  overlapGroup2: "/img/path-38-1@1x.png",
  yourImageHere1: "/img/your-image-here-1@1x.png",
  sleepangle1: "/img/sleepangle@1x.png",
  overlapGroup: "/img/bg-1@1x.png",
  explore: "EXPLORE",
  ongoing1: "See what’s new …",
  justIn: "Just In",
  overlapGroup3: "/img/path-38-1@1x.png",
  yourImageHere2: "/img/your-image-here-1@1x.png",
  sleepangle2: "/img/sleepangle-1@1x.png",
  overlapGroup4: "/img/bg-1@1x.png",
  subscribe: "SUBSCRIBE",
  posseBox: "Posse Box",
  ongoing2: "Straight to your door …",
  myAccount: "my account",
  dashboard1Props: dashboard13Data,
  group82Props: group824Data,
  group822Props: group8223Data,
};

const dashboard14Data = {
  dashboard1: "/img/vector-8@1x.png",
};

const group825Data = {
  iconUser: "/img/icon-11@1x.png",
};

const group854Data = {
  path69: "/img/path-69@1x.png",
  path70: "/img/path-70@1x.png",
  className: "group-85-3",
};

const group8224Data = {
  group85Props: group854Data,
};

const desktopMyReportsDISTRIBUTERSONLYData = {
  icon: "/img/icon@1x.png",
  franklinJr: "Natalie B",
  superAdmin: "Stylist",
  arrow: "/img/arrow-1@1x.png",
  dashboard: "Dashboard",
  proposal: "/img/layer-2@1x.png",
  projects: "My Connections",
  overlapGroup1: "/img/left-menu-ad1@1x.png",
  learnMore: "LEARN MORE",
  overlapGroup2: "/img/path-38-1@1x.png",
  yourImageHere1: "/img/your-image-here-1@1x.png",
  sleepangle1: "/img/sleepangle@1x.png",
  overlapGroup: "/img/bg-1@1x.png",
  explore: "EXPLORE",
  ongoing1: "See what’s new …",
  justIn: "Just In",
  overlapGroup3: "/img/path-38-1@1x.png",
  yourImageHere2: "/img/your-image-here-1@1x.png",
  sleepangle2: "/img/sleepangle-1@1x.png",
  overlapGroup4: "/img/bg-1@1x.png",
  subscribe: "SUBSCRIBE",
  posseBox: "Posse Box",
  ongoing2: "Straight to your door …",
  myReports: "my reports",
  dashboard1Props: dashboard14Data,
  group82Props: group825Data,
  group822Props: group8224Data,
};

const buttonWithdrawAllEarning3Data = {
  children: "Upload",
  className: "button-withdraw-all-earning-1",
};

const group203Data = {
  className: "group-20-2",
};

const buttonCloseCopy23Data = {
  className: "button-close-copy-2-2",
};

const tabletUploadAvatarData = {
  tabletUploadAvatar: "/img/tablet-dim-screen-profile-1@1x.png",
  inputBox: "UPLOAD AVATAR",
  inputHere1: "No File Chosen",
  inputHere2: "Updates to your Avatar make a few minutes before you see them.",
  inputHere3: "Choose File",
  changeProfilePicture: "Change Profile Picture",
  buttonWithdrawAllEarningProps: buttonWithdrawAllEarning3Data,
  group20Props: group203Data,
  buttonCloseCopy2Props: buttonCloseCopy23Data,
};

const buttonCloseCopy24Data = {
  className: "button-close-copy-2-3",
};

const tabletCongratulations50OffData = {
  buttonCloseCopy2Props: buttonCloseCopy24Data,
};

const group402Data = {
  className: "group-39",
};

const tabletMenuData = {
  tabletMenu: "/img/background-5@1x.png",
  overlapGroup1: "/img/dimblnk-tablet-dashboard2-dim-screen-1@1x.png",
  background: "/img/background-1x-png@1x.png",
  addFriend2: "/img/add-friend-2-1@1x.png",
  loremIpsum: "My Account",
  path43: "/img/path-43-1@1x.png",
  dolorSitAmet: "Shop",
  group40Props: group402Data,
};

const search25Data = {
  className: "search-2-4",
};

const searchbox22Data = {
  search2Props: search25Data,
};

const dashboard15Data = {
  dashboard1: "/img/vector-61@1x.png",
  className: "dashboard-1-5",
};

const group855Data = {
  path69: "/img/path-69-4@1x.png",
  path70: "/img/path-70-4@1x.png",
  className: "group-94",
};

const group6823Data = {
  className: "group-67-2",
};

const group6824Data = {
  className: "group-66-2",
};

const buttonWithdrawAllEarning33Data = {
  className: "button-withdraw-all-earning-16",
};

const group1003Data = {
  className: "group-98-2",
};

const date23Data = {
  className: "date-12-1",
};

const x31Data = {
  group100Props: group1003Data,
  date2Props: date23Data,
};

const group1004Data = {
  className: "group-98-2",
};

const date24Data = {
  className: "date-12-2",
};

const x32Data = {
  group100Props: group1004Data,
  date2Props: date24Data,
};

const group10323Data = {
  className: "group-104-2",
};

const group1006Data = {
  className: "group-98-2",
};

const date26Data = {
  className: "date-12",
};

const x33Data = {
  className: "x3",
  group100Props: group1006Data,
  date2Props: date26Data,
};

const tabletDashboardData = {
  icon: "/img/icon@1x.png",
  profile: "/img/arrow-10@1x.png",
  path71: "/img/path-71-1@1x.png",
  menu: "MENU",
  proposal: "/img/layer-2-4@1x.png",
  users: "/img/vector-63@1x.png",
  welcome: "Hello ${first_name}, welcome back!",
  plunderdesignComXxxxxxx: "plunderdesign.com/xxxxxxx",
  iconStar1: "/img/path-50-1@1x.png",
  x5Per1Spent: "5% PER $1 SPENT",
  onPersonalReferr: "ON PERSONAL & REFERRED FRIEND’S ORDER’S",
  path51: "/img/path-51-1@1x.png",
  path52: "/img/path-52-1@1x.png",
  path53: "/img/path-53-1@1x.png",
  path54: "/img/path-54-1@1x.png",
  bonusRewards: "BONUS REWARDS",
  forEvery200InPurchases: "FOR EVERY $200 IN PURCHASES",
  path59: "/img/path-59-1@1x.png",
  path60: "/img/path-60-1@1x.png",
  path61: "/img/path-61-1@1x.png",
  path62: "/img/path-62-1@1x.png",
  path63: "/img/path-63-1@1x.png",
  levelUp: "LEVEL UP",
  achieveAffiliateEarn10Per1: "ACHIEVE AFFILIATE & EARN 10% PER $1",
  learnMore: "LEARN MORE",
  rectangle29: "/img/rectangle-29-1@1x.png",
  activityLogs1: "points & rewards balance",
  availablePoints: "available points",
  number1: "68",
  overlapGroup1: "/img/path-1-2@1x.png",
  available50OffCoupons: "available 50% off coupons",
  overlapGroup2: "/img/path-1-2@1x.png",
  exclusiveItemAccess: "exclusive item access",
  group96: "/img/path-58-1@1x.png",
  number2: "4",
  overlapGroup13: "/img/rectangle-29-1@1x.png",
  activityLogs2: "bonus points & rewards progress",
  overlapGroup10: "/img/path-38-8@1x.png",
  yourImageHere1: "/img/your-image-here-8@1x.png",
  sleepangle1: "/img/sleepangle-8@1x.png",
  overlapGroup: "/img/bg-11@1x.png",
  explore: "EXPLORE",
  ongoing1: "See what’s new …",
  justIn: "Just In",
  overlapGroup11: "/img/path-38-8@1x.png",
  yourImageHere2: "/img/your-image-here-8@1x.png",
  sleepangle2: "/img/sleepangle-9@1x.png",
  overlapGroup3: "/img/bg-11@1x.png",
  subscribe: "SUBSCRIBE",
  posseBox: "Posse Box",
  ongoing2: "Straight to your door …",
  rightbar: "/img/background-7@1x.png",
  address1: "6 month order total",
  number3: "655",
  address2: "05 Jun 2021 at 11:00 PM",
  schedule: "Recent Activity",
  thursdayJanuary10Th2022: "Thursday, May 5th, 2022",
  meetingWithClient: "Natalie B",
  x10001100: "Personal Purchase $20",
  activityLogs3: "customer rewards member",
  rectangle311: "/img/rectangle-31-4@1x.png",
  path641: "/img/path-64-4@1x.png",
  iconStar2: "/img/path-65-1@1x.png",
  price1: "$175",
  price2: "$200",
  x25AwayFrom10BonusPoints1: "$25 away from 10 bonus points",
  activityLogs4: "10 bonus points",
  rectangle312: "/img/rectangle-31-4@1x.png",
  path642: "/img/path-64-5@1x.png",
  iconLabel: "/img/path-66-1@1x.png",
  price3: "$175",
  price4: "$200",
  x25AwayFrom10BonusPoints2: "$25 away from 10 bonus points",
  activityLogs5: "50% off an item",
  activityLogs6: "shop for an exclusive item",
  rectangle313: "/img/rectangle-31-4@1x.png",
  path643: "/img/path-64-6@1x.png",
  iconHeart: "/img/path-67-1@1x.png",
  price5: "$175",
  price6: "$200",
  x25AwayFrom10BonusPoints3: "$25 away from 10 bonus points",
  activityLogs7: "posse box",
  rectangle314: "/img/rectangle-31-7@1x.png",
  rectangle32: "/img/rectangle-32-1@1x.png",
  iconGift1: "/img/path-68-2@1x.png",
  rectangle34: "/img/rectangle-34-1@1x.png",
  x12Months: (
    <React.Fragment>
      12
      <br />
      MONTHS
    </React.Fragment>
  ),
  path644: "/img/path-64-7@1x.png",
  iconGift2: "/img/path-68-3@1x.png",
  x20BonusPoints: (
    <React.Fragment>
      20
      <br />
      bonus points
    </React.Fragment>
  ),
  x30BonusPoints: (
    <React.Fragment>
      30
      <br />
      bonus points
    </React.Fragment>
  ),
  x50BonusPoints: (
    <React.Fragment>
      50
      <br />
      bonus points
    </React.Fragment>
  ),
  x75BonusPointsGifts: (
    <React.Fragment>
      75
      <br />
      bonus points
      <br />+ gifts
    </React.Fragment>
  ),
  x9Months: (
    <React.Fragment>
      9<br />
      MONTHS
    </React.Fragment>
  ),
  x6Months: (
    <React.Fragment>
      6<br />
      MONTHS
    </React.Fragment>
  ),
  x3Months: (
    <React.Fragment>
      3<br />
      MONTHS
    </React.Fragment>
  ),
  address3: "8 consecutive months on posse",
  searchbox2Props: searchbox22Data,
  dashboard1Props: dashboard15Data,
  group85Props: group855Data,
  group6821Props: group6823Data,
  group6822Props: group6824Data,
  buttonWithdrawAllEarning3Props: buttonWithdrawAllEarning33Data,
  x31Props: x31Data,
  x32Props: x32Data,
  group1032Props: group10323Data,
  x33Props: x33Data,
};

const search26Data = {
  className: "search-2-5",
};

const searchbox23Data = {
  search2Props: search26Data,
};

const dashboard16Data = {
  dashboard1: "/img/vector-61@1x.png",
  className: "dashboard-1-6",
};

const group856Data = {
  path69: "/img/path-69-4@1x.png",
  path70: "/img/path-70-4@1x.png",
  className: "group-94-1",
};

const tabletMyConnectionsEcwidSocialConneData = {
  background: "/img/background-11@1x.png",
  icon: "/img/icon@1x.png",
  profile: "/img/arrow-10@1x.png",
  myConnections: "my connections",
  path71: "/img/path-71-1@1x.png",
  menu: "MENU",
  proposal: "/img/layer-2-4@1x.png",
  users: "/img/vector-63@1x.png",
  searchbox2Props: searchbox23Data,
  dashboard1Props: dashboard16Data,
  group85Props: group856Data,
};

const search27Data = {
  className: "search-2-6",
};

const searchbox24Data = {
  search2Props: search27Data,
};

const dashboard17Data = {
  dashboard1: "/img/vector-61@1x.png",
  className: "dashboard-1-7",
};

const group857Data = {
  path69: "/img/path-69-4@1x.png",
  path70: "/img/path-70-4@1x.png",
  className: "group-94-2",
};

const tabletMyAccountData = {
  superAdmin1: "Change Avatar",
  levelStatusCusto: (
    <React.Fragment>
      Level Status Customer Type
      <br />
      Sponsor Name: Enroller_First Enroller_Last
      <br />
      Sponsor ID: Sponsor_ID
    </React.Fragment>
  ),
  dashboard1: "Franklin Jr.",
  iconCall: "/img/phone-call-1-1@1x.png",
  phone: "Phone:",
  superAdmin2: "Edit",
  email21: "/img/email--2--1-1@1x.png",
  email: "Email:",
  superAdmin3: "Edit",
  dashboard2: "Your Share Link:",
  plunderdesignComWeb_Alias: "plunderdesign.com/${web_alias}",
  icon: "/img/icon@1x.png",
  profile: "/img/arrow-10@1x.png",
  myAccount: "my account",
  path71: "/img/path-71-1@1x.png",
  menu: "MENU",
  proposal: "/img/layer-2-4@1x.png",
  users: "/img/vector-63@1x.png",
  searchbox2Props: searchbox24Data,
  dashboard1Props: dashboard17Data,
  group85Props: group857Data,
};

const search28Data = {
  className: "search-2-7",
};

const searchbox25Data = {
  search2Props: search28Data,
};

const dashboard18Data = {
  dashboard1: "/img/vector-61@1x.png",
  className: "dashboard-1-8",
};

const group858Data = {
  path69: "/img/path-69-4@1x.png",
  path70: "/img/path-70-4@1x.png",
  className: "group-94-3",
};

const tabletMyReportsDISTRIBUTERSONLYData = {
  icon: "/img/icon@1x.png",
  profile: "/img/arrow-10@1x.png",
  path71: "/img/path-71-1@1x.png",
  menu: "MENU",
  proposal: "/img/layer-2-4@1x.png",
  users: "/img/vector-63@1x.png",
  myReports: "my reports",
  searchbox2Props: searchbox25Data,
  dashboard1Props: dashboard18Data,
  group85Props: group858Data,
};

const buttonWithdrawAllEarning4Data = {
  children: "Search",
  className: "button-withdraw-all-earning-2",
};

const mobileSearchPopData = {
  buttonWithdrawAllEarningProps: buttonWithdrawAllEarning4Data,
};

const buttonWithdrawAllEarning5Data = {
  children: "Upload",
  className: "group-33",
};

const buttonCloseCopy25Data = {
  className: "button-close-copy-2-4",
};

const mobileUploadAvatarData = {
  addFriend2: "/img/add-friend-2-6@1x.png",
  inputBox: "UPLOAD AVATAR",
  inputHere1: "No File Chosen",
  inputHere2: "Updates to your Avatar make a few minutes before you see them.",
  inputHere3: "Choose File",
  changeProfilePicture: "Change Profile Picture",
  buttonWithdrawAllEarningProps: buttonWithdrawAllEarning5Data,
  buttonCloseCopy2Props: buttonCloseCopy25Data,
};

const active1Data = {
  inputBox: "EMAIL",
  inputHere: "xxxx@xxxxx.com",
};

const mobileEditEmailData = {
  activeProps: active1Data,
};

const active2Data = {
  inputBox: "MOBILE PHONE",
  inputHere: "xxx-xxx-xxxx",
  className: "active-9",
};

const mobileEditCellNumberData = {
  activeProps: active2Data,
};

const buttonCloseCopy26Data = {
  className: "button-close-copy-2-5",
};

const buttonSave2Data = {
  className: "button-save-1",
};

const mobileCongratulations50OffData = {
  buttonCloseCopy2Props: buttonCloseCopy26Data,
  buttonSaveProps: buttonSave2Data,
};

const buttonCloseCopy27Data = {
  className: "button-close",
};

const dashboard19Data = {
  dashboard1: "/img/vector-62@1x.png",
  className: "dashboard-1-9",
};

const group859Data = {
  path69: "/img/path-69-4@1x.png",
  path70: "/img/path-70-4@1x.png",
  className: "group-85-4",
};

const mobileHamburgerMenuData = {
  menu: "/img/background@1x.png",
  dashboard: "Dashboard",
  proposal: "/img/layer-2-4@1x.png",
  projects1: "My Connections",
  icon: "/img/icon@1x.png",
  projects2: "My Account",
  projects3: "My Reports",
  path43: "/img/path-43-1@1x.png",
  settings1: "Shop",
  setting1: "/img/united-states-1@1x.png",
  settings2: "Language",
  path41: "/img/path-40-1@1x.png",
  settings3: "Log Out",
  buttonCloseCopy2Props: buttonCloseCopy27Data,
  dashboard1Props: dashboard19Data,
  group85Props: group859Data,
};

const x0132Data = {
  className: "x01-8",
};

const group6833Data = {
  className: "group-6",
};

const group6834Data = {
  className: "group-6",
};

const buttonWithdrawAllEarning43Data = {
  className: "button-withdraw-all-earning-21",
};

const mobileDashboardData = {
  welcome: "Hello ${first_name}, welcome back!",
  activityLogs1: "customer rewards member",
  plunderdesignComXxxxxxx: "plunderdesign.com/xxxxxxx",
  vector2: "/img/vector-1@1x.png",
  iconStar1: "/img/path-50@1x.png",
  x5Per1Spent: "5% PER $1 SPENT",
  onPersonalReferr: "ON PERSONAL & REFERRED FRIEND’S ORDER’S",
  path51: "/img/path-51@1x.png",
  path52: "/img/path-52@1x.png",
  path53: "/img/path-53@1x.png",
  path54: "/img/path-54@1x.png",
  bonusRewards: "BONUS REWARDS",
  forEvery200InPurchases: "FOR EVERY $200 IN PURCHASES",
  path59: "/img/path-59@1x.png",
  path60: "/img/path-60@1x.png",
  path61: "/img/path-61@1x.png",
  path62: "/img/path-62@1x.png",
  path63: "/img/path-63@1x.png",
  levelUp: "LEVEL UP",
  achieveAffiliateEarn10Per1: "ACHIEVE AFFILIATE & EARN 10% PER $1",
  learnMore: "LEARN MORE",
  availablePoints: "available points",
  number1: "68",
  overlapGroup2: "/img/path-1-1@1x.png",
  available50OffCoupons: "available 50% off coupons",
  activityLogs2: "points & rewards balance",
  overlapGroup1: "/img/path-1-1@1x.png",
  exclusiveItemAccess: "exclusive item access",
  group96: "/img/path-58@1x.png",
  number2: "4",
  address1: "6 month order total",
  address2: "05 Jun 2021 at 11:00 PM",
  number3: "655",
  rectangle311: "/img/rectangle-31-2@1x.png",
  path641: "/img/path-64@1x.png",
  iconStar2: "/img/path-65@1x.png",
  price1: "$175",
  price2: "$200",
  x25AwayFrom10BonusPoints1: "$25 away from 10 bonus points",
  activityLogs3: "10 bonus points",
  rectangle312: "/img/rectangle-31-1@1x.png",
  path642: "/img/path-64-1@1x.png",
  iconLabel: "/img/path-66@1x.png",
  price3: "$175",
  price4: "$200",
  x25AwayFrom10BonusPoints2: "$25 away from 10 bonus points",
  activityLogs4: "50% off an item",
  activityLogs5: "shop for an exclusive item",
  rectangle313: "/img/rectangle-31-2@1x.png",
  path643: "/img/path-64-2@1x.png",
  iconHeart: "/img/path-67@1x.png",
  price5: "$175",
  price6: "$200",
  x25AwayFrom10BonusPoints3: "$25 away from 10 bonus points",
  activityLogs6: "posse box",
  rectangle314: "/img/rectangle-31-3@1x.png",
  rectangle32: "/img/rectangle-32@1x.png",
  iconGift1: "/img/path-68@1x.png",
  rectangle34: "/img/rectangle-34@1x.png",
  path644: "/img/path-64-3@1x.png",
  iconGift2: "/img/path-68-1@1x.png",
  x20BonusPoints: (
    <React.Fragment>
      20
      <br />
      bonus points
    </React.Fragment>
  ),
  x30BonusPoints: (
    <React.Fragment>
      30
      <br />
      bonus points
    </React.Fragment>
  ),
  x50BonusPoints: (
    <React.Fragment>
      50
      <br />
      bonus points
    </React.Fragment>
  ),
  x75BonusPointsGifts: (
    <React.Fragment>
      75
      <br />
      bonus points
      <br />+ gifts
    </React.Fragment>
  ),
  x9Months: (
    <React.Fragment>
      9<br />
      MONTHS
    </React.Fragment>
  ),
  x6Months: (
    <React.Fragment>
      6<br />
      MONTHS
    </React.Fragment>
  ),
  x12Months: (
    <React.Fragment>
      12
      <br />
      MONTHS
    </React.Fragment>
  ),
  x3Months: (
    <React.Fragment>
      3<br />
      MONTHS
    </React.Fragment>
  ),
  address3: "8 consecutive months on posse",
  overlapGroup5: "/img/path-38@1x.png",
  justIn: "Just In",
  ongoing1: "See what’s new …",
  overlapGroup3: "/img/bg-1@1x.png",
  explore: "EXPLORE",
  sleepangle1: "/img/sleepangle@1x.png",
  overlapGroup6: "/img/path-38-1@1x.png",
  posseBox: "Posse Box",
  ongoing2: "Straight to your door …",
  overlapGroup4: "/img/bg-1@1x.png",
  subscribe: "SUBSCRIBE",
  sleepangle2: "/img/sleepangle-1@1x.png",
  x013Props: x0132Data,
  group6831Props: group6833Data,
  group6832Props: group6834Data,
  buttonWithdrawAllEarning4Props: buttonWithdrawAllEarning43Data,
};

const mobileMyAccountData = {
  addFriend2: "/img/add-friend-2-7@1x.png",
  superAdmin1: "Change Avatar",
  dashboard1: "Franklin Jr.",
  levelStatusCusto: (
    <React.Fragment>
      Level Status Customer Type
      <br />
      Sponsor Name: Enroller_First Enroller_Last
      <br />
      Sponsor ID: Sponsor_ID
    </React.Fragment>
  ),
  iconCall: "/img/phone-call-1-2@1x.png",
  phone: "Phone:",
  superAdmin2: "Edit",
  email21: "/img/email--2--1-2@1x.png",
  email: "Email:",
  superAdmin3: "Edit",
  dashboard2: "Your Share Link:",
  plunderdesignComWeb_Alias: "plunderdesign.com/${web_alias}",
  myAccount: "my account",
  vector2: "/img/vector-108@1x.png",
  vector3: "/img/vector-109@1x.png",
  vector4: "/img/vector-111@1x.png",
  vector5: "/img/vector-111@1x.png",
  vector6: "/img/vector-111@1x.png",
  vector7: "/img/vector-111@1x.png",
};

const pagination2Data = {
  className: "pagination-1",
};

const mobileMyReportsDISTRIBUTERSONLYData = {
  paginationProps: pagination2Data,
};

const dashboard110Data = {
  dashboard1: "/img/vector-8@1x.png",
};

const x012Data = {
  dashboard1Props: dashboard110Data,
};

const group826Data = {
  iconUser: "/img/icon-1@1x.png",
};

const group8510Data = {
  path69: "/img/path-69@1x.png",
  path70: "/img/path-70@1x.png",
  className: "",
};

const group8225Data = {
  group85Props: group8510Data,
};

const group685Data = {
  className: "group-67-1",
};

const group686Data = {
  className: "group-66-1",
};

const buttonWithdrawAllEarning24Data = {
  className: "button-withdraw-all-earning-9",
};

const date4Data = {
  className: "",
};

const group1033Data = {
  dateProps: date4Data,
};

const date5Data = {
  className: "date-6",
};

const group1034Data = {
  className: "group-104-1",
  dateProps: date5Data,
};

const group984Data = {
  className: "group-98-3",
};

const date6Data = {
  className: "date-10",
};

const cONTENT2Data = {
  group681Props: group685Data,
  group682Props: group686Data,
  buttonWithdrawAllEarning2Props: buttonWithdrawAllEarning24Data,
  group1031Props: group1033Data,
  group1032Props: group1034Data,
  group98Props: group984Data,
  dateProps: date6Data,
};

const desktopDashboard1Data = {
  icon: "/img/icon@1x.png",
  proposal: "/img/layer-2@1x.png",
  projects: "My Connections",
  overlapGroup1: "/img/left-menu-ad1@1x.png",
  learnMore: "LEARN MORE",
  overlapGroup2: "/img/path-38-1@1x.png",
  yourImageHere1: "/img/your-image-here-1@1x.png",
  sleepangle1: "/img/sleepangle@1x.png",
  overlapGroup: "/img/bg-1@1x.png",
  explore: "EXPLORE",
  ongoing1: "See what’s new …",
  justIn: "Just In",
  overlapGroup3: "/img/path-38-1@1x.png",
  yourImageHere2: "/img/your-image-here-1@1x.png",
  sleepangle2: "/img/sleepangle-1@1x.png",
  overlapGroup4: "/img/bg-1@1x.png",
  subscribe: "SUBSCRIBE",
  posseBox: "Posse Box",
  ongoing2: "Straight to your door …",
  activityLogs: "customer rewards member",
  x01Props: x012Data,
  group82Props: group826Data,
  group822Props: group8225Data,
  cONTENTProps: cONTENT2Data,
};
