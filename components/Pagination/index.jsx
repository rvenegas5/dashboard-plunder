import React from "react";
import styled from "styled-components";
import { Border1pxSilverSand, PoppinsBoldWhite18px, PoppinsMediumEerieBlack18px } from "../../styledMixins";


function Pagination(props) {
  const { className } = props;

  return (
    <Pagination1 className={`pagination ${className || ""}`}>
      <BtnPrev className="btn-prev">
        <IcChevron className="ic_chevron">
          <VectorContainer className="vector-container-4">
            <Vector className="vector-17" src="/img/vector-115@1x.png" />
            <Vector1 className="vector-18" src="/img/vector-116@1x.png" />
          </VectorContainer>
        </IcChevron>
      </BtnPrev>
      <Number className="number-9">
        <OverlapGroup className="overlap-group-53">
          <Background className="background-10"></Background>
          <SelectedPage className="selected-page"></SelectedPage>
          <Number1 className="number-10">1</Number1>
          <Number2 className="number-11">2</Number2>
          <Number3 className="number-12">3</Number3>
          <Number4 className="number-13">4</Number4>
        </OverlapGroup>
      </Number>
      <BtnNext className="btn-next">
        <IcChevron1 className="ic_chevron-1">
          <VectorContainer className="vector-container-5">
            <Vector2 className="vector-19" src="/img/vector-117@1x.png" />
            <Vector3 className="vector-20" src="/img/vector-118@1x.png" />
          </VectorContainer>
        </IcChevron1>
      </BtnNext>
    </Pagination1>
  );
}

const Pagination1 = styled.div`
  position: absolute;
  height: 58px;
  top: 1022px;
  left: 37px;
  display: flex;
  align-items: flex-start;
  min-width: 340px;

  &.pagination.pagination-1 {
    align-self: center;
    margin-top: 838px;
    position: unset;
    height: unset;
    top: unset;
    left: unset;
  }
`;

const BtnPrev = styled.div`
  ${Border1pxSilverSand}
  height: 50px;
  display: flex;
  padding: 18px;
  align-items: flex-start;
  min-width: 50px;
  border-radius: 14px;
`;

const IcChevron = styled.div`
  height: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 13px;
  transform: rotate(180deg);
`;

const VectorContainer = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  margin-left: -1px;
  margin-top: -1.41px;
`;

const Vector = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 0;
  left: 7px;
  transform: rotate(-180deg);
  object-fit: cover;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 0;
  left: 0;
  transform: rotate(-180deg);
  object-fit: cover;
`;

const Number = styled.div`
  height: 58px;
  margin-left: 10px;
  display: flex;
  align-items: flex-end;
  min-width: 220px;
`;

const OverlapGroup = styled.div`
  width: 220px;
  height: 60px;
  position: relative;
  margin-bottom: -2px;
`;

const Background = styled.div`
  ${Border1pxSilverSand}
  position: absolute;
  width: 220px;
  height: 51px;
  top: 0;
  left: 0;
  border-radius: 14px;
`;

const SelectedPage = styled.div`
  position: absolute;
  width: 51px;
  height: 51px;
  top: 0;
  left: 0;
  background-color: var(--bizarre);
  border-radius: 14px;
  box-shadow: 0px 7px 32px #00000024;
`;

const Number1 = styled.div`
  ${PoppinsBoldWhite18px}
  position: absolute;
  width: 9px;
  height: 49px;
  top: 11px;
  left: 22px;
  letter-spacing: 0;
  line-height: 18px;
`;

const Number2 = styled.div`
  ${PoppinsMediumEerieBlack18px}
  position: absolute;
  width: 13px;
  height: 49px;
  top: 11px;
  left: 73px;
  letter-spacing: 0;
  line-height: 18px;
`;

const Number3 = styled.div`
  ${PoppinsMediumEerieBlack18px}
  position: absolute;
  width: 13px;
  height: 49px;
  top: 11px;
  left: 128px;
  letter-spacing: 0;
  line-height: 18px;
`;

const Number4 = styled.div`
  ${PoppinsMediumEerieBlack18px}
  position: absolute;
  width: 14px;
  height: 49px;
  top: 11px;
  left: 183px;
  letter-spacing: 0;
  line-height: 18px;
`;

const BtnNext = styled.div`
  ${Border1pxSilverSand}
  height: 50px;
  margin-left: 10px;
  display: flex;
  padding: 18px 17px;
  align-items: flex-start;
  min-width: 50px;
  border-radius: 14px;
`;

const IcChevron1 = styled.div`
  height: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 13px;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 0;
  left: 7px;
  object-fit: cover;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 8px;
  height: 15px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

export default Pagination;
