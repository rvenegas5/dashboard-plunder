import React from "react";
import styled from "styled-components";
import {
  AvenirHeavyNormalWhite14px,
  AvenirHeavyNormalWhite24px,
  AvenirHeavyNormalEerieBlack20px,
  AvenirHeavyNormalPaleSky14px,
  AvenirHeavyNormalSonicSilver16px,
  Border1pxDoveGray,
  AvenirHeavyNormalSonicSilver14px,
  AvenirBookNormalSonicSilver14px,
  Border2pxDoveGray,
} from "../../styledMixins";


function Group88() {
  return (
    <Group881>
      <Group78>
        <Group72>
          <OverlapGroup1>
            <OverlapGroup>
              <Rectangle31 src="/img/rectangle-31-1@1x.png" />
              <Rectangle32></Rectangle32>
              <Path64 src="/img/path-64@1x.png" />
              <IconStar src="/img/path-65@1x.png" />
            </OverlapGroup>
            <Price>$175</Price>
            <Price1>$200</Price1>
            <X25AwayFrom10BonusPoints>$25 away from 10 bonus points</X25AwayFrom10BonusPoints>
          </OverlapGroup1>
          <ActivityLogs>10 bonus points</ActivityLogs>
        </Group72>
        <Group73>
          <OverlapGroup1>
            <OverlapGroup>
              <Rectangle31 src="/img/rectangle-31-1@1x.png" />
              <Rectangle321></Rectangle321>
              <Path64 src="/img/path-64-1@1x.png" />
              <IconLabel src="/img/path-66@1x.png" />
            </OverlapGroup>
            <Price>$175</Price>
            <Price1>$200</Price1>
            <X25AwayFrom10BonusPoints>$25 away from 10 bonus points</X25AwayFrom10BonusPoints>
          </OverlapGroup1>
          <ActivityLogs>50% off an item</ActivityLogs>
        </Group73>
        <Group75>
          <OverlapGroup3>
            <ActivityLogs>shop for an exclusive item</ActivityLogs>
            <OverlapGroup11>
              <OverlapGroup2>
                <Rectangle31 src="/img/rectangle-31-1@1x.png" />
                <Rectangle322></Rectangle322>
                <Path64 src="/img/path-64-2@1x.png" />
                <IconHeart src="/img/path-67@1x.png" />
              </OverlapGroup2>
              <Price2>$175</Price2>
              <Price1>$200</Price1>
              <X25AwayFrom10BonusPoints1>$25 away from 10 bonus points</X25AwayFrom10BonusPoints1>
            </OverlapGroup11>
          </OverlapGroup3>
        </Group75>
        <Group76>
          <OverlapGroup4>
            <ActivityLogs>posse box</ActivityLogs>
            <Group74>
              <OverlapGroup21>
                <OverlapGroup5>
                  <Rectangle311 src="/img/rectangle-31-3@1x.png" />
                  <Rectangle323 src="/img/rectangle-32@1x.png" />
                  <Rectangle33></Rectangle33>
                  <IconGift src="/img/path-68@1x.png" />
                  <Rectangle34 src="/img/rectangle-34@1x.png" />
                  <Rectangle35></Rectangle35>
                </OverlapGroup5>
                <X12MONTHS>
                  12
                  <br />
                  MONTHS
                </X12MONTHS>
                <Group77>
                  <OverlapGroup12>
                    <Rectangle312></Rectangle312>
                    <Rectangle324></Rectangle324>
                    <Rectangle331></Rectangle331>
                    <Path641 src="/img/path-64-3@1x.png" />
                    <IconGift1 src="/img/path-68-1@1x.png" />
                    <X20bonusPoints>
                      20
                      <br />
                      bonus points
                    </X20bonusPoints>
                    <X30bonusPoints>
                      30
                      <br />
                      bonus points
                    </X30bonusPoints>
                    <X50bonusPoints>
                      50
                      <br />
                      bonus points
                    </X50bonusPoints>
                  </OverlapGroup12>
                  <X75bonusPointsGifts>
                    75
                    <br />
                    bonus points
                    <br />+ gifts
                  </X75bonusPointsGifts>
                </Group77>
                <X9MONTHS>
                  9<br />
                  MONTHS
                </X9MONTHS>
                <X6MONTHS>
                  6<br />
                  MONTHS
                </X6MONTHS>
                <X3MONTHS>
                  3<br />
                  MONTHS
                </X3MONTHS>
              </OverlapGroup21>
              <Address>8 consecutive months on posse</Address>
            </Group74>
          </OverlapGroup4>
        </Group76>
      </Group78>
    </Group881>
  );
}

const Group881 = styled.div`
  position: absolute;
  width: 695px;
  height: 549px;
  top: 856px;
  left: 394px;
  display: flex;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px #0000000d;
`;

const Group78 = styled.div`
  margin-top: 13px;
  margin-left: 13px;
  margin-right: 14px;
  flex: 1;
  margin-bottom: 7px;
  width: 668px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100% - 20px);
`;

const Group72 = styled.div`
  width: 670px;
  height: 116px;
  position: relative;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 670px;
  height: 92px;
  top: 29px;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 667px;
  height: 70px;
  top: 8px;
  left: 0;
`;

const Rectangle31 = styled.img`
  position: absolute;
  width: 633px;
  height: 41px;
  top: 14px;
  left: 34px;
  object-fit: cover;
`;

const Rectangle32 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 423px;
  height: 41px;
  top: 14px;
  left: 34px;
  background-color: var(--geyser);
`;

const Path64 = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const IconStar = styled.img`
  position: absolute;
  width: 48px;
  height: 45px;
  top: 12px;
  left: 11px;
  object-fit: cover;
`;

const Price = styled.div`
  ${AvenirHeavyNormalWhite24px}
  position: absolute;
  top: 30px;
  left: 236px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Price1 = styled.div`
  ${AvenirHeavyNormalSonicSilver16px}
  position: absolute;
  top: 0;
  left: 630px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X25AwayFrom10BonusPoints = styled.p`
  ${AvenirBookNormalSonicSilver14px}
  position: absolute;
  top: 70px;
  left: 467px;
  text-align: right;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const ActivityLogs = styled.div`
  ${AvenirHeavyNormalEerieBlack20px}
  position: absolute;
  width: 320px;
  height: 31px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const Group73 = styled.div`
  width: 670px;
  height: 116px;
  position: relative;
  margin-top: 10px;
`;

const Rectangle321 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 423px;
  height: 41px;
  top: 14px;
  left: 34px;
  background-color: var(--surf-crest);
`;

const IconLabel = styled.img`
  position: absolute;
  width: 40px;
  height: 39px;
  top: 16px;
  left: 14px;
  object-fit: cover;
`;

const Group75 = styled.div`
  height: 116px;
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
  min-width: 668px;
`;

const OverlapGroup3 = styled.div`
  width: 670px;
  height: 120px;
  position: relative;
  margin-bottom: -4.5px;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 670px;
  height: 92px;
  top: 28px;
  left: 0;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 667px;
  height: 70px;
  top: 9px;
  left: 0;
`;

const Rectangle322 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 423px;
  height: 41px;
  top: 14px;
  left: 34px;
  background-color: var(--cameo);
`;

const IconHeart = styled.img`
  position: absolute;
  width: 40px;
  height: 38px;
  top: 16px;
  left: 15px;
  object-fit: cover;
`;

const Price2 = styled.div`
  ${AvenirHeavyNormalWhite24px}
  position: absolute;
  top: 32px;
  left: 236px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const X25AwayFrom10BonusPoints1 = styled.p`
  ${AvenirBookNormalSonicSilver14px}
  position: absolute;
  top: 72px;
  left: 467px;
  text-align: right;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Group76 = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: flex-start;
  min-width: 667px;
`;

const OverlapGroup4 = styled.div`
  width: 669px;
  height: 148px;
  position: relative;
`;

const Group74 = styled.div`
  position: absolute;
  width: 666px;
  top: 6px;
  left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 142px;
`;

const OverlapGroup21 = styled.div`
  width: 666px;
  height: 117px;
  position: relative;
  margin-top: 2px;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 644px;
  height: 80px;
  top: 37px;
  left: 20px;
`;

const Rectangle311 = styled.img`
  position: absolute;
  width: 633px;
  height: 69px;
  top: 0;
  left: 11px;
  object-fit: cover;
`;

const Rectangle323 = styled.img`
  position: absolute;
  width: 423px;
  height: 69px;
  top: 0;
  left: 11px;
  object-fit: cover;
`;

const Rectangle33 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 138px;
  height: 69px;
  top: 0;
  left: 160px;
  background-color: var(--bizarre);
  border-radius: 10px;
`;

const IconGift = styled.img`
  position: absolute;
  width: 47px;
  height: 47px;
  top: 11px;
  left: 0;
  object-fit: cover;
`;

const Rectangle34 = styled.img`
  position: absolute;
  width: 623px;
  height: 11px;
  top: 68px;
  left: 21px;
  object-fit: cover;
`;

const Rectangle35 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 413px;
  height: 11px;
  top: 68px;
  left: 21px;
  background-color: var(--cameo);
`;

const X12MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver14px}
  position: absolute;
  top: 1px;
  left: 602px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Group77 = styled.div`
  position: absolute;
  height: 90px;
  top: 27px;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 634px;
`;

const OverlapGroup12 = styled.div`
  width: 516px;
  height: 90px;
  position: relative;
`;

const Rectangle312 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 485px;
  height: 69px;
  top: 10px;
  left: 31px;
  background-color: var(--white);
`;

const Rectangle324 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 314px;
  height: 69px;
  top: 10px;
  left: 31px;
  background-color: var(--bizarre);
`;

const Rectangle331 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 155px;
  height: 69px;
  top: 10px;
  left: 206px;
  background-color: var(--bizarre);
`;

const Path641 = styled.img`
  position: absolute;
  width: 90px;
  height: 90px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const IconGift1 = styled.img`
  position: absolute;
  width: 47px;
  height: 47px;
  top: 22px;
  left: 20px;
  object-fit: cover;
`;

const X20bonusPoints = styled.div`
  ${AvenirHeavyNormalWhite14px}
  position: absolute;
  top: 29px;
  left: 103px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X30bonusPoints = styled.div`
  ${AvenirHeavyNormalWhite14px}
  position: absolute;
  top: 29px;
  left: 242px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X50bonusPoints = styled.div`
  ${AvenirHeavyNormalPaleSky14px}
  position: absolute;
  top: 29px;
  left: 398px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X75bonusPointsGifts = styled.div`
  ${AvenirHeavyNormalPaleSky14px}
  min-height: 53px;
  margin-left: 32px;
  margin-top: 4.76px;
  min-width: 86px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X9MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver14px}
  position: absolute;
  top: 1px;
  left: 482px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X6MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver14px}
  position: absolute;
  top: 1px;
  left: 328px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X3MONTHS = styled.div`
  ${AvenirHeavyNormalSonicSilver14px}
  position: absolute;
  top: 0;
  left: 176px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Address = styled.p`
  ${AvenirBookNormalSonicSilver14px}
  min-height: 21px;
  margin-top: 7px;
  min-width: 198px;
  text-align: right;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Group882 = styled.div`
  position: absolute;
  width: 695px;
  height: 549px;
  top: 856px;
  left: 394px;
  display: flex;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px #0000000d;
`;

const Group781 = styled.div`
  margin-top: 13px;
  margin-left: 13px;
  margin-right: 14px;
  flex: 1;
  margin-bottom: 7px;
  width: 668px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100% - 20px);
`;

const Group721 = styled.div`
  width: 670px;
  height: 116px;
  position: relative;
`;

const OverlapGroup13 = styled.div`
  position: absolute;
  width: 670px;
  height: 92px;
  top: 29px;
  left: 0;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  width: 667px;
  height: 70px;
  top: 8px;
  left: 0;
`;

const Rectangle313 = styled.img`
  position: absolute;
  width: 633px;
  height: 41px;
  top: 14px;
  left: 34px;
  object-fit: cover;
`;

const Rectangle325 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 423px;
  height: 41px;
  top: 14px;
  left: 34px;
  background-color: var(--geyser);
`;

const Path642 = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Path65 = styled.img`
  position: absolute;
  width: 48px;
  height: 45px;
  top: 12px;
  left: 11px;
  object-fit: cover;
`;

const Price3 = styled.div`
  ${AvenirHeavyNormalWhite24px}
  position: absolute;
  top: 30px;
  left: 236px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Price4 = styled.div`
  ${AvenirHeavyNormalSonicSilver16px}
  position: absolute;
  top: 0;
  left: 630px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X25AwayFrom10BonusPoints2 = styled.p`
  ${AvenirBookNormalSonicSilver14px}
  position: absolute;
  top: 70px;
  left: 467px;
  text-align: right;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const ActivityLogs1 = styled.div`
  ${AvenirHeavyNormalEerieBlack20px}
  position: absolute;
  width: 320px;
  height: 31px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 20px;
`;

const Group731 = styled.div`
  width: 670px;
  height: 116px;
  position: relative;
  margin-top: 10px;
`;

const Rectangle326 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 423px;
  height: 41px;
  top: 14px;
  left: 34px;
  background-color: var(--surf-crest);
`;

const Path66 = styled.img`
  position: absolute;
  width: 40px;
  height: 39px;
  top: 16px;
  left: 14px;
  object-fit: cover;
`;

const Group751 = styled.div`
  height: 116px;
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
  min-width: 668px;
`;

const OverlapGroup31 = styled.div`
  width: 670px;
  height: 120px;
  position: relative;
  margin-bottom: -4.5px;
`;

const OverlapGroup14 = styled.div`
  position: absolute;
  width: 670px;
  height: 92px;
  top: 28px;
  left: 0;
`;

const OverlapGroup7 = styled.div`
  position: absolute;
  width: 667px;
  height: 70px;
  top: 9px;
  left: 0;
`;

const Rectangle327 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 423px;
  height: 41px;
  top: 14px;
  left: 34px;
  background-color: var(--cameo);
`;

const Path67 = styled.img`
  position: absolute;
  width: 40px;
  height: 38px;
  top: 16px;
  left: 15px;
  object-fit: cover;
`;

const Price5 = styled.div`
  ${AvenirHeavyNormalWhite24px}
  position: absolute;
  top: 32px;
  left: 236px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const X25AwayFrom10BonusPoints3 = styled.p`
  ${AvenirBookNormalSonicSilver14px}
  position: absolute;
  top: 72px;
  left: 467px;
  text-align: right;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const Group761 = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: flex-start;
  min-width: 667px;
`;

const OverlapGroup41 = styled.div`
  width: 669px;
  height: 148px;
  position: relative;
`;

const Group741 = styled.div`
  position: absolute;
  width: 666px;
  top: 6px;
  left: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 142px;
`;

const OverlapGroup22 = styled.div`
  width: 666px;
  height: 117px;
  position: relative;
  margin-top: 2px;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 644px;
  height: 80px;
  top: 37px;
  left: 20px;
`;

const Rectangle314 = styled.img`
  position: absolute;
  width: 633px;
  height: 69px;
  top: 0;
  left: 11px;
  object-fit: cover;
`;

const Rectangle328 = styled.img`
  position: absolute;
  width: 423px;
  height: 69px;
  top: 0;
  left: 11px;
  object-fit: cover;
`;

const Rectangle332 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 138px;
  height: 69px;
  top: 0;
  left: 160px;
  background-color: var(--bizarre);
  border-radius: 10px;
`;

const Path68 = styled.img`
  position: absolute;
  width: 47px;
  height: 47px;
  top: 11px;
  left: 0;
  object-fit: cover;
`;

const Rectangle341 = styled.img`
  position: absolute;
  width: 623px;
  height: 11px;
  top: 68px;
  left: 21px;
  object-fit: cover;
`;

const Rectangle351 = styled.div`
  ${Border1pxDoveGray}
  position: absolute;
  width: 413px;
  height: 11px;
  top: 68px;
  left: 21px;
  background-color: var(--cameo);
`;

const X12MONTHS1 = styled.div`
  ${AvenirHeavyNormalSonicSilver14px}
  position: absolute;
  top: 1px;
  left: 602px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Group771 = styled.div`
  position: absolute;
  height: 90px;
  top: 27px;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 634px;
`;

const OverlapGroup15 = styled.div`
  width: 516px;
  height: 90px;
  position: relative;
`;

const Rectangle315 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 485px;
  height: 69px;
  top: 10px;
  left: 31px;
  background-color: var(--white);
`;

const Rectangle329 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 314px;
  height: 69px;
  top: 10px;
  left: 31px;
  background-color: var(--bizarre);
`;

const Rectangle333 = styled.div`
  ${Border2pxDoveGray}
  position: absolute;
  width: 155px;
  height: 69px;
  top: 10px;
  left: 206px;
  background-color: var(--bizarre);
`;

const Path643 = styled.img`
  position: absolute;
  width: 90px;
  height: 90px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Path681 = styled.img`
  position: absolute;
  width: 47px;
  height: 47px;
  top: 22px;
  left: 20px;
  object-fit: cover;
`;

const X20bonusPoints1 = styled.div`
  ${AvenirHeavyNormalWhite14px}
  position: absolute;
  top: 29px;
  left: 103px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X30bonusPoints1 = styled.div`
  ${AvenirHeavyNormalWhite14px}
  position: absolute;
  top: 29px;
  left: 242px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X50bonusPoints1 = styled.div`
  ${AvenirHeavyNormalPaleSky14px}
  position: absolute;
  top: 29px;
  left: 398px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X75bonusPointsGifts1 = styled.div`
  ${AvenirHeavyNormalPaleSky14px}
  min-height: 53px;
  margin-left: 32px;
  margin-top: 4.76px;
  min-width: 86px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X9MONTHS1 = styled.div`
  ${AvenirHeavyNormalSonicSilver14px}
  position: absolute;
  top: 1px;
  left: 482px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X6MONTHS1 = styled.div`
  ${AvenirHeavyNormalSonicSilver14px}
  position: absolute;
  top: 1px;
  left: 328px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X3MONTHS1 = styled.div`
  ${AvenirHeavyNormalSonicSilver14px}
  position: absolute;
  top: 0;
  left: 176px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Address1 = styled.p`
  ${AvenirBookNormalSonicSilver14px}
  min-height: 21px;
  margin-top: 7px;
  min-width: 198px;
  text-align: right;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

export default Group88;
