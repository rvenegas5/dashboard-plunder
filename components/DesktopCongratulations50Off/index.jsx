import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import NameOnCard from "../NameOnCard";
import styled from "styled-components";
import { AvenirBlackBlack18px, ManropeBoldCodGray14px } from "../../styledMixins";
import "./DesktopCongratulations50Off.css";

function DesktopCongratulations50Off(props) {
  const { desktopCongratulations50Off, congratulations, overlapGroup, shopNow, buttonCloseCopy2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div
        className="desktop-congratulations-50-off screen"
        style={{ backgroundImage: `url(${desktopCongratulations50Off})` }}
      >
        <AddNewCardPopup>
          <ContentPopup>
            <TabNoteInfo></TabNoteInfo>
            <FlexRow>
              <Title>
                <Congratulations>{congratulations}</Congratulations>
              </Title>
              <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
            </FlexRow>
            <NameOnCard />
            <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
              <SHOPNOW>{shopNow}</SHOPNOW>
            </OverlapGroup>
          </ContentPopup>
        </AddNewCardPopup>
      </div>
    </div>
  );
}

const AddNewCardPopup = styled.div`
  width: 618px;
  height: 269px;
  display: flex;
`;

const ContentPopup = styled.div`
  flex: 1;
  width: 618px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  background-color: var(--white);
  border-radius: 30px;
  box-shadow: 0px 4px 8px #695f971a;
`;

const TabNoteInfo = styled.div`
  width: 1px;
  height: 1px;
  margin-top: -1672px;
  align-self: flex-start;
  margin-left: -733px;
`;

const FlexRow = styled.div`
  height: 45px;
  position: relative;
  margin-top: 1695px;
  display: flex;
  align-items: center;
  min-width: 554px;
`;

const Title = styled.div`
  width: 146px;
  height: 25px;
  margin-top: 2px;
  display: flex;
`;

const Congratulations = styled.div`
  ${AvenirBlackBlack18px}
  margin-top: 1px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -3px;
  width: 146px;
  letter-spacing: 0.05px;
  line-height: 23px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  height: 127px;
  align-self: flex-end;
  margin-top: 37px;
  margin-right: -12.89px;
  display: flex;
  padding: 25.2px 61.1px;
  align-items: flex-start;
  min-width: 197px;
  background-size: cover;
  background-position: 50% 50%;
`;

const SHOPNOW = styled.div`
  ${ManropeBoldCodGray14px}
  min-height: 21px;
  min-width: 74px;
  text-align: center;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

export default DesktopCongratulations50Off;
