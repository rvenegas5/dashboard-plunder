import React from "react";
import { Link } from "react-router-dom";
import Group86 from "../Group86";
import X013 from "../X013";
import ButtonWithdrawAllEarning4 from "../ButtonWithdrawAllEarning4";
import Group683 from "../Group683";
import styled from "styled-components";
import {
  AvenirHeavyNormalEerieBlack10px,
  AvenirHeavyNormalSonicSilver7px,
  AvenirBookNormalWhite15px,
  AvenirBookNormalLogCabin6px,
  Bodoni72BoldBlack43px,
  AvenirBookNormalBlack12px,
  Border1pxDoveGray,
  AvenirHeavyNormalWhite11px,
  AvenirHeavyNormalEerieBlack9px,
  OpensansNormalQuickSilver12px,
  Border05pxDoveGray,
  AvenirBookNormalEerieBlack4px,
  Bodoni72BoldEerieBlack32px,
  AvenirHeavyNormalEerieBlack18px,
  AvenirHeavyNormalSonicSilver5px,
  AvenirHeavyNormalWhite4px,
  AvenirMediumBlack10px,
  AvenirHeavyNormalPaleSky4px,
  AvenirBookNormalSonicSilver4px,
  Border2pxDoveGray,
} from "../../styledMixins";
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
        <FlexCol>
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
            <OverlapGroupContainer>
              <OverlapGroup8>
                <Welcome>{welcome}</Welcome>
                <ActivityLogs>{activityLogs1}</ActivityLogs>
              </OverlapGroup8>
              <OverlapGroup1>
                <Group91>
                  <Plunderdesigncomxxxxxxx>{plunderdesignComXxxxxxx}</Plunderdesigncomxxxxxxx>
                </Group91>
                <X013 className={x013Props.className} />
              </OverlapGroup1>
            </OverlapGroupContainer>
            <Link to="/mobile-search-pop">
              <Searchbox>
                <Search2>
                  <VectorContainer>
                    <Vector src="/img/vector@1x.png" />
                    <Vector1 src={vector2} />
                  </VectorContainer>
                </Search2>
              </Searchbox>
            </Link>
          </FlexRow>
        </FlexCol>
        <GroupContainer>
          <Group79>
            <Group106>
              <IconStar src={iconStar1} />
              <X5PER1SPENT>{x5Per1Spent}</X5PER1SPENT>
              <ONPERSONALREFERR>{onPersonalReferr}</ONPERSONALREFERR>
            </Group106>
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
            <X5PER1SPENT>{bonusRewards}</X5PER1SPENT>
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
        </GroupContainer>
        <Rectangle29></Rectangle29>
        <FlexRow1>
          <OverlapGroup7>
            <CardRewards>
              <EarningReport>
                <TextEarningThisMonth>
                  <AvailablePoints>{availablePoints}</AvailablePoints>
                  <Number>{number1}</Number>
                  <ButtonWithdrawAllEarning4 />
                </TextEarningThisMonth>
              </EarningReport>
            </CardRewards>
            <OverlapGroup2 style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <ShareLink>
                <TextEarningThisMonth1>
                  <Group1>
                    <Available50OffCoupons>{available50OffCoupons}</Available50OffCoupons>
                  </Group1>
                </TextEarningThisMonth1>
              </ShareLink>
              <Group108>
                <Group683 />
                <Group683 className={group6831Props.className} />
                <Group683 className={group6832Props.className} />
              </Group108>
            </OverlapGroup2>
            <ActivityLogs1>{activityLogs2}</ActivityLogs1>
          </OverlapGroup7>
          <CardShareLink>
            <Group109>
              <OverlapGroup style={{ backgroundImage: `url(${overlapGroup1})` }}>
                <ExclusiveItemAccess>{exclusiveItemAccess}</ExclusiveItemAccess>
                <Group96 style={{ backgroundImage: `url(${group96})` }}>
                  <Number1>{number2}</Number1>
                </Group96>
                <ButtonWithdrawAllEarning4 className={buttonWithdrawAllEarning4Props.className} />
              </OverlapGroup>
            </Group109>
          </CardShareLink>
        </FlexRow1>
        <EarningReport1>
          <TextEarningThisMonth2>
            <Address>{address1}</Address>
            <OverlapGroup3>
              <Address1>{address2}</Address1>
              <Number2>{number3}</Number2>
            </OverlapGroup3>
          </TextEarningThisMonth2>
        </EarningReport1>
        <Group110>
          <Group78>
            <Group72>
              <OverlapGroup11>
                <OverlapGroup4>
                  <Rectangle31 src={rectangle311} />
                  <Rectangle32></Rectangle32>
                  <Path64 src={path641} />
                  <IconStar1 src={iconStar2} />
                </OverlapGroup4>
                <Price>{price1}</Price>
                <Price1>{price2}</Price1>
                <X25AwayFrom10BonusPoints>{x25AwayFrom10BonusPoints1}</X25AwayFrom10BonusPoints>
              </OverlapGroup11>
              <ActivityLogs2>{activityLogs3}</ActivityLogs2>
            </Group72>
            <Group73>
              <OverlapGroup21>
                <OverlapGroup4>
                  <Rectangle311 src={rectangle312} />
                  <Rectangle321></Rectangle321>
                  <Path64 src={path642} />
                  <IconLabel src={iconLabel} />
                </OverlapGroup4>
                <Price>{price3}</Price>
                <Price1>{price4}</Price1>
                <X25AwayFrom10BonusPoints1>{x25AwayFrom10BonusPoints2}</X25AwayFrom10BonusPoints1>
              </OverlapGroup21>
              <ActivityLogs2>{activityLogs4}</ActivityLogs2>
            </Group73>
            <Group75>
              <OverlapGroup31>
                <ActivityLogs2>{activityLogs5}</ActivityLogs2>
                <OverlapGroup12>
                  <OverlapGroup5>
                    <Rectangle312 src={rectangle313} />
                    <Rectangle322></Rectangle322>
                    <Path64 src={path643} />
                    <IconLabel src={iconHeart} />
                  </OverlapGroup5>
                  <Price2>{price5}</Price2>
                  <Price1>{price6}</Price1>
                  <X25AwayFrom10BonusPoints>{x25AwayFrom10BonusPoints3}</X25AwayFrom10BonusPoints>
                </OverlapGroup12>
              </OverlapGroup31>
            </Group75>
            <Group76>
              <OverlapGroup41>
                <ActivityLogs2>{activityLogs6}</ActivityLogs2>
                <Group74>
                  <OverlapGroup32>
                    <OverlapGroup22>
                      <OverlapGroup6>
                        <Rectangle313 src={rectangle314} />
                        <Rectangle323 src={rectangle32} />
                        <Rectangle33></Rectangle33>
                        <IconGift src={iconGift1} />
                        <Rectangle34 src={rectangle34} />
                        <Rectangle35></Rectangle35>
                      </OverlapGroup6>
                      <Group77>
                        <OverlapGroup13>
                          <Rectangle314></Rectangle314>
                          <Rectangle324></Rectangle324>
                          <Rectangle331></Rectangle331>
                          <Path641 src={path644} />
                          <IconGift1 src={iconGift2} />
                          <X20bonusPoints>{x20BonusPoints}</X20bonusPoints>
                          <X30bonusPoints>{x30BonusPoints}</X30bonusPoints>
                          <X50bonusPoints>{x50BonusPoints}</X50bonusPoints>
                        </OverlapGroup13>
                        <X75bonusPointsGifts>{x75BonusPointsGifts}</X75bonusPointsGifts>
                      </Group77>
                      <X9MONTHS>{x9Months}</X9MONTHS>
                      <X6MONTHS>{x6Months}</X6MONTHS>
                    </OverlapGroup22>
                    <X12MONTHS>{x12Months}</X12MONTHS>
                    <X3MONTHS>{x3Months}</X3MONTHS>
                  </OverlapGroup32>
                  <Address2>{address3}</Address2>
                </Group74>
              </OverlapGroup41>
            </Group76>
          </Group78>
        </Group110>
        <MarketingAd2>
          <OverlapGroup51 style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <GroupContainer1>
              <OverlapGroup14>
                <JustIn>{justIn}</JustIn>
                <Ongoing>{ongoing1}</Ongoing>
              </OverlapGroup14>
              <a href="https://nulifespan.com/store-2/" target="_blank">
                <Group25>
                  <OverlapGroup9 style={{ backgroundImage: `url(${overlapGroup3})` }}>
                    <EXPLORE>{explore}</EXPLORE>
                  </OverlapGroup9>
                </Group25>
              </a>
            </GroupContainer1>
            <SLEEPANGLE src={sleepangle1} />
          </OverlapGroup51>
        </MarketingAd2>
        <MarketingAd21>
          <OverlapGroup61 style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <GroupContainer2>
              <OverlapGroup15>
                <JustIn>{posseBox}</JustIn>
                <Ongoing1>{ongoing2}</Ongoing1>
              </OverlapGroup15>
              <a href="https://nulifespan.com/store-2/" target="_blank">
                <Group111>
                  <OverlapGroup10 style={{ backgroundImage: `url(${overlapGroup4})` }}>
                    <SUBSCRIBE>{subscribe}</SUBSCRIBE>
                  </OverlapGroup10>
                </Group111>
              </a>
            </GroupContainer2>
            <SLEEPANGLE1 src={sleepangle2} />
          </OverlapGroup61>
        </MarketingAd21>
      </div>
    </div>
  );
}

const FlexCol = styled.div`
  width: 414px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 175px;
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
  height: 81px;
  margin-top: 15px;
  margin-right: 0;
  display: flex;
  align-items: flex-start;
  min-width: 382px;
`;

const OverlapGroupContainer = styled.div`
  width: 304px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 81px;
`;

const OverlapGroup8 = styled.div`
  width: 304px;
  height: 48px;
  position: relative;
  margin-left: 0;
`;

const Welcome = styled.div`
  ${OpensansNormalQuickSilver12px}
  position: absolute;
  width: 304px;
  height: 27px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 12px;
`;

const ActivityLogs = styled.div`
  ${AvenirHeavyNormalEerieBlack18px}
  position: absolute;
  width: 234px;
  height: 29px;
  top: 19px;
  left: 0;
  letter-spacing: 0;
  line-height: 18px;
`;

const OverlapGroup1 = styled.div`
  width: 280px;
  height: 30px;
  position: relative;
  margin-top: 3px;
  margin-left: 0;
`;

const Group91 = styled.div`
  ${Border05pxDoveGray}
  position: absolute;
  height: 30px;
  top: 0;
  left: 1px;
  display: flex;
  padding: 3px 52.5px;
  justify-content: flex-end;
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

const Searchbox = styled.div`
  height: 56px;
  margin-left: 22px;
  display: flex;
  padding: 16px 16px;
  align-items: flex-start;
  min-width: 56px;
  background-color: var(--white);
  border-radius: 14px;
  box-shadow: 0px 4px 8px #0000000a;
  cursor: pointer;
`;

const Search2 = styled.div`
  display: flex;
  padding: 0px 0;
  align-items: flex-start;
  min-width: 24px;
`;

const VectorContainer = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;

const Vector = styled.img`
  position: absolute;
  width: 21px;
  height: 21px;
  top: 0;
  left: 3px;
  object-fit: cover;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 9px;
  height: 9px;
  top: 15px;
  left: 0;
  object-fit: cover;
`;

const GroupContainer = styled.div`
  margin-top: 20px;
  margin-right: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 343px;
`;

const Group79 = styled.div`
  width: 90px;
  height: 80px;
  display: flex;
`;

const Group106 = styled.div`
  flex: 1;
  width: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const IconStar = styled.img`
  width: 42px;
  height: 40px;
  margin-right: 1.71px;
  object-fit: cover;
`;

const X5PER1SPENT = styled.div`
  ${AvenirHeavyNormalEerieBlack9px}
  min-height: 14px;
  margin-top: 17px;
  min-width: 80px;
  text-align: center;
  letter-spacing: 0;
  line-height: 9px;
  white-space: nowrap;
`;

const ONPERSONALREFERR = styled.p`
  ${AvenirBookNormalEerieBlack4px}
  min-height: 7px;
  margin-top: 5px;
  min-width: 92px;
  letter-spacing: 0;
  line-height: 4px;
  white-space: nowrap;
`;

const Group80 = styled.div`
  width: 80px;
  margin-left: 46px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80px;
`;

const Group64 = styled.div`
  margin-right: 1.51px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 32px;
`;

const PathContainer = styled.div`
  width: 32px;
  height: 40px;
  position: relative;
  margin-bottom: 0;
`;

const Path51 = styled.img`
  position: absolute;
  width: 16px;
  height: 17px;
  top: 23px;
  left: 0;
  object-fit: cover;
`;

const Path52 = styled.img`
  position: absolute;
  width: 16px;
  height: 17px;
  top: 23px;
  left: 17px;
  object-fit: cover;
`;

const Path53 = styled.img`
  position: absolute;
  width: 14px;
  height: 14px;
  top: 7px;
  left: 9px;
  object-fit: cover;
`;

const Path54 = styled.img`
  position: absolute;
  width: 28px;
  height: 28px;
  top: 0;
  left: 2px;
  object-fit: cover;
`;

const FOREVERY200INPURCHASES = styled.p`
  ${AvenirBookNormalEerieBlack4px}
  min-height: 7px;
  margin-top: 5px;
  min-width: 62px;
  text-align: center;
  letter-spacing: 0;
  line-height: 4px;
  white-space: nowrap;
`;

const Group70 = styled.div`
  width: 74px;
  height: 90px;
  align-self: flex-end;
  margin-left: 53px;
  display: flex;
`;

const Group81 = styled.div`
  margin-left: 0;
  margin-right: 0;
  flex: 1;
  width: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const Group69 = styled.div`
  margin-left: 1.1px;
  display: flex;
  align-items: flex-end;
  min-width: 45px;
`;

const Path59 = styled.img`
  width: 5px;
  height: 10px;
  margin-bottom: 0;
  object-fit: cover;
`;

const Path60 = styled.img`
  width: 5px;
  height: 17px;
  margin-left: 4px;
  margin-bottom: 0;
  object-fit: cover;
`;

const Path61 = styled.img`
  width: 5px;
  height: 23px;
  margin-left: 4px;
  margin-bottom: 0;
  object-fit: cover;
`;

const PathContainer1 = styled.div`
  width: 18px;
  height: 40px;
  position: relative;
  margin-left: 4px;
  margin-bottom: 0;
`;

const Path62 = styled.img`
  position: absolute;
  width: 5px;
  height: 29px;
  top: 11px;
  left: 0;
  object-fit: cover;
`;

const Path63 = styled.img`
  position: absolute;
  width: 13px;
  height: 40px;
  top: 0;
  left: 5px;
  object-fit: cover;
`;

const LEVELUP = styled.div`
  ${AvenirHeavyNormalEerieBlack9px}
  min-height: 14px;
  margin-top: 17px;
  min-width: 44px;
  text-align: center;
  letter-spacing: 0;
  line-height: 9px;
  white-space: nowrap;
`;

const ACHIEVEAFFILIATEEARN10PER1 = styled.p`
  ${AvenirBookNormalEerieBlack4px}
  min-height: 7px;
  margin-top: 5px;
  min-width: 76px;
  text-align: center;
  letter-spacing: 0;
  line-height: 4px;
  white-space: nowrap;
`;

const LEARNMORE = styled.div`
  min-height: 7px;
  margin-top: 3px;
  margin-left: 2px;
  min-width: 28px;
  font-family: var(--font-family-avenir-medium);
  font-weight: 500;
  color: var(--eerie-black);
  font-size: 4px;
  text-align: center;
  letter-spacing: 0;
  line-height: 4px;
  text-decoration: underline;
  white-space: nowrap;
`;

const Rectangle29 = styled.div`
  width: 382px;
  height: 12px;
  margin-top: 16px;
  background-color: var(--silver-sand);
  border-radius: 5px;
`;

const FlexRow1 = styled.div`
  margin-top: 6px;
  margin-right: 0;
  display: flex;
  align-items: flex-start;
  min-width: 382px;
`;

const OverlapGroup7 = styled.div`
  width: 251px;
  height: 101px;
  position: relative;
  align-self: flex-end;
`;

const CardRewards = styled.div`
  position: absolute;
  height: 101px;
  top: 0;
  left: 0;
  display: flex;
  padding: 11.5px 36px;
  align-items: flex-end;
  min-width: 121px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px #0000000d;
`;

const EarningReport = styled.div`
  width: 42px;
  height: 75px;
  display: flex;
`;

const TextEarningThisMonth = styled.div`
  flex: 1;
  width: 44px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const AvailablePoints = styled.div`
  ${AvenirBookNormalLogCabin6px}
  min-height: 10px;
  min-width: 44px;
  text-align: center;
  letter-spacing: 0;
  line-height: 9px;
  white-space: nowrap;
`;

const Number = styled.div`
  min-height: 32px;
  margin-top: 21px;
  margin-left: 0;
  min-width: 30px;
  font-family: var(--font-family-bodoni72-bold);
  font-weight: 700;
  color: var(--black);
  font-size: 25px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 145px;
  top: -8px;
  left: 118px;
  display: flex;
  flex-direction: column;
  padding: 23.2px 20.5px;
  align-items: flex-end;
  min-height: 125px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ShareLink = styled.div`
  width: 70px;
  height: 8px;
  margin-right: 16.8px;
  display: flex;
`;

const TextEarningThisMonth1 = styled.div`
  margin-top: 0;
  flex: 1;
  width: 70px;
  display: flex;
`;

const Group1 = styled.div`
  flex: 1;
  width: 72px;
  display: flex;
`;

const Available50OffCoupons = styled.div`
  ${AvenirBookNormalLogCabin6px}
  margin-top: -1px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -1px;
  width: 72px;
  text-align: center;
  letter-spacing: 0;
  line-height: 10px;
  white-space: nowrap;
`;

const Group108 = styled.div`
  height: 44px;
  position: relative;
  margin-top: 17px;
  display: flex;
  align-items: flex-start;
  min-width: 103px;
`;

const ActivityLogs1 = styled.div`
  position: absolute;
  width: 159px;
  height: 11px;
  top: 25px;
  left: 7px;
  font-family: var(--font-family-avenir-heavy);
  font-weight: 400;
  color: var(--eerie-black);
  font-size: 6px;
  letter-spacing: 0;
  line-height: 6px;
`;

const CardShareLink = styled.div`
  width: 121px;
  height: 101px;
  margin-left: 10px;
  display: flex;
`;

const Group109 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 120.66927337646484px;
`;

const OverlapGroup = styled.div`
  width: 145px;
  position: relative;
  margin-top: -8px;
  display: flex;
  flex-direction: column;
  padding: 22.2px 42px;
  align-items: center;
  min-height: 125px;
  background-size: cover;
  background-position: 50% 50%;
`;

const ExclusiveItemAccess = styled.div`
  ${AvenirBookNormalLogCabin6px}
  min-height: 10px;
  align-self: flex-end;
  min-width: 58px;
  text-align: center;
  letter-spacing: 0;
  line-height: 10px;
  white-space: nowrap;
`;

const Group96 = styled.div`
  height: 34px;
  margin-top: 10px;
  margin-left: 1.19px;
  display: flex;
  padding: 7.7px 14.2px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 36px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Number1 = styled.div`
  min-height: 13px;
  min-width: 6px;
  font-family: var(--font-family-avenir-heavy);
  font-weight: 400;
  color: var(--white);
  font-size: 8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const EarningReport1 = styled.div`
  width: 140px;
  height: 108px;
  margin-top: 45px;
  margin-right: 0;
  display: flex;
`;

const TextEarningThisMonth2 = styled.div`
  margin-left: 0;
  margin-right: 0;
  flex: 1;
  width: 142px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
`;

const Address = styled.div`
  margin-top: -12px;
  margin-bottom: -23px;
  min-height: 20px;
  margin-left: 3px;
  min-width: 136px;
  font-family: var(--font-family-montserrat);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: -0.14px;
  line-height: 43px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  width: 142px;
  height: 62px;
  position: relative;
  margin-top: 26px;
`;

const Address1 = styled.p`
  position: absolute;
  top: 45px;
  left: 0;
  font-family: var(--font-family-montserrat);
  font-weight: 400;
  color: var(--quick-silver);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: 44px;
  white-space: nowrap;
`;

const Number2 = styled.div`
  ${Bodoni72BoldBlack43px}
  position: absolute;
  top: 0;
  left: 35px;
  text-align: center;
  letter-spacing: -1.07px;
  line-height: 43px;
  white-space: nowrap;
`;

const Group110 = styled.div`
  width: 382px;
  height: 312px;
  margin-top: 24px;
  display: flex;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px #0000000d;
`;

const Group78 = styled.div`
  margin-top: 14px;
  margin-left: 8px;
  margin-right: 8px;
  flex: 1;
  margin-bottom: 13px;
  width: 366.0001525878906px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100% - 27px);
`;

const Group72 = styled.div`
  width: 366px;
  height: 59px;
  position: relative;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 366px;
  height: 45px;
  top: 16px;
  left: 0;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 366px;
  height: 38px;
  top: 4px;
  left: 0;
`;

const Rectangle31 = styled.img`
  position: absolute;
  width: 347px;
  height: 23px;
  top: 6px;
  left: 19px;
  object-fit: cover;
`;

const Rectangle32 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 232px;
  height: 23px;
  top: 6px;
  left: 19px;
  background-color: var(--geyser);
`;

const Path64 = styled.img`
  position: absolute;
  width: 38px;
  height: 38px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const IconStar1 = styled.img`
  position: absolute;
  width: 26px;
  height: 25px;
  top: 7px;
  left: 6px;
  object-fit: cover;
`;

const Price = styled.div`
  ${AvenirHeavyNormalWhite11px}
  position: absolute;
  top: 16px;
  left: 130px;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const Price1 = styled.div`
  ${AvenirHeavyNormalSonicSilver7px}
  position: absolute;
  top: 0;
  left: 345px;
  letter-spacing: 0;
  line-height: 7px;
  white-space: nowrap;
`;

const X25AwayFrom10BonusPoints = styled.p`
  ${AvenirBookNormalSonicSilver4px}
  position: absolute;
  top: 38px;
  left: 286px;
  text-align: right;
  letter-spacing: 0;
  line-height: 4px;
  white-space: nowrap;
`;

const ActivityLogs2 = styled.div`
  ${AvenirHeavyNormalEerieBlack10px}
  position: absolute;
  width: 177px;
  height: 18px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 10px;
`;

const Group73 = styled.div`
  width: 366px;
  height: 58px;
  position: relative;
  margin-top: 11px;
`;

const OverlapGroup21 = styled.div`
  position: absolute;
  width: 366px;
  height: 44px;
  top: 16px;
  left: 0;
`;

const Rectangle311 = styled.img`
  position: absolute;
  width: 347px;
  height: 22px;
  top: 8px;
  left: 19px;
  object-fit: cover;
`;

const Rectangle321 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 232px;
  height: 22px;
  top: 8px;
  left: 19px;
  background-color: var(--surf-crest);
`;

const IconLabel = styled.img`
  position: absolute;
  width: 22px;
  height: 21px;
  top: 9px;
  left: 8px;
  object-fit: cover;
`;

const X25AwayFrom10BonusPoints1 = styled.p`
  ${AvenirBookNormalSonicSilver4px}
  position: absolute;
  top: 37px;
  left: 286px;
  text-align: right;
  letter-spacing: 0;
  line-height: 4px;
  white-space: nowrap;
`;

const Group75 = styled.div`
  height: 60px;
  margin-top: 9px;
  display: flex;
  align-items: flex-end;
  min-width: 366px;
`;

const OverlapGroup31 = styled.div`
  width: 366px;
  height: 62px;
  position: relative;
  margin-bottom: -1.75px;
`;

const OverlapGroup12 = styled.div`
  position: absolute;
  width: 366px;
  height: 45px;
  top: 17px;
  left: 0;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 366px;
  height: 38px;
  top: 5px;
  left: 0;
`;

const Rectangle312 = styled.img`
  position: absolute;
  width: 347px;
  height: 23px;
  top: 7px;
  left: 19px;
  object-fit: cover;
`;

const Rectangle322 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 232px;
  height: 23px;
  top: 7px;
  left: 19px;
  background-color: var(--cameo);
`;

const Price2 = styled.div`
  ${AvenirHeavyNormalWhite11px}
  position: absolute;
  top: 18px;
  left: 130px;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const Group76 = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: flex-end;
  min-width: 366px;
`;

const OverlapGroup41 = styled.div`
  width: 366px;
  height: 76px;
  position: relative;
  margin-bottom: 0;
`;

const Group74 = styled.div`
  position: absolute;
  width: 364px;
  top: 3px;
  left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 73px;
`;

const OverlapGroup32 = styled.div`
  ${AvenirHeavyNormalSonicSilver5px}
  width: 365px;
  height: 66px;
  position: relative;
  margin-right: -0.5px;
`;

const OverlapGroup22 = styled.div`
  position: absolute;
  width: 365px;
  height: 64px;
  top: 2px;
  left: 0;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 354px;
  height: 44px;
  top: 21px;
  left: 11px;
`;

const Rectangle313 = styled.img`
  position: absolute;
  width: 347px;
  height: 37px;
  top: 0;
  left: 6px;
  object-fit: cover;
`;

const Rectangle323 = styled.img`
  position: absolute;
  width: 232px;
  height: 37px;
  top: 0;
  left: 6px;
  object-fit: cover;
`;

const Rectangle33 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 77px;
  height: 37px;
  top: 0;
  left: 87px;
  background-color: var(--bizarre);
  border-radius: 10px;
`;

const IconGift = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 5px;
  left: 0;
  object-fit: cover;
`;

const Rectangle34 = styled.img`
  position: absolute;
  width: 342px;
  height: 7px;
  top: 36px;
  left: 12px;
  object-fit: cover;
`;

const Rectangle35 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 227px;
  height: 7px;
  top: 36px;
  left: 12px;
  background-color: var(--cameo);
`;

const Group77 = styled.div`
  position: absolute;
  height: 49px;
  top: 14px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 331px;
`;

const OverlapGroup13 = styled.div`
  width: 283px;
  height: 49px;
  position: relative;
  margin-top: 0;
`;

const Rectangle314 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 266px;
  height: 37px;
  top: 7px;
  left: 17px;
  background-color: var(--white);
`;

const Rectangle324 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 171px;
  height: 37px;
  top: 7px;
  left: 17px;
  background-color: var(--bizarre);
`;

const Rectangle331 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 84px;
  height: 37px;
  top: 7px;
  left: 113px;
  background-color: var(--bizarre);
`;

const Path641 = styled.img`
  position: absolute;
  width: 49px;
  height: 49px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const IconGift1 = styled.img`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 12px;
  left: 11px;
  object-fit: cover;
`;

const X20bonusPoints = styled.div`
  ${AvenirHeavyNormalWhite4px}
  position: absolute;
  top: 18px;
  left: 61px;
  text-align: center;
  letter-spacing: 0;
  line-height: 5px;
  white-space: nowrap;
`;

const X30bonusPoints = styled.div`
  ${AvenirHeavyNormalWhite4px}
  position: absolute;
  top: 18px;
  left: 136px;
  text-align: center;
  letter-spacing: 0;
  line-height: 5px;
  white-space: nowrap;
`;

const X50bonusPoints = styled.div`
  ${AvenirHeavyNormalPaleSky4px}
  position: absolute;
  top: 18px;
  left: 223px;
  text-align: center;
  letter-spacing: 0;
  line-height: 5px;
  white-space: nowrap;
`;

const X75bonusPointsGifts = styled.div`
  ${AvenirHeavyNormalPaleSky4px}
  min-height: 17px;
  align-self: center;
  margin-left: 22px;
  margin-bottom: 6.98px;
  min-width: 26px;
  text-align: center;
  letter-spacing: 0;
  line-height: 5px;
  white-space: nowrap;
`;

const X9MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver5px}
  position: absolute;
  top: 0;
  left: 264px;
  text-align: center;
  letter-spacing: 0;
  line-height: 6px;
  white-space: nowrap;
`;

const X6MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver5px}
  position: absolute;
  top: 0;
  left: 178px;
  text-align: center;
  letter-spacing: 0;
  line-height: 6px;
  white-space: nowrap;
`;

const X12MONTHS = styled.div`
  position: absolute;
  top: 2px;
  left: 331px;
  text-align: center;
  letter-spacing: 0;
  line-height: 6px;
  white-space: nowrap;
`;

const X3MONTHS = styled.div`
  position: absolute;
  top: 0;
  left: 96px;
  text-align: center;
  letter-spacing: 0;
  line-height: 6px;
  white-space: nowrap;
`;

const Address2 = styled.p`
  ${AvenirBookNormalSonicSilver4px}
  min-height: 7px;
  margin-top: 2px;
  margin-right: 21px;
  min-width: 58px;
  text-align: right;
  letter-spacing: 0;
  line-height: 4px;
  white-space: nowrap;
`;

const MarketingAd2 = styled.div`
  height: 200px;
  margin-top: 21px;
  margin-left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 382px;
`;

const OverlapGroup51 = styled.div`
  height: 224px;
  margin-left: -12px;
  margin-top: -7.93px;
  display: flex;
  padding: 7.9px 12px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 406px;
  background-size: cover;
  background-position: 50% 50%;
`;

const GroupContainer1 = styled.div`
  width: 153px;
  align-self: center;
  margin-bottom: 12.34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 169px;
`;

const OverlapGroup14 = styled.div`
  width: 152px;
  height: 98px;
  position: relative;
  margin-left: 1px;
`;

const JustIn = styled.div`
  ${Bodoni72BoldEerieBlack32px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 34px;
  white-space: nowrap;
`;

const Ongoing = styled.div`
  ${AvenirBookNormalBlack12px}
  position: absolute;
  width: 152px;
  height: 61px;
  top: 36px;
  left: 0;
  letter-spacing: 0;
  line-height: 12px;
`;

const Group25 = styled.div`
  height: 33px;
  margin-top: 38px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 152px;
  cursor: pointer;
`;

const OverlapGroup9 = styled.div`
  height: 153px;
  margin-top: -44.24px;
  display: flex;
  padding: 32.7px 100.2px;
  align-items: flex-start;
  min-width: 272px;
  background-size: cover;
  background-position: 50% 50%;
`;

const EXPLORE = styled.div`
  ${AvenirBookNormalWhite15px}
  min-height: 22px;
  min-width: 68px;
  text-align: center;
  letter-spacing: 0.09px;
  line-height: 57px;
  white-space: nowrap;
`;

const SLEEPANGLE = styled.img`
  width: 128px;
  height: 200px;
  margin-left: 81px;
  object-fit: cover;
`;

const MarketingAd21 = styled.div`
  height: 199px;
  margin-top: 18px;
  margin-left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 382px;
`;

const OverlapGroup61 = styled.div`
  height: 223px;
  margin-left: -12px;
  margin-top: -8px;
  display: flex;
  padding: 8.6px 12px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 406px;
  background-size: cover;
  background-position: 50% 50%;
`;

const GroupContainer2 = styled.div`
  width: 178px;
  align-self: center;
  margin-top: 13.14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 142px;
`;

const OverlapGroup15 = styled.div`
  width: 178px;
  height: 91px;
  position: relative;
`;

const Ongoing1 = styled.p`
  ${AvenirBookNormalBlack12px}
  position: absolute;
  width: 178px;
  height: 61px;
  top: 30px;
  left: 0;
  letter-spacing: 0;
  line-height: 12px;
`;

const Group111 = styled.div`
  height: 33px;
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 152px;
  cursor: pointer;
`;

const OverlapGroup10 = styled.div`
  height: 153px;
  margin-top: -44.24px;
  display: flex;
  padding: 32.7px 94.2px;
  align-items: flex-start;
  min-width: 272px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SUBSCRIBE = styled.div`
  ${AvenirBookNormalWhite15px}
  min-height: 22px;
  min-width: 80px;
  text-align: center;
  letter-spacing: 0.09px;
  line-height: 57px;
  white-space: nowrap;
`;

const SLEEPANGLE1 = styled.img`
  width: 128px;
  height: 199px;
  margin-left: 60px;
  object-fit: cover;
`;

export default MobileDashboard;
