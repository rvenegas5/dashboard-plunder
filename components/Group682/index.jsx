import React from "react";
import styled from "styled-components";
import { AvenirHeavyNormalEerieBlack7px } from "../../styledMixins";


function Group682(props) {
  const { className } = props;

  return (
    <Group68 className={`group-68-2 ${className || ""}`}>
      <IconLabel className="icon-label-3" src="/img/path-55-1@1x.png" />
      <Redeem className="redeem-1">redeem</Redeem>
    </Group68>
  );
}

const Group68 = styled.div`
  width: 45px;
  display: flex;
  flex-direction: column;
  padding: 0 0px;
  align-items: center;
  min-height: 67px;

  &.group-68-2.group-67-2 {
    margin-left: 8px;
  }

  &.group-68-2.group-66-2 {
    margin-left: 7px;
  }
`;

const IconLabel = styled.img`
  width: 45px;
  height: 43px;
  margin-right: 0;
  object-fit: cover;
`;

const Redeem = styled.div`
  ${AvenirHeavyNormalEerieBlack7px}
  min-height: 12px;
  margin-top: 15px;
  margin-left: 1.21px;
  min-width: 28px;
  text-align: center;
  letter-spacing: 0;
  line-height: 7px;
  text-decoration: underline;
  white-space: nowrap;
`;

export default Group682;
