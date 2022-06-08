import React from "react";
import ButtonCloseCopy2 from "../ButtonCloseCopy2";
import ButtonSave from "../ButtonSave";
import styled from "styled-components";
import { AvenirBlackBlack18px } from "../../styledMixins";
import "./MobileCongratulations50Off.css";

function MobileCongratulations50Off(props) {
  const { congratulations, the50OffItemWil, buttonCloseCopy2Props, buttonSaveProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile-congratulations-50-off screen">
        <AddNewCardPopup>
          <ContentPopup>
            <TabNoteInfo></TabNoteInfo>
            <FlexRow>
              <Title>
                <Congratulations>{congratulations}</Congratulations>
              </Title>
              <ButtonCloseCopy2 className={buttonCloseCopy2Props.className} />
            </FlexRow>
            <NameOnCard>
              <The50OFFItemWil>{the50OffItemWil}</The50OFFItemWil>
            </NameOnCard>
            <ButtonSave className={buttonSaveProps.className} />
          </ContentPopup>
        </AddNewCardPopup>
      </div>
    </div>
  );
}

const AddNewCardPopup = styled.div`
  width: 318px;
  height: 269px;
  display: flex;
`;

const ContentPopup = styled.div`
  flex: 1;
  width: 318px;
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
  margin-left: -377.17px;
`;

const FlexRow = styled.div`
  height: 45px;
  position: relative;
  margin-top: 1695px;
  display: flex;
  align-items: center;
  min-width: 254px;
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

const NameOnCard = styled.div`
  width: 258px;
  height: 71px;
  margin-top: 11px;
  margin-left: 4px;
  display: flex;
`;

const The50OFFItemWil = styled.p`
  margin-top: -2.5px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: 0.5px;
  width: 258px;
  font-family: var(--font-family-avenir-book);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: 19px;
  white-space: nowrap;
`;

export default MobileCongratulations50Off;
