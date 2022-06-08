import React from "react";
import ButtonWithdrawAllEarning2 from "../ButtonWithdrawAllEarning2";
import Group68 from "../Group68";
import Group103 from "../Group103";
import Group98 from "../Group98";
import DueDate from "../DueDate";
import Date from "../Date";
import styled from "styled-components";
import {
  ManropeExtraBoldGeyser10px,
  Bodoni72BoldBlack60px,
  AvenirMediumBlack19px,
  Bodoni72BoldBlack72px,
  AvenirBlackEerieBlack24px,
  AvenirHeavyNormalWhite32px,
  AvenirBookNormalLogCabin20px,
  Border05pxDoveGray,
  AvenirHeavyNormalEerieBlack20px,
  ManropeNormalQuickSilver10px,
  MontserratMediumQuickSilver16px,
  AvenirBookNormalBlack20px,
  AvenirBlackEerieBlack16px,
  AvenirMediumCodGray18px,
  MontserratNormalQuickSilver15px,
  AvenirBookNormalQuickSilver18px,
} from "../../styledMixins";


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
    <CONTENT1>
      <FlexCol>
        <FlexRow>
          <Welcome>
            Hello ${"{"}first_name{"}"}, welcome back!
          </Welcome>
          <OverlapGroup5>
            <Group89>
              <Plunderdesigncomxxxxxxx>plunderdesign.com/xxxxxxx</Plunderdesigncomxxxxxxx>
            </Group89>
            <X01>
              <Dashboard>COPY LINK</Dashboard>
            </X01>
          </OverlapGroup5>
        </FlexRow>
        <OverlapGroup7>
          <Rectangle29 src="/img/rectangle-29@1x.png" />
          <ActivityLogs>points &amp; rewards balance</ActivityLogs>
        </OverlapGroup7>
        <FlexRow1>
          <CardRewards>
            <EarningReport>
              <TextEarningThisMonth>
                <AvailablePoints>available points</AvailablePoints>
                <OverlapGroup>
                  <Number>68</Number>
                  <ButtonWithdrawAllEarning2 />
                </OverlapGroup>
              </TextEarningThisMonth>
            </EarningReport>
          </CardRewards>
          <OverlapGroup1>
            <ShareLink>
              <TextEarningThisMonth1>
                <Group1>
                  <Available50OffCoupons>available 50% off coupons</Available50OffCoupons>
                </Group1>
              </TextEarningThisMonth1>
            </ShareLink>
            <GroupContainer>
              <Group68 />
              <Group68 className={group681Props.className} />
              <Group68 className={group682Props.className} />
            </GroupContainer>
          </OverlapGroup1>
          <OverlapGroup2>
            <ShareLink1>
              <TextEarningThisMonth2>
                <Group11>
                  <ExclusiveItemAccess>exclusive item access</ExclusiveItemAccess>
                  <OverlapGroup3>
                    <Number1>4</Number1>
                  </OverlapGroup3>
                </Group11>
              </TextEarningThisMonth2>
            </ShareLink1>
            <ButtonWithdrawAllEarning2 className={buttonWithdrawAllEarning2Props.className} />
          </OverlapGroup2>
        </FlexRow1>
        <OverlapGroup6>
          <ActivityLogs1>bonus points &amp; rewards progress</ActivityLogs1>
        </OverlapGroup6>
      </FlexCol>
      <Rightbar>
        <EarningReport1>
          <TextEarningThisMonth3>
            <Address>6 month order total</Address>
            <OverlapGroup4>
              <Number2>655</Number2>
              <Address1>05 May 2022 at 11:00 PM</Address1>
            </OverlapGroup4>
          </TextEarningThisMonth3>
        </EarningReport1>
        <Schedule>
          <Title>
            <Schedule1>Recent Activity</Schedule1>
            <ThursdayJanuary10th2022>Thursday, May 5th, 2022</ThursdayJanuary10th2022>
          </Title>
        </Schedule>
        <Group103 dateProps={group1031Props.dateProps} />
        <X3>
          <Group98 />
          <OverlapGroup21>
            <DueDate />
            <Group97>
              <OverlapGroup8>
                <MeetingWithClient>Pam Gould</MeetingWithClient>
                <Date1>
                  <Calendar></Calendar>
                  <Date2>January 17, 2021</Date2>
                </Date1>
              </OverlapGroup8>
              <X10001100>Customer Purchase $44</X10001100>
            </Group97>
          </OverlapGroup21>
        </X3>
        <Group103 className={group1032Props.className} dateProps={group1032Props.dateProps} />
        <X3>
          <Group98 className={group98Props.className} />
          <OverlapGroup41>
            <DueDate />
            <Group971>
              <OverlapGroup9>
                <MeetingWithClient>Pam Gould</MeetingWithClient>
                <Date className={dateProps.className} />
              </OverlapGroup9>
              <X100011001>Customer Purchase $44</X100011001>
            </Group971>
          </OverlapGroup41>
        </X3>
      </Rightbar>
    </CONTENT1>
  );
}

const CONTENT1 = styled.div`
  position: absolute;
  height: 1312px;
  top: 120px;
  left: 395px;
  display: flex;
  align-items: flex-start;
  min-width: 1525px;
`;

const FlexCol = styled.div`
  width: 1067px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 687px;
`;

const FlexRow = styled.div`
  align-self: center;
  margin-right: 0.38px;
  display: flex;
  align-items: flex-start;
  min-width: 1043px;
`;

const Welcome = styled.div`
  ${AvenirBookNormalQuickSilver18px}
  width: 304px;
  height: 27px;
  letter-spacing: 0;
  line-height: 18px;
`;

const OverlapGroup5 = styled.div`
  width: 406px;
  height: 44px;
  position: relative;
  margin-left: 333px;
  border-radius: 5px;
`;

const Group89 = styled.div`
  ${Border05pxDoveGray}
  position: absolute;
  height: 44px;
  top: 0;
  left: 0;
  display: flex;
  padding: 3px 16.3px;
  align-items: flex-start;
  min-width: 406px;
  background-color: var(--white);
  border-radius: 5px;
`;

const Plunderdesigncomxxxxxxx = styled.div`
  ${AvenirMediumBlack19px}
  min-height: 28px;
  min-width: 232px;
  text-align: center;
  letter-spacing: -0.47px;
  line-height: 35px;
  white-space: nowrap;
`;

const X01 = styled.div`
  position: absolute;
  height: 44px;
  top: 0;
  left: 271px;
  display: flex;
  padding: 8px 18px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 135px;
  background-color: var(--bizarre);
  border-radius: 5px;
`;

const Dashboard = styled.div`
  ${AvenirMediumCodGray18px}
  width: 98px;
  height: 25px;
  letter-spacing: 0;
  line-height: 18px;
`;

const OverlapGroup7 = styled.div`
  width: 1055px;
  height: 36px;
  position: relative;
  margin-top: 244px;
`;

const Rectangle29 = styled.img`
  position: absolute;
  width: 1055px;
  height: 35px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ActivityLogs = styled.div`
  ${AvenirHeavyNormalEerieBlack20px}
  position: absolute;
  width: 299px;
  height: 33px;
  top: 3px;
  left: 13px;
  letter-spacing: 0;
  line-height: 20px;
`;

const FlexRow1 = styled.div`
  height: 304px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  min-width: 1067px;
`;

const CardRewards = styled.div`
  height: 280px;
  margin-bottom: 8.33px;
  display: flex;
  padding: 41px 96px;
  align-items: flex-start;
  min-width: 333px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px #0000000d;
`;

const EarningReport = styled.div`
  width: 140px;
  height: 188px;
  display: flex;
`;

const TextEarningThisMonth = styled.div`
  margin-top: 0;
  flex: 1;
  width: 142px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const AvailablePoints = styled.div`
  ${AvenirBookNormalLogCabin20px}
  margin-top: -1px;
  min-height: 29px;
  min-width: 142px;
  text-align: center;
  letter-spacing: 0;
  line-height: 29px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  width: 110px;
  height: 122px;
  position: relative;
  margin-top: 38px;
  margin-right: 3.11px;
`;

const Number = styled.div`
  ${Bodoni72BoldBlack72px}
  position: absolute;
  top: 0;
  left: 15px;
  text-align: center;
  letter-spacing: 0;
  line-height: 31px;
  white-space: nowrap;
`;

const OverlapGroup1 = styled.div`
  width: 357px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 50px 35.9px;
  align-items: flex-start;
  min-height: 304px;
  background-image: url(/img/path-1-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const ShareLink = styled.div`
  width: 234px;
  height: 27px;
  align-self: center;
  margin-right: 2.62px;
  display: flex;
`;

const TextEarningThisMonth1 = styled.div`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  flex: 1;
  margin-bottom: 0;
  width: 234px;
  display: flex;
`;

const Group1 = styled.div`
  flex: 1;
  width: 236px;
  display: flex;
`;

const Available50OffCoupons = styled.div`
  ${AvenirBookNormalLogCabin20px}
  margin-top: -2px;
  margin-right: -2px;
  flex: 1;
  width: 236px;
  text-align: center;
  letter-spacing: 0;
  line-height: 31px;
  white-space: nowrap;
`;

const GroupContainer = styled.div`
  height: 127px;
  position: relative;
  margin-top: 41px;
  display: flex;
  align-items: flex-start;
  min-width: 284px;
`;

const OverlapGroup2 = styled.div`
  width: 357px;
  position: relative;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  padding: 50px 83.4px;
  align-items: flex-start;
  min-height: 304px;
  background-image: url(/img/path-1-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const ShareLink1 = styled.div`
  width: 188px;
  height: 140px;
  display: flex;
`;

const TextEarningThisMonth2 = styled.div`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  flex: 1;
  width: 188px;
  display: flex;
`;

const Group11 = styled.div`
  flex: 1;
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const ExclusiveItemAccess = styled.div`
  ${AvenirBookNormalLogCabin20px}
  margin-top: -2px;
  margin-bottom: -2px;
  min-height: 29px;
  min-width: 190px;
  text-align: center;
  letter-spacing: 0;
  line-height: 31px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  height: 94px;
  margin-top: 18px;
  margin-right: 2px;
  display: flex;
  padding: 22.7px 39.2px;
  align-items: flex-end;
  min-width: 99px;
  background-image: url(/img/path-58@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Number1 = styled.div`
  ${AvenirHeavyNormalWhite32px}
  min-height: 46px;
  min-width: 20px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const OverlapGroup6 = styled.div`
  height: 35px;
  margin-top: 15px;
  display: flex;
  padding: 2px 13px;
  align-items: flex-end;
  min-width: 1055px;
  background-image: url(/img/rectangle-29@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const ActivityLogs1 = styled.div`
  ${AvenirHeavyNormalEerieBlack20px}
  width: 400px;
  height: 29px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Rightbar = styled.div`
  width: 432px;
  position: relative;
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  padding: 40px 34px;
  align-items: flex-start;
  min-height: 1312px;
  background-color: var(--white);
`;

const EarningReport1 = styled.div`
  width: 180px;
  height: 140px;
  align-self: center;
  margin-right: 2.64px;
  display: flex;
`;

const TextEarningThisMonth3 = styled.div`
  flex: 1;
  width: 182px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 100%;
`;

const Address = styled.div`
  ${AvenirBookNormalBlack20px}
  margin-top: -16px;
  margin-bottom: -31px;
  min-height: 29px;
  margin-right: 4.09px;
  min-width: 172px;
  text-align: center;
  letter-spacing: -0.2px;
  line-height: 60px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 182px;
  height: 75px;
  position: relative;
  margin-top: 34px;
`;

const Number2 = styled.h1`
  ${Bodoni72BoldBlack60px}
  position: absolute;
  top: 0;
  left: 39px;
  text-align: center;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const Address1 = styled.p`
  ${MontserratNormalQuickSilver15px}
  position: absolute;
  top: 54px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const Schedule = styled.div`
  width: 220px;
  height: 73px;
  margin-top: 75px;
  margin-left: 6px;
  display: flex;
`;

const Title = styled.div`
  flex: 1;
  width: 222px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Schedule1 = styled.div`
  ${AvenirBlackEerieBlack24px}
  margin-right: 27px;
  flex: 1;
  max-height: 47px;
  height: 47px;
  letter-spacing: 0;
  line-height: 24px;
`;

const ThursdayJanuary10th2022 = styled.div`
  ${MontserratMediumQuickSilver16px}
  margin-right: -2px;
  flex: 1;
  max-height: 24px;
  margin-bottom: -2px;
  height: 24px;
  letter-spacing: 0;
  line-height: 16px;
`;

const X3 = styled.div`
  position: relative;
  margin-top: 11px;
  display: flex;
  align-items: flex-start;
  min-width: 341px;
`;

const OverlapGroup21 = styled.div`
  width: 274px;
  height: 70px;
  position: relative;
  margin-left: 15px;
  margin-top: 0;
`;

const Group97 = styled.div`
  position: absolute;
  width: 222px;
  height: 70px;
  top: 0;
  left: 0;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  width: 221px;
  height: 45px;
  top: 0;
  left: 0;
`;

const MeetingWithClient = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 221px;
  height: 35px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const Date1 = styled.div`
  position: absolute;
  width: 130px;
  height: 19px;
  top: 26px;
  left: 1px;
  display: flex;
  align-items: flex-end;
`;

const Calendar = styled.div`
  margin-bottom: 2.5px;
  width: 15.00732421875px;
  height: 13.5546875px;
  background-image: url(/img/vector-10@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Date2 = styled.div`
  ${ManropeNormalQuickSilver10px}
  margin-bottom: -2px;
  margin-left: 8px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 10px;
`;

const X10001100 = styled.div`
  ${ManropeExtraBoldGeyser10px}
  position: absolute;
  width: 220px;
  height: 27px;
  top: 45px;
  left: 2px;
  letter-spacing: 0;
  line-height: 10px;
`;

const OverlapGroup41 = styled.div`
  width: 274px;
  height: 69px;
  position: relative;
  margin-left: 15px;
  margin-top: 0;
`;

const Group971 = styled.div`
  position: absolute;
  width: 222px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 69px;
`;

const OverlapGroup9 = styled.div`
  width: 221px;
  height: 44px;
  position: relative;
`;

const X100011001 = styled.div`
  ${ManropeExtraBoldGeyser10px}
  width: 220px;
  height: 27px;
  margin-left: 2px;
  letter-spacing: 0;
  line-height: 10px;
`;

const CONTENT2 = styled.div`
  position: absolute;
  height: 1312px;
  top: 120px;
  left: 395px;
  display: flex;
  align-items: flex-start;
  min-width: 1525px;
`;

const FlexCol1 = styled.div`
  width: 1067px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 687px;
`;

const FlexRow2 = styled.div`
  align-self: center;
  margin-right: 0.38px;
  display: flex;
  align-items: flex-start;
  min-width: 1043px;
`;

const Welcome1 = styled.div`
  ${AvenirBookNormalQuickSilver18px}
  width: 304px;
  height: 27px;
  letter-spacing: 0;
  line-height: 18px;
`;

const OverlapGroup51 = styled.div`
  width: 406px;
  height: 44px;
  position: relative;
  margin-left: 333px;
  border-radius: 5px;
`;

const Group891 = styled.div`
  ${Border05pxDoveGray}
  position: absolute;
  height: 44px;
  top: 0;
  left: 0;
  display: flex;
  padding: 3px 16.3px;
  align-items: flex-start;
  min-width: 406px;
  background-color: var(--white);
  border-radius: 5px;
`;

const Plunderdesigncomxxxxxxx1 = styled.div`
  ${AvenirMediumBlack19px}
  min-height: 28px;
  min-width: 232px;
  text-align: center;
  letter-spacing: -0.47px;
  line-height: 35px;
  white-space: nowrap;
`;

const X011 = styled.div`
  position: absolute;
  height: 44px;
  top: 0;
  left: 271px;
  display: flex;
  padding: 8px 18px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 135px;
  background-color: var(--bizarre);
  border-radius: 5px;
`;

const Dashboard1 = styled.div`
  ${AvenirMediumCodGray18px}
  width: 98px;
  height: 25px;
  letter-spacing: 0;
  line-height: 18px;
`;

const OverlapGroup71 = styled.div`
  width: 1055px;
  height: 36px;
  position: relative;
  margin-top: 244px;
`;

const Rectangle291 = styled.img`
  position: absolute;
  width: 1055px;
  height: 35px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ActivityLogs2 = styled.div`
  ${AvenirHeavyNormalEerieBlack20px}
  position: absolute;
  width: 299px;
  height: 33px;
  top: 3px;
  left: 13px;
  letter-spacing: 0;
  line-height: 20px;
`;

const FlexRow3 = styled.div`
  height: 304px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  min-width: 1067px;
`;

const CardRewards1 = styled.div`
  height: 280px;
  margin-bottom: 8.33px;
  display: flex;
  padding: 41px 96px;
  align-items: flex-start;
  min-width: 333px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 4px 8px #0000000d;
`;

const EarningReport2 = styled.div`
  width: 140px;
  height: 188px;
  display: flex;
`;

const TextEarningThisMonth4 = styled.div`
  margin-top: 0;
  flex: 1;
  width: 142px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const AvailablePoints1 = styled.div`
  ${AvenirBookNormalLogCabin20px}
  margin-top: -1px;
  min-height: 29px;
  min-width: 142px;
  text-align: center;
  letter-spacing: 0;
  line-height: 29px;
  white-space: nowrap;
`;

const OverlapGroup10 = styled.div`
  width: 110px;
  height: 122px;
  position: relative;
  margin-top: 38px;
  margin-right: 3.11px;
`;

const Number3 = styled.div`
  ${Bodoni72BoldBlack72px}
  position: absolute;
  top: 0;
  left: 15px;
  text-align: center;
  letter-spacing: 0;
  line-height: 31px;
  white-space: nowrap;
`;

const OverlapGroup11 = styled.div`
  width: 357px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 50px 35.9px;
  align-items: flex-start;
  min-height: 304px;
  background-image: url(/img/path-1-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const ShareLink2 = styled.div`
  width: 234px;
  height: 27px;
  align-self: center;
  margin-right: 2.62px;
  display: flex;
`;

const TextEarningThisMonth5 = styled.div`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  flex: 1;
  margin-bottom: 0;
  width: 234px;
  display: flex;
`;

const Group12 = styled.div`
  flex: 1;
  width: 236px;
  display: flex;
`;

const Available50OffCoupons1 = styled.div`
  ${AvenirBookNormalLogCabin20px}
  margin-top: -2px;
  margin-right: -2px;
  flex: 1;
  width: 236px;
  text-align: center;
  letter-spacing: 0;
  line-height: 31px;
  white-space: nowrap;
`;

const GroupContainer1 = styled.div`
  height: 127px;
  position: relative;
  margin-top: 41px;
  display: flex;
  align-items: flex-start;
  min-width: 284px;
`;

const OverlapGroup22 = styled.div`
  width: 357px;
  position: relative;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  padding: 50px 83.4px;
  align-items: flex-start;
  min-height: 304px;
  background-image: url(/img/path-1-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const ShareLink3 = styled.div`
  width: 188px;
  height: 140px;
  display: flex;
`;

const TextEarningThisMonth6 = styled.div`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  flex: 1;
  width: 188px;
  display: flex;
`;

const Group13 = styled.div`
  flex: 1;
  width: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

const ExclusiveItemAccess1 = styled.div`
  ${AvenirBookNormalLogCabin20px}
  margin-top: -2px;
  margin-bottom: -2px;
  min-height: 29px;
  min-width: 190px;
  text-align: center;
  letter-spacing: 0;
  line-height: 31px;
  white-space: nowrap;
`;

const OverlapGroup12 = styled.div`
  height: 94px;
  margin-top: 18px;
  margin-right: 2px;
  display: flex;
  padding: 22.7px 39.2px;
  align-items: flex-end;
  min-width: 99px;
  background-image: url(/img/path-58@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Number4 = styled.div`
  ${AvenirHeavyNormalWhite32px}
  min-height: 46px;
  min-width: 20px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const OverlapGroup61 = styled.div`
  height: 35px;
  margin-top: 15px;
  display: flex;
  padding: 2px 13px;
  align-items: flex-end;
  min-width: 1055px;
  background-image: url(/img/rectangle-29@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const ActivityLogs3 = styled.div`
  ${AvenirHeavyNormalEerieBlack20px}
  width: 400px;
  height: 29px;
  letter-spacing: 0;
  line-height: 20px;
`;

const Rightbar1 = styled.div`
  width: 432px;
  position: relative;
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  padding: 40px 34px;
  align-items: flex-start;
  min-height: 1312px;
  background-color: var(--white);
`;

const EarningReport3 = styled.div`
  width: 180px;
  height: 140px;
  align-self: center;
  margin-right: 2.64px;
  display: flex;
`;

const TextEarningThisMonth7 = styled.div`
  flex: 1;
  width: 182px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 100%;
`;

const Address2 = styled.div`
  ${AvenirBookNormalBlack20px}
  margin-top: -16px;
  margin-bottom: -31px;
  min-height: 29px;
  margin-right: 4.09px;
  min-width: 172px;
  text-align: center;
  letter-spacing: -0.2px;
  line-height: 60px;
  white-space: nowrap;
`;

const OverlapGroup13 = styled.div`
  width: 182px;
  height: 75px;
  position: relative;
  margin-top: 34px;
`;

const Number5 = styled.div`
  ${Bodoni72BoldBlack60px}
  position: absolute;
  top: 0;
  left: 39px;
  text-align: center;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const Address3 = styled.p`
  ${MontserratNormalQuickSilver15px}
  position: absolute;
  top: 54px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const Schedule2 = styled.div`
  width: 220px;
  height: 73px;
  margin-top: 75px;
  margin-left: 6px;
  display: flex;
`;

const Title1 = styled.div`
  flex: 1;
  width: 222px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Schedule3 = styled.div`
  ${AvenirBlackEerieBlack24px}
  margin-right: 27px;
  flex: 1;
  max-height: 47px;
  height: 47px;
  letter-spacing: 0;
  line-height: 24px;
`;

const ThursdayJanuary10th20221 = styled.div`
  ${MontserratMediumQuickSilver16px}
  margin-right: -2px;
  flex: 1;
  max-height: 24px;
  margin-bottom: -2px;
  height: 24px;
  letter-spacing: 0;
  line-height: 16px;
`;

const X31 = styled.div`
  position: relative;
  margin-top: 11px;
  display: flex;
  align-items: flex-start;
  min-width: 341px;
`;

const OverlapGroup23 = styled.div`
  width: 274px;
  height: 70px;
  position: relative;
  margin-left: 15px;
  margin-top: 0;
`;

const Group972 = styled.div`
  position: absolute;
  width: 222px;
  height: 70px;
  top: 0;
  left: 0;
`;

const OverlapGroup14 = styled.div`
  position: absolute;
  width: 221px;
  height: 45px;
  top: 0;
  left: 0;
`;

const MeetingWithClient1 = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 221px;
  height: 35px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const Date3 = styled.div`
  position: absolute;
  width: 130px;
  height: 19px;
  top: 26px;
  left: 1px;
  display: flex;
  align-items: flex-end;
`;

const Calendar1 = styled.div`
  margin-bottom: 2.5px;
  width: 15.00732421875px;
  height: 13.5546875px;
  background-image: url(/img/vector-10@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Date4 = styled.div`
  ${ManropeNormalQuickSilver10px}
  margin-bottom: -2px;
  margin-left: 8px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 10px;
`;

const X100011002 = styled.div`
  ${ManropeExtraBoldGeyser10px}
  position: absolute;
  width: 220px;
  height: 27px;
  top: 45px;
  left: 2px;
  letter-spacing: 0;
  line-height: 10px;
`;

const OverlapGroup42 = styled.div`
  width: 274px;
  height: 69px;
  position: relative;
  margin-left: 15px;
  margin-top: 0;
`;

const Group973 = styled.div`
  position: absolute;
  width: 222px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 69px;
`;

const OverlapGroup15 = styled.div`
  width: 221px;
  height: 44px;
  position: relative;
`;

const X100011003 = styled.div`
  ${ManropeExtraBoldGeyser10px}
  width: 220px;
  height: 27px;
  margin-left: 2px;
  letter-spacing: 0;
  line-height: 10px;
`;

export default CONTENT;
