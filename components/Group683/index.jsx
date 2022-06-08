import React from "react";
import styled from "styled-components";
import { AvenirHeavyNormalEerieBlack4px } from "../../styledMixins";


function Group683(props) {
  const { className } = props;

  return (
    <Group68 className={`group-68-3 ${className || ""}`}>
      <IconLabel className="icon-label-5" src="/img/path-55@1x.png" />
      <Redeem className="redeem-2">redeem</Redeem>
    </Group68>
  );
}

const Group68 = styled.div`
  width: 31px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  padding: 0 0px;
  align-items: center;
  min-height: 44px;

  &.group-68-3.group-67-3 {
    margin-left: 5px;
  }

  &.group-68-3.group-66-3 {
    margin-left: 5px;
  }
`;

const IconLabel = styled.img`
  width: 31px;
  height: 30px;
  margin-left: 0;
  object-fit: cover;
`;

const Redeem = styled.div`
  ${AvenirHeavyNormalEerieBlack4px}
  min-height: 7px;
  margin-top: 10px;
  margin-right: 2.36px;
  min-width: 16px;
  text-align: center;
  letter-spacing: 0;
  line-height: 4px;
  text-decoration: underline;
  white-space: nowrap;
`;

export default Group683;
