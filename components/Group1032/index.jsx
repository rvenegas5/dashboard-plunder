import React from "react";
import Group100 from "../Group100";
import DueDate2 from "../DueDate2";
import Date2 from "../Date2";
import styled from "styled-components";
import { ManropeExtraBoldBizarre10px, AvenirBlackEerieBlack16px } from "../../styledMixins";


function Group1032(props) {
  const { className } = props;

  return (
    <Group103 className={`group-103-2 ${className || ""}`}>
      <Group100 />
      <OverlapGroup3 className="overlap-group3-8">
        <DueDate2 />
        <Group102 className="group-102-1">
          <OverlapGroup className="overlap-group-38">
            <Date2 />
            <MeetingWithClient className="meeting-with-client-4">Natalie B</MeetingWithClient>
          </OverlapGroup>
          <X10001100 className="x1000-1100-7">Personal Purchase $20</X10001100>
        </Group102>
      </OverlapGroup3>
    </Group103>
  );
}

const Group103 = styled.div`
  position: absolute;
  height: 49px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 250px;

  &.group-103-2.group-104-2 {
    position: relative;
    margin-top: 5px;
    height: unset;
    top: unset;
    left: unset;
  }
`;

const OverlapGroup3 = styled.div`
  width: 201px;
  height: 49px;
  position: relative;
  margin-left: 11px;
`;

const Group102 = styled.div`
  position: absolute;
  width: 161px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 49px;
`;

const OverlapGroup = styled.div`
  width: 161px;
  height: 32px;
  position: relative;
`;

const MeetingWithClient = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 161px;
  height: 26px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const X10001100 = styled.div`
  ${ManropeExtraBoldBizarre10px}
  width: 160px;
  height: 18px;
  margin-top: 1px;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: 10px;
`;

export default Group1032;
