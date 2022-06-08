import React from "react";
import styled from "styled-components";
import { AvenirHeavyNormalEerieBlack14px } from "../../styledMixins";


function Group68(props) {
  const { className } = props;

  return (
    <Group681 className={`group-68 ${className || ""}`}>
      <IconLabel className="icon-label" src="/img/path-55@1x.png" />
      <Redeem className="redeem">redeem</Redeem>
    </Group681>
  );
}

const Group681 = styled.div`
  width: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 127px;

  &.group-68.group-67 {
    margin-left: 15px;
  }

  &.group-68.group-66 {
    margin-left: 14px;
  }

  &.group-68.group-67-1 {
    margin-left: 15px;
  }

  &.group-68.group-66-1 {
    margin-left: 14px;
  }
`;

const IconLabel = styled.img`
  width: 85px;
  height: 82px;
  margin-right: 0;
  object-fit: cover;
`;

const Redeem = styled.div`
  ${AvenirHeavyNormalEerieBlack14px}
  min-height: 21px;
  margin-top: 29px;
  margin-left: 1.27px;
  min-width: 52px;
  text-align: center;
  letter-spacing: 0;
  line-height: 14px;
  text-decoration: underline;
  white-space: nowrap;
`;

const IconLabel1 = styled.img`
  .group-68.group-67 & {
    margin-left: 0;
    margin-right: unset;
  }
`;

const Path56 = styled.img`
  .group-68.group-67-1 & {
    margin-left: 0;
    margin-right: unset;
  }
`;

export default Group68;
