import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import NameOnCard from "../NameOnCard";
import ButtonSave from "../ButtonSave";
import styled from "styled-components";
import { AvenirBlackBlack18px } from "../../styledMixins";
import "./TabletCongratulations50Off.css";

function TabletCongratulations50Off(props) {
  const { tabletCongratulations50Off, congratulations, buttonCloseCopy2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div
        className="tablet-congratulations-50-off screen"
        style={{ backgroundImage: `url(${tabletCongratulations50Off})` }}
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
            <ButtonSave />
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

export default TabletCongratulations50Off;
