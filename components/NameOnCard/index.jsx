import React from "react";
import styled from "styled-components";
import { AvenirBookNormalBlack15px } from "../../styledMixins";


function NameOnCard() {
  return (
    <NameOnCard1>
      <The50OFFItemWil>
        The 50% OFF item will be applied to the most expensive item in your cart.
        <br />
        Add at least one item to your cart to see the discount.
      </The50OFFItemWil>
    </NameOnCard1>
  );
}

const NameOnCard1 = styled.div`
  width: 499px;
  height: 48px;
  margin-top: 11px;
  margin-right: 55px;
  display: flex;
`;

const The50OFFItemWil = styled.p`
  ${AvenirBookNormalBlack15px}
  margin-top: -4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: 2px;
  width: 499px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const NameOnCard2 = styled.div`
  width: 499px;
  height: 48px;
  margin-top: 11px;
  margin-right: 55px;
  display: flex;
`;

const The50OFFItemWil1 = styled.p`
  ${AvenirBookNormalBlack15px}
  margin-top: -4px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: 2px;
  width: 499px;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

export default NameOnCard;
