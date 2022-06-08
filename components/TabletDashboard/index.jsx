import React from "react";
import { Link } from "react-router-dom";
import Searchbox2 from "../Searchbox2";
import Dashboard1 from "../Dashboard1";
import Group85 from "../Group85";
import X013 from "../X013";
import ButtonWithdrawAllEarning3 from "../ButtonWithdrawAllEarning3";
import Group682 from "../Group682";
import Group100 from "../Group100";
import DueDate2 from "../DueDate2";
import Group1032 from "../Group1032";
import X3 from "../X3";
import styled from "styled-components";
import {
  AvenirHeavyNormalEerieBlack12px,
  AvenirHeavyNormalEerieBlack10px,
  AvenirBookNormalSonicSilver11px,
  Bodoni72BoldBlack43px,
  AvenirBookNormalBlack12px,
  AvenirHeavyNormalSonicSilver12px,
  AvenirBlackEerieBlack24px,
  ManropeExtraBoldBizarre10px,
  Border1pxDoveGray,
  AvenirHeavyNormalSonicSilver11px,
  AvenirHeavyNormalWhite11px,
  OpensansNormalQuickSilver12px,
  AvenirBookNormalLogCabin10px,
  Border2pxDoveGray,
  Border05pxDoveGray,
  AvenirHeavyNormalEerieBlack18px,
  AvenirHeavyNormalEerieBlack20px,
  AvenirHeavyNormalPaleSky11px,
  AvenirMediumBlack10px,
  OpensansBoldCloud16px,
  MontserratMediumQuickSilver16px,
  AvenirBlackEerieBlack16px,
  AvenirBookNormalEerieBlack6px,
  AvenirHeavyNormalWhite19px,
  Bodoni72BoldEerieBlack22px,
} from "../../styledMixins";
import "./TabletDashboard.css";

function TabletDashboard(props) {
  const {
    icon,
    profile,
    path71,
    menu,
    proposal,
    users,
    welcome,
    plunderdesignComXxxxxxx,
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
    rectangle29,
    activityLogs1,
    availablePoints,
    number1,
    overlapGroup1,
    available50OffCoupons,
    overlapGroup2,
    exclusiveItemAccess,
    group96,
    number2,
    overlapGroup13,
    activityLogs2,
    overlapGroup10,
    yourImageHere1,
    sleepangle1,
    overlapGroup,
    explore,
    ongoing1,
    justIn,
    overlapGroup11,
    yourImageHere2,
    sleepangle2,
    overlapGroup3,
    subscribe,
    posseBox,
    ongoing2,
    rightbar,
    address1,
    number3,
    address2,
    schedule,
    thursdayJanuary10Th2022,
    meetingWithClient,
    x10001100,
    activityLogs3,
    rectangle311,
    path641,
    iconStar2,
    price1,
    price2,
    x25AwayFrom10BonusPoints1,
    activityLogs4,
    rectangle312,
    path642,
    iconLabel,
    price3,
    price4,
    x25AwayFrom10BonusPoints2,
    activityLogs5,
    activityLogs6,
    rectangle313,
    path643,
    iconHeart,
    price5,
    price6,
    x25AwayFrom10BonusPoints3,
    activityLogs7,
    rectangle314,
    rectangle32,
    iconGift1,
    rectangle34,
    x12Months,
    path644,
    iconGift2,
    x20BonusPoints,
    x30BonusPoints,
    x50BonusPoints,
    x75BonusPointsGifts,
    x9Months,
    x6Months,
    x3Months,
    address3,
    searchbox2Props,
    dashboard1Props,
    group85Props,
    group6821Props,
    group6822Props,
    buttonWithdrawAllEarning3Props,
    x31Props,
    x32Props,
    group1032Props,
    x33Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-dashboard screen">
        <OverlapGroup16>
          <NAV>
            <Searchbox2 search2Props={searchbox2Props.search2Props} />
            <Separator></Separator>
            <Link to="/tablet-menu">
              <Profile>
                <Group122>
                  <Icon src={icon} />
                </Group122>
                <Profile1 style={{ backgroundImage: `url(${profile})` }}></Profile1>
              </Profile>
            </Link>
          </NAV>
          <SIDEBAR>
            <Header>
              <OverlapGroup1>
                <Path71 src={path71} />
              </OverlapGroup1>
            </Header>
            <Menus>
              <MENU>{menu}</MENU>
              <Dashboard>
                <Dashboard1 dashboard1={dashboard1Props.dashboard1} className={dashboard1Props.className} />
              </Dashboard>
              <Link to="/tablet-my-connections-ecwid-social-connect-dashboard">
                <Email>
                  <Proposal style={{ backgroundImage: `url(${proposal})` }}></Proposal>
                </Email>
              </Link>
              <Link to="/tablet-my-account">
                <Group121>
                  <Users style={{ backgroundImage: `url(${users})` }}></Users>
                </Group121>
              </Link>
              <Link to="/tablet-my-reports-distributers-only">
                <Group95>
                  <Group85
                    path69={group85Props.path69}
                    path70={group85Props.path70}
                    className={group85Props.className}
                  />
                </Group95>
              </Link>
            </Menus>
          </SIDEBAR>
          <CONTENT>
            <FlexCol>
              <OverlapGroup14>
                <Welcome>{welcome}</Welcome>
                <OverlapGroup9>
                  <Group91>
                    <Plunderdesigncomxxxxxxx>{plunderdesignComXxxxxxx}</Plunderdesigncomxxxxxxx>
                  </Group91>
                  <X013 />
                </OverlapGroup9>
              </OverlapGroup14>
              <Group87>
                <Group79>
                  <IconStar src={iconStar1} />
                  <X5PER1SPENT>{x5Per1Spent}</X5PER1SPENT>
                  <ONPERSONALREFERR>{onPersonalReferr}</ONPERSONALREFERR>
                </Group79>
                <Group80>
                  <Group64>
                    <PathContainer>
                      <Path51 src={path51} />
                      <Path52 src={path52} />
                      <Path53 src={path53} />
                      <Path54 src={path54} />
                    </PathContainer>
                  </Group64>
                  <BONUSREWARDS>{bonusRewards}</BONUSREWARDS>
                  <FOREVERY200INPURCHASES>{forEvery200InPurchases}</FOREVERY200INPURCHASES>
                </Group80>
                <Group70>
                  <Group81>
                    <Group69>
                      <Path59 src={path59} />
                      <Path60 src={path60} />
                      <Path61 src={path61} />
                      <PathContainer1>
                        <Path62 src={path62} />
                        <Path63 src={path63} />
                      </PathContainer1>
                    </Group69>
                    <LEVELUP>{levelUp}</LEVELUP>
                    <ACHIEVEAFFILIATEEARN10PER1>{achieveAffiliateEarn10Per1}</ACHIEVEAFFILIATEEARN10PER1>
                    <LEARNMORE>{learnMore}</LEARNMORE>
                  </Group81>
                </Group70>
              </Group87>
              <OverlapGroup12>
                <Rectangle29 src={rectangle29} />
                <ActivityLogs>{activityLogs1}</ActivityLogs>
              </OverlapGroup12>
              <Overview>
                <CardRewards>
                  <EarningReport>
                    <TextEarningThisMonth>
                      <AvailablePoints>{availablePoints}</AvailablePoints>
                      <OverlapGroup>
                        <Number>{number1}</Number>
                        <ButtonWithdrawAllEarning3 />
                      </OverlapGroup>
                    </TextEarningThisMonth>
                  </EarningReport>
                </CardRewards>
                <CardShareLink>
                  <OverlapGroup11 style={{ backgroundImage: `url(${overlapGroup1})` }}>
                    <ShareLink>
                      <TextEarningThisMonth1>
                        <Group1>
                          <Available50OffCoupons>{available50OffCoupons}</Available50OffCoupons>
                        </Group1>
                      </TextEarningThisMonth1>
                    </ShareLink>
                    <GroupContainer>
                      <Group682 />
                      <Group682 className={group6821Props.className} />
                      <Group682 className={group6822Props.className} />
                    </GroupContainer>
                  </OverlapGroup11>
                </CardShareLink>
                <CardShareLink>
                  <OverlapGroup2 style={{ backgroundImage: `url(${overlapGroup2})` }}>
                    <ShareLink1>
                      <TextEarningThisMonth2>
                        <Group11>
                          <ExclusiveItemAccess>{exclusiveItemAccess}</ExclusiveItemAccess>
                          <Group96 style={{ backgroundImage: `url(${group96})` }}>
                            <Number1>{number2}</Number1>
                          </Group96>
                        </Group11>
                      </TextEarningThisMonth2>
                    </ShareLink1>
                    <ButtonWithdrawAllEarning3 className={buttonWithdrawAllEarning3Props.className} />
                  </OverlapGroup2>
                </CardShareLink>
              </Overview>
              <OverlapGroup13 style={{ backgroundImage: `url(${overlapGroup13})` }}>
                <ActivityLogs1>{activityLogs2}</ActivityLogs1>
              </OverlapGroup13>
              <OverlapGroupContainer>
                <OverlapGroup10 style={{ backgroundImage: `url(${overlapGroup10})` }}>
                  <OverlapGroup15>
                    <YourImageHere src={yourImageHere1} />
                    <SLEEPANGLE src={sleepangle1} />
                    <a href="https://nulifespan.com/store-2/" target="_blank">
                      <Group25>
                        <OverlapGroup3 style={{ backgroundImage: `url(${overlapGroup})` }}>
                          <EXPLORE>{explore}</EXPLORE>
                        </OverlapGroup3>
                      </Group25>
                    </a>
                    <Ongoing>{ongoing1}</Ongoing>
                  </OverlapGroup15>
                  <JustIn>{justIn}</JustIn>
                </OverlapGroup10>
                <OverlapGroup111 style={{ backgroundImage: `url(${overlapGroup11})` }}>
                  <YourImageHere1 src={yourImageHere2} />
                  <SLEEPANGLE1 src={sleepangle2} />
                  <a href="https://nulifespan.com/store-2/" target="_blank">
                    <Group251>
                      <OverlapGroup4 style={{ backgroundImage: `url(${overlapGroup3})` }}>
                        <SUBSCRIBE>{subscribe}</SUBSCRIBE>
                      </OverlapGroup4>
                    </Group251>
                  </a>
                  <PosseBox>{posseBox}</PosseBox>
                  <Ongoing1>{ongoing2}</Ongoing1>
                </OverlapGroup111>
              </OverlapGroupContainer>
            </FlexCol>
            <Rightbar style={{ backgroundImage: `url(${rightbar})` }}>
              <TextEarningThisMonth3>
                <Group12>
                  <Address>{address1}</Address>
                  <OverlapGroup5>
                    <Number2>{number3}</Number2>
                    <Address1>{address2}</Address1>
                  </OverlapGroup5>
                </Group12>
              </TextEarningThisMonth3>
              <Title>
                <Schedule>{schedule}</Schedule>
                <ThursdayJanuary10th2022>{thursdayJanuary10Th2022}</ThursdayJanuary10th2022>
              </Title>
              <GroupContainer1>
                <Group101>
                  <Group100 />
                  <OverlapGroup17>
                    <DueDate2 />
                    <Group99>
                      <MeetingWithClient>{meetingWithClient}</MeetingWithClient>
                      <X10001100>{x10001100}</X10001100>
                    </Group99>
                  </OverlapGroup17>
                </Group101>
                <Group1032 />
              </GroupContainer1>
              <OverlapGroup7>
                <Line></Line>
                <X3 group100Props={x31Props.group100Props} date2Props={x31Props.date2Props} />
                <X3 group100Props={x32Props.group100Props} date2Props={x32Props.date2Props} />
              </OverlapGroup7>
              <Group1032 className={group1032Props.className} />
              <X3
                className={x33Props.className}
                group100Props={x33Props.group100Props}
                date2Props={x33Props.date2Props}
              />
            </Rightbar>
          </CONTENT>
          <ActivityLogs2>{activityLogs3}</ActivityLogs2>
          <Rectangle36></Rectangle36>
          <Group78>
            <Group72>
              <OverlapGroup18>
                <OverlapGroup6>
                  <Rectangle31 src={rectangle311} />
                  <Rectangle32></Rectangle32>
                  <Path64 src={path641} />
                  <IconStar1 src={iconStar2} />
                </OverlapGroup6>
                <Price>{price1}</Price>
                <Price1>{price2}</Price1>
                <X25AwayFrom10BonusPoints>{x25AwayFrom10BonusPoints1}</X25AwayFrom10BonusPoints>
              </OverlapGroup18>
              <ActivityLogs3>{activityLogs4}</ActivityLogs3>
            </Group72>
            <Group73>
              <OverlapGroup18>
                <OverlapGroup6>
                  <Rectangle31 src={rectangle312} />
                  <Rectangle321></Rectangle321>
                  <Path64 src={path642} />
                  <IconLabel src={iconLabel} />
                </OverlapGroup6>
                <Price>{price3}</Price>
                <Price1>{price4}</Price1>
                <X25AwayFrom10BonusPoints>{x25AwayFrom10BonusPoints2}</X25AwayFrom10BonusPoints>
              </OverlapGroup18>
              <ActivityLogs3>{activityLogs5}</ActivityLogs3>
            </Group73>
            <Group75>
              <OverlapGroup31>
                <ActivityLogs3>{activityLogs6}</ActivityLogs3>
                <OverlapGroup18>
                  <OverlapGroup6>
                    <Rectangle31 src={rectangle313} />
                    <Rectangle322></Rectangle322>
                    <Path64 src={path643} />
                    <IconHeart src={iconHeart} />
                  </OverlapGroup6>
                  <Price>{price5}</Price>
                  <Price1>{price6}</Price1>
                  <X25AwayFrom10BonusPoints>{x25AwayFrom10BonusPoints3}</X25AwayFrom10BonusPoints>
                </OverlapGroup18>
              </OverlapGroup31>
            </Group75>
            <Group76>
              <OverlapGroup41>
                <ActivityLogs3>{activityLogs7}</ActivityLogs3>
                <Group74>
                  <OverlapGroup21>
                    <OverlapGroup8>
                      <Rectangle311 src={rectangle314} />
                      <Rectangle323 src={rectangle32} />
                      <Rectangle33></Rectangle33>
                      <IconGift src={iconGift1} />
                      <Rectangle34 src={rectangle34} />
                      <Rectangle35></Rectangle35>
                    </OverlapGroup8>
                    <X12MONTHS>{x12Months}</X12MONTHS>
                    <Group77>
                      <OverlapGroup19>
                        <Rectangle312></Rectangle312>
                        <Rectangle324></Rectangle324>
                        <Rectangle331></Rectangle331>
                        <Path641 src={path644} />
                        <IconGift1 src={iconGift2} />
                        <X20bonusPoints>{x20BonusPoints}</X20bonusPoints>
                        <X30bonusPoints>{x30BonusPoints}</X30bonusPoints>
                        <X50bonusPoints>{x50BonusPoints}</X50bonusPoints>
                      </OverlapGroup19>
                      <X75bonusPointsGifts>{x75BonusPointsGifts}</X75bonusPointsGifts>
                    </Group77>
                    <X9MONTHS>{x9Months}</X9MONTHS>
                    <X6MONTHS>{x6Months}</X6MONTHS>
                    <X3MONTHS>{x3Months}</X3MONTHS>
                  </OverlapGroup21>
                  <Address2>{address3}</Address2>
                </Group74>
              </OverlapGroup41>
            </Group76>
          </Group78>
        </OverlapGroup16>
      </div>
    </div>
  );
}

const OverlapGroup16 = styled.div`
  width: 1024px;
  height: 1668px;
  position: relative;
`;

const NAV = styled.div`
  position: absolute;
  height: 120px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 47px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1024px;
  background-color: var(--white);
`;

const Separator = styled.div`
  width: 1px;
  height: 56px;
  margin-left: 367px;
  background-color: var(--black-haze);
  border-radius: 8px;
`;

const Profile = styled.div`
  width: 88px;
  height: 57px;
  margin-left: 24px;
  margin-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
`;

const Group122 = styled.div`
  display: flex;
  padding: 15px 17px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 57px;
  background-color: var(--silver-sand);
  border-radius: 14px;
`;

const Icon = styled.img`
  width: 22px;
  height: 26px;
  object-fit: cover;
`;

const Profile1 = styled.div`
  margin-bottom: -3.9px;
  width: 15px;
  height: 8px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SIDEBAR = styled.div`
  position: absolute;
  width: 120px;
  height: 1366px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 18px 4px 70px #00000005;
`;

const Header = styled.div`
  flex: 1;
  max-height: 120px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 100%;
  background-color: var(--white);
`;

const OverlapGroup1 = styled.div`
  height: 56px;
  display: flex;
  padding: 12.7px 10px;
  align-items: flex-start;
  min-width: 56px;
  background-color: var(--bizarre);
  border-radius: 14px;
`;

const Path71 = styled.img`
  width: 35px;
  height: 30px;
  object-fit: cover;
`;

const Menus = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 261px;
`;

const MENU = styled.div`
  ${OpensansBoldCloud16px}
  width: 66px;
  height: 24px;
  letter-spacing: 1px;
  line-height: 16px;
`;

const Dashboard = styled.div`
  height: 50px;
  position: relative;
  margin-top: 23px;
  margin-right: 2px;
  display: flex;
  padding: 13.3px 25.3px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 74px;
  background-color: var(--gallery);
  border-radius: 10px;
`;

const Email = styled.div`
  height: 50px;
  margin-top: 14px;
  margin-right: 2px;
  display: flex;
  padding: 0 28.2px;
  align-items: center;
  min-width: 74px;
  background-color: var(--white);
  cursor: pointer;
`;

const Proposal = styled.div`
  width: 18px;
  height: 24px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group121 = styled.div`
  height: 50px;
  margin-right: 2px;
  display: flex;
  padding: 15.1px 24.3px;
  align-items: flex-start;
  min-width: 74px;
  background-color: var(--white);
  cursor: pointer;
`;

const Users = styled.div`
  width: 25px;
  height: 20px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Group95 = styled.div`
  height: 50px;
  position: relative;
  margin-right: 2px;
  display: flex;
  padding: 12.9px 26.8px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 74px;
  background-color: var(--white);
  cursor: pointer;
`;

const CONTENT = styled.div`
  position: absolute;
  height: 1551px;
  top: 117px;
  left: 150px;
  display: flex;
  align-items: flex-start;
  min-width: 874px;
`;

const FlexCol = styled.div`
  width: 582px;
  margin-left: -12px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1081px;
`;

const OverlapGroup14 = styled.div`
  width: 561px;
  height: 31px;
  position: relative;
  margin-left: 3.44px;
`;

const Welcome = styled.div`
  ${OpensansNormalQuickSilver12px}
  position: absolute;
  width: 478px;
  height: 31px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 12px;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  width: 279px;
  height: 30px;
  top: 0;
  left: 282px;
  border-radius: 5px;
`;

const Group91 = styled.div`
  ${Border05pxDoveGray}
  position: absolute;
  height: 30px;
  top: 0;
  left: 0;
  display: flex;
  padding: 3px 10.5px;
  align-items: flex-start;
  min-width: 279px;
  background-color: var(--white);
  border-radius: 5px;
`;

const Plunderdesigncomxxxxxxx = styled.div`
  ${AvenirMediumBlack10px}
  min-height: 16px;
  min-width: 124px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 22px;
  white-space: nowrap;
`;

const Group87 = styled.div`
  margin-top: 41px;
  margin-left: 0.44px;
  display: flex;
  align-items: flex-start;
  min-width: 526px;
`;

const Group79 = styled.div`
  width: 137px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 68px;
`;

const IconStar = styled.img`
  width: 33px;
  height: 32px;
  margin-left: 13.4px;
  object-fit: cover;
`;

const X5PER1SPENT = styled.div`
  ${AvenirHeavyNormalEerieBlack10px}
  min-height: 16px;
  margin-top: 12px;
  margin-left: 15px;
  min-width: 88px;
  text-align: center;
  letter-spacing: 0;
  line-height: 10px;
  white-space: nowrap;
`;

const ONPERSONALREFERR = styled.p`
  ${AvenirBookNormalEerieBlack6px}
  min-height: 10px;
  margin-top: 1px;
  min-width: 137px;
  letter-spacing: 0;
  line-height: 6px;
  white-space: nowrap;
`;

const Group80 = styled.div`
  width: 96px;
  margin-left: 85px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 68px;
`;

const Group64 = styled.div`
  margin-left: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 26px;
`;

const PathContainer = styled.div`
  width: 26px;
  height: 32px;
  position: relative;
  margin-top: 0;
`;

const Path51 = styled.img`
  position: absolute;
  width: 12px;
  height: 13px;
  top: 18px;
  left: 0;
  object-fit: cover;
`;

const Path52 = styled.img`
  position: absolute;
  width: 12px;
  height: 13px;
  top: 18px;
  left: 13px;
  object-fit: cover;
`;

const Path53 = styled.img`
  position: absolute;
  width: 11px;
  height: 11px;
  top: 6px;
  left: 7px;
  object-fit: cover;
`;

const Path54 = styled.img`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 0;
  left: 2px;
  object-fit: cover;
`;

const BONUSREWARDS = styled.div`
  ${AvenirHeavyNormalEerieBlack10px}
  min-height: 16px;
  margin-top: 12px;
  margin-left: 6px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
  line-height: 10px;
  white-space: nowrap;
`;

const FOREVERY200INPURCHASES = styled.p`
  ${AvenirBookNormalEerieBlack6px}
  min-height: 10px;
  margin-top: 1px;
  margin-right: 4px;
  min-width: 92px;
  text-align: center;
  letter-spacing: 0;
  line-height: 6px;
  white-space: nowrap;
`;

const Group70 = styled.div`
  width: 112px;
  height: 81px;
  align-self: flex-end;
  margin-left: 96px;
  display: flex;
`;

const Group81 = styled.div`
  flex: 1;
  width: 114px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const Group69 = styled.div`
  margin-left: 10.59px;
  display: flex;
  align-items: flex-end;
  min-width: 35px;
`;

const Path59 = styled.img`
  width: 4px;
  height: 8px;
  margin-bottom: 0;
  object-fit: cover;
`;

const Path60 = styled.img`
  width: 4px;
  height: 13px;
  margin-left: 3px;
  margin-bottom: 0;
  object-fit: cover;
`;

const Path61 = styled.img`
  width: 4px;
  height: 18px;
  margin-left: 3px;
  margin-bottom: 0;
  object-fit: cover;
`;

const PathContainer1 = styled.div`
  width: 14px;
  height: 32px;
  position: relative;
  margin-left: 3px;
  margin-bottom: 0;
`;

const Path62 = styled.img`
  position: absolute;
  width: 4px;
  height: 23px;
  top: 9px;
  left: 0;
  object-fit: cover;
`;

const Path63 = styled.img`
  position: absolute;
  width: 10px;
  height: 32px;
  top: 0;
  left: 4px;
  object-fit: cover;
`;

const LEVELUP = styled.div`
  ${AvenirHeavyNormalEerieBlack10px}
  min-height: 16px;
  margin-top: 12px;
  margin-left: 14px;
  min-width: 48px;
  text-align: center;
  letter-spacing: 0;
  line-height: 10px;
  white-space: nowrap;
`;

const ACHIEVEAFFILIATEEARN10PER1 = styled.p`
  ${AvenirBookNormalEerieBlack6px}
  min-height: 10px;
  margin-top: 1px;
  min-width: 114px;
  text-align: center;
  letter-spacing: 0;
  line-height: 6px;
  white-space: nowrap;
`;

const LEARNMORE = styled.div`
  min-height: 10px;
  margin-top: 3px;
  margin-left: 8px;
  min-width: 40px;
  font-family: var(--font-family-avenir-medium);
  font-weight: 500;
  color: var(--eerie-black);
  font-size: 6px;
  text-align: center;
  letter-spacing: 0;
  line-height: 6px;
  text-decoration: underline;
  white-space: nowrap;
`;

const OverlapGroup12 = styled.div`
  width: 557px;
  height: 19px;
  position: relative;
  margin-top: 27px;
  margin-right: 0.35px;
`;

const Rectangle29 = styled.img`
  position: absolute;
  width: 557px;
  height: 18px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ActivityLogs = styled.div`
  ${AvenirHeavyNormalEerieBlack12px}
  position: absolute;
  width: 159px;
  height: 18px;
  top: 1px;
  left: 7px;
  letter-spacing: 0;
  line-height: 12px;
`;

const Overview = styled.div`
  margin-top: 9px;
  margin-right: 0.15px;
  display: flex;
  align-items: flex-start;
  min-width: 557px;
`;

const CardRewards = styled.div`
  height: 148px;
  margin-top: 0;
  display: flex;
  padding: 16.8px 50.7px;
  align-items: flex-end;
  min-width: 176px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px #0000000d;
`;

const EarningReport = styled.div`
  width: 70px;
  height: 109px;
  display: flex;
`;

const TextEarningThisMonth = styled.div`
  flex: 1;
  width: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const AvailablePoints = styled.div`
  ${AvenirBookNormalLogCabin10px}
  min-height: 16px;
  min-width: 72px;
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 58px;
  height: 65px;
  position: relative;
  margin-top: 29px;
  margin-left: 1.36px;
`;

const Number = styled.div`
  position: absolute;
  top: 0;
  left: 8px;
  font-family: var(--font-family-bodoni72-bold);
  font-weight: 700;
  color: var(--black);
  font-size: 38px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const CardShareLink = styled.div`
  height: 148px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 176px;
`;

const OverlapGroup11 = styled.div`
  width: 200px;
  margin-top: -8px;
  display: flex;
  flex-direction: column;
  padding: 30.2px 24.6px;
  align-items: flex-start;
  min-height: 172px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ShareLink = styled.div`
  width: 116px;
  height: 14px;
  align-self: flex-end;
  margin-right: 21.93px;
  display: flex;
`;

const TextEarningThisMonth1 = styled.div`
  flex: 1;
  width: 116px;
  display: flex;
`;

const Group1 = styled.div`
  flex: 1;
  width: 118px;
  display: flex;
`;

const Available50OffCoupons = styled.div`
  ${AvenirBookNormalLogCabin10px}
  margin-top: -1px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -1px;
  width: 118px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const GroupContainer = styled.div`
  height: 67px;
  position: relative;
  margin-top: 22px;
  display: flex;
  align-items: flex-start;
  min-width: 150px;
`;

const OverlapGroup2 = styled.div`
  width: 200px;
  position: relative;
  margin-top: -8px;
  display: flex;
  flex-direction: column;
  padding: 29.3px 49.7px;
  align-items: flex-start;
  min-height: 172px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ShareLink1 = styled.div`
  width: 94px;
  height: 78px;
  margin-top: 1px;
  display: flex;
`;

const TextEarningThisMonth2 = styled.div`
  flex: 1;
  width: 94px;
  display: flex;
`;

const Group11 = styled.div`
  flex: 1;
  width: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const ExclusiveItemAccess = styled.div`
  ${AvenirBookNormalLogCabin10px}
  margin-top: -1px;
  min-height: 16px;
  min-width: 96px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Group96 = styled.div`
  height: 50px;
  margin-top: 13px;
  margin-left: 3.29px;
  display: flex;
  padding: 13px 20.7px;
  align-items: flex-start;
  min-width: 52px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Number1 = styled.div`
  min-height: 22px;
  min-width: 10px;
  font-family: var(--font-family-avenir-heavy);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const OverlapGroup13 = styled.div`
  height: 18px;
  margin-top: 17px;
  margin-right: 0.35px;
  display: flex;
  padding: 0.2px 6.9px;
  align-items: flex-end;
  min-width: 557px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ActivityLogs1 = styled.p`
  ${AvenirHeavyNormalEerieBlack12px}
  width: 212px;
  height: 16px;
  letter-spacing: 0;
  line-height: 12px;
`;

const OverlapGroupContainer = styled.div`
  width: 582px;
  height: 211px;
  position: relative;
  margin-top: 479px;
`;

const OverlapGroup10 = styled.div`
  position: absolute;
  width: 291px;
  height: 211px;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
`;

const OverlapGroup15 = styled.div`
  position: absolute;
  width: 253px;
  height: 187px;
  top: 8px;
  left: 26px;
`;

const YourImageHere = styled.img`
  position: absolute;
  width: 179px;
  height: 178px;
  top: 7px;
  left: 74px;
  object-fit: cover;
`;

const SLEEPANGLE = styled.img`
  position: absolute;
  width: 120px;
  height: 187px;
  top: 0;
  left: 133px;
  object-fit: cover;
`;

const Group25 = styled.div`
  position: absolute;
  height: 37px;
  top: 137px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 106px;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  height: 157px;
  margin-top: -44.24px;
  display: flex;
  padding: 41px 84.1px;
  align-items: flex-start;
  min-width: 226px;
  background-size: cover;
  background-position: 50% 50%;
`;

const EXPLORE = styled.div`
  min-height: 18px;
  min-width: 54px;
  font-family: var(--font-family-avenir-book);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0.07px;
  line-height: 45px;
  white-space: nowrap;
`;

const Ongoing = styled.div`
  ${AvenirBookNormalBlack12px}
  position: absolute;
  width: 107px;
  height: 43px;
  top: 57px;
  left: 0;
  letter-spacing: 0;
  line-height: 12px;
`;

const JustIn = styled.div`
  ${Bodoni72BoldEerieBlack22px}
  position: absolute;
  top: 32px;
  left: 26px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup111 = styled.div`
  position: absolute;
  width: 291px;
  height: 211px;
  top: 0;
  left: 291px;
  background-size: cover;
  background-position: 50% 50%;
`;

const YourImageHere1 = styled.img`
  position: absolute;
  width: 179px;
  height: 178px;
  top: 15px;
  left: 100px;
  object-fit: cover;
`;

const SLEEPANGLE1 = styled.img`
  position: absolute;
  width: 120px;
  height: 187px;
  top: 8px;
  left: 159px;
  object-fit: cover;
`;

const Group251 = styled.div`
  position: absolute;
  height: 37px;
  top: 148px;
  left: 23px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 106px;
  cursor: pointer;
`;

const OverlapGroup4 = styled.div`
  height: 157px;
  margin-top: -44.24px;
  display: flex;
  padding: 42.5px 78.5px;
  align-items: flex-start;
  min-width: 226px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SUBSCRIBE = styled.div`
  min-height: 17px;
  min-width: 60px;
  font-family: var(--font-family-avenir-book);
  font-weight: 400;
  color: var(--white);
  font-size: 11px;
  text-align: center;
  letter-spacing: 0.07px;
  line-height: 41px;
  white-space: nowrap;
`;

const PosseBox = styled.div`
  ${Bodoni72BoldEerieBlack22px}
  position: absolute;
  top: 46px;
  left: 23px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Ongoing1 = styled.p`
  ${AvenirBookNormalBlack12px}
  position: absolute;
  width: 125px;
  height: 43px;
  top: 79px;
  left: 23px;
  letter-spacing: 0;
  line-height: 12px;
`;

const Rightbar = styled.div`
  width: 287px;
  position: relative;
  margin-left: 17px;
  display: flex;
  flex-direction: column;
  padding: 40px 18px;
  align-items: flex-start;
  min-height: 1551px;
  background-size: cover;
  background-position: 50% 50%;
`;

const TextEarningThisMonth3 = styled.div`
  width: 122px;
  height: 105px;
  align-self: center;
  margin-left: 0.98px;
  display: flex;
`;

const Group12 = styled.div`
  flex: 1;
  width: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const Address = styled.div`
  margin-top: -8px;
  margin-bottom: -13px;
  min-height: 21px;
  min-width: 124px;
  font-family: var(--font-family-manrope);
  color: var(--black-2);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: -0.14px;
  line-height: 34px;
  white-space: nowrap;
`;

const OverlapGroup5 = styled.div`
  width: 106px;
  height: 60px;
  position: relative;
  margin-top: 21px;
  margin-left: 0;
`;

const Number2 = styled.div`
  ${Bodoni72BoldBlack43px}
  position: absolute;
  top: 0;
  left: 17px;
  text-align: center;
  letter-spacing: -1.07px;
  line-height: 43px;
  white-space: nowrap;
`;

const Address1 = styled.p`
  position: absolute;
  top: 47px;
  left: 0;
  font-family: var(--font-family-montserrat);
  font-weight: 400;
  color: var(--quick-silver);
  font-size: 9px;
  text-align: center;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;

const Title = styled.div`
  width: 158px;
  height: 52px;
  margin-top: 47px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Schedule = styled.div`
  ${AvenirBlackEerieBlack24px}
  margin-right: 18px;
  flex: 1;
  max-height: 34px;
  height: 34px;
  letter-spacing: 0;
  line-height: 24px;
`;

const ThursdayJanuary10th2022 = styled.div`
  ${MontserratMediumQuickSilver16px}
  margin-right: -2px;
  flex: 1;
  max-height: 18px;
  margin-bottom: -2px;
  height: 18px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const GroupContainer1 = styled.div`
  width: 250px;
  height: 49px;
  position: relative;
  margin-top: 23px;
`;

const Group101 = styled.div`
  position: absolute;
  height: 49px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 250px;
`;

const OverlapGroup17 = styled.div`
  width: 201px;
  height: 49px;
  position: relative;
  margin-left: 11px;
`;

const Group99 = styled.div`
  position: absolute;
  width: 161px;
  height: 49px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MeetingWithClient = styled.div`
  ${AvenirBlackEerieBlack16px}
  margin-right: -2px;
  flex: 1;
  max-height: 26px;
  height: 26px;
  letter-spacing: 0;
  line-height: 16px;
`;

const X10001100 = styled.div`
  ${ManropeExtraBoldBizarre10px}
  margin-left: 1px;
  flex: 1;
  max-height: 18px;
  margin-bottom: -2px;
  height: 18px;
  letter-spacing: 0;
  line-height: 10px;
`;

const OverlapGroup7 = styled.div`
  width: 250px;
  height: 51px;
  position: relative;
  margin-top: 8px;
`;

const Line = styled.div`
  position: absolute;
  width: 250px;
  height: 1px;
  top: 0;
  left: 0;
  background-color: var(--cultured-pearl);
`;

const ActivityLogs2 = styled.div`
  ${AvenirHeavyNormalEerieBlack18px}
  position: absolute;
  width: 234px;
  height: 29px;
  top: 155px;
  left: 150px;
  letter-spacing: 0;
  line-height: 18px;
`;

const Rectangle36 = styled.div`
  position: absolute;
  width: 557px;
  height: 440px;
  top: 550px;
  left: 150px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px #0000000d;
`;

const Group78 = styled.div`
  position: absolute;
  width: 535px;
  top: 560px;
  left: 160px;
  display: flex;
  flex-direction: column;
  padding: 0px 0;
  align-items: flex-start;
  min-height: 424px;
`;

const Group72 = styled.div`
  width: 536px;
  height: 93px;
  position: relative;
  margin-left: 0;
`;

const OverlapGroup18 = styled.div`
  position: absolute;
  width: 536px;
  height: 74px;
  top: 23px;
  left: 0;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 535px;
  height: 56px;
  top: 7px;
  left: 0;
`;

const Rectangle31 = styled.img`
  position: absolute;
  width: 507px;
  height: 33px;
  top: 11px;
  left: 28px;
  object-fit: cover;
`;

const Rectangle32 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 339px;
  height: 33px;
  top: 11px;
  left: 28px;
  background-color: var(--geyser);
`;

const Path64 = styled.img`
  position: absolute;
  width: 56px;
  height: 56px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const IconStar1 = styled.img`
  position: absolute;
  width: 38px;
  height: 36px;
  top: 10px;
  left: 9px;
  object-fit: cover;
`;

const Price = styled.div`
  ${AvenirHeavyNormalWhite19px}
  position: absolute;
  top: 26px;
  left: 190px;
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
`;

const Price1 = styled.div`
  ${AvenirHeavyNormalSonicSilver12px}
  position: absolute;
  top: 0;
  left: 506px;
  letter-spacing: 0;
  line-height: 12px;
  white-space: nowrap;
`;

const X25AwayFrom10BonusPoints = styled.p`
  ${AvenirBookNormalSonicSilver11px}
  position: absolute;
  top: 57px;
  left: 375px;
  text-align: right;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const ActivityLogs3 = styled.div`
  ${AvenirHeavyNormalEerieBlack20px}
  position: absolute;
  width: 257px;
  height: 25px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const Group73 = styled.div`
  width: 536px;
  height: 93px;
  position: relative;
  margin-top: 8px;
  margin-left: 0;
`;

const Rectangle321 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 339px;
  height: 33px;
  top: 11px;
  left: 28px;
  background-color: var(--surf-crest);
`;

const IconLabel = styled.img`
  position: absolute;
  width: 32px;
  height: 31px;
  top: 13px;
  left: 11px;
  object-fit: cover;
`;

const Group75 = styled.div`
  height: 93px;
  margin-top: 8px;
  margin-left: 0;
  display: flex;
  align-items: flex-end;
  min-width: 535px;
`;

const OverlapGroup31 = styled.div`
  width: 536px;
  height: 97px;
  position: relative;
  margin-bottom: -4px;
`;

const Rectangle322 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 339px;
  height: 33px;
  top: 11px;
  left: 28px;
  background-color: var(--cameo);
`;

const IconHeart = styled.img`
  position: absolute;
  width: 32px;
  height: 30px;
  top: 12px;
  left: 12px;
  object-fit: cover;
`;

const Group76 = styled.div`
  margin-top: 11px;
  margin-left: 0;
  display: flex;
  align-items: flex-end;
  min-width: 535px;
`;

const OverlapGroup41 = styled.div`
  width: 536px;
  height: 118px;
  position: relative;
  margin-bottom: 0;
`;

const Group74 = styled.div`
  position: absolute;
  width: 533px;
  top: 5px;
  left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 113px;
`;

const OverlapGroup21 = styled.div`
  width: 533px;
  height: 94px;
  position: relative;
  margin-top: 1px;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 516px;
  height: 64px;
  top: 30px;
  left: 16px;
`;

const Rectangle311 = styled.img`
  position: absolute;
  width: 507px;
  height: 55px;
  top: 0;
  left: 9px;
  object-fit: cover;
`;

const Rectangle323 = styled.img`
  position: absolute;
  width: 339px;
  height: 55px;
  top: 0;
  left: 9px;
  object-fit: cover;
`;

const Rectangle33 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 111px;
  height: 55px;
  top: 0;
  left: 128px;
  background-color: var(--bizarre);
  border-radius: 10px;
`;

const IconGift = styled.img`
  position: absolute;
  width: 38px;
  height: 38px;
  top: 9px;
  left: 0;
  object-fit: cover;
`;

const Rectangle34 = styled.img`
  position: absolute;
  width: 499px;
  height: 9px;
  top: 54px;
  left: 17px;
  object-fit: cover;
`;

const Rectangle35 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 331px;
  height: 9px;
  top: 54px;
  left: 17px;
  background-color: var(--cameo);
`;

const X12MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver11px}
  position: absolute;
  top: 1px;
  left: 483px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const Group77 = styled.div`
  position: absolute;
  height: 72px;
  top: 22px;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 507px;
`;

const OverlapGroup19 = styled.div`
  width: 414px;
  height: 72px;
  position: relative;
  margin-top: 0;
`;

const Rectangle312 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 389px;
  height: 55px;
  top: 8px;
  left: 25px;
  background-color: var(--white);
`;

const Rectangle324 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 251px;
  height: 55px;
  top: 8px;
  left: 25px;
  background-color: var(--bizarre);
`;

const Rectangle331 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 124px;
  height: 55px;
  top: 8px;
  left: 165px;
  background-color: var(--bizarre);
`;

const Path641 = styled.img`
  position: absolute;
  width: 72px;
  height: 72px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const IconGift1 = styled.img`
  position: absolute;
  width: 38px;
  height: 38px;
  top: 17px;
  left: 16px;
  object-fit: cover;
`;

const X20bonusPoints = styled.div`
  ${AvenirHeavyNormalWhite11px}
  position: absolute;
  top: 23px;
  left: 82px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const X30bonusPoints = styled.div`
  ${AvenirHeavyNormalWhite11px}
  position: absolute;
  top: 23px;
  left: 194px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const X50bonusPoints = styled.div`
  ${AvenirHeavyNormalPaleSky11px}
  position: absolute;
  top: 23px;
  left: 319px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const X75bonusPointsGifts = styled.div`
  ${AvenirHeavyNormalPaleSky11px}
  min-height: 43px;
  align-self: center;
  margin-left: 25px;
  margin-top: 3.45px;
  min-width: 68px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const X9MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver11px}
  position: absolute;
  top: 1px;
  left: 386px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const X6MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver11px}
  position: absolute;
  top: 1px;
  left: 263px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const X3MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver11px}
  position: absolute;
  top: 0;
  left: 141px;
  text-align: center;
  letter-spacing: 0;
  line-height: 13px;
  white-space: nowrap;
`;

const Address2 = styled.p`
  ${AvenirBookNormalSonicSilver11px}
  min-height: 17px;
  margin-top: 5px;
  margin-right: 2px;
  min-width: 156px;
  text-align: right;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

export default TabletDashboard;
