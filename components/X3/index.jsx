import React from "react";
import Group100 from "../Group100";
import Date2 from "../Date2";
import styled from "styled-components";
import { ManropeExtraBoldGeyser10px, AvenirBlackEerieBlack16px, ManropeNormalEerieBlack12px } from "../../styledMixins";


function X3(props) {
  const { className, group100Props, date2Props } = props;

  return (
    <X31 className={`x3-2 ${className || ""}`}>
      <Group100 className={group100Props.className} />
      <OverlapGroup2 className="overlap-group2-13">
        <DueDate className="due-date-3">
          <X10001100 className="x1000-1100-8">3pt</X10001100>
        </DueDate>
        <Group97 className="group-97-2">
          <OverlapGroup className="overlap-group-39">
            <MeetingWithClient className="meeting-with-client-5">Pam Gould</MeetingWithClient>
            <Date2 className={date2Props.className} />
          </OverlapGroup>
          <X100011001 className="x1000-1100-9">Customer Purchase $44</X100011001>
        </Group97>
      </OverlapGroup2>
    </X31>
  );
}

const X31 = styled.div`
  position: absolute;
  height: 51px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 250px;

  &.x3-2.x3-4 {
    position: relative;
    margin-top: 8px;
    height: unset;
    top: unset;
    left: unset;
  }
`;

const OverlapGroup2 = styled.div`
  width: 201px;
  height: 51px;
  position: relative;
  margin-left: 11px;
`;

const DueDate = styled.div`
  position: absolute;
  width: 84px;
  height: 25px;
  top: 13px;
  left: 117px;
  display: flex;
`;

const X10001100 = styled.div`
  ${ManropeNormalEerieBlack12px}
  margin-right: -2px;
  flex: 1;
  margin-bottom: -2px;
  width: 84px;
  text-align: right;
  letter-spacing: 0;
  line-height: 12px;
`;

const Group97 = styled.div`
  position: absolute;
  width: 163px;
  height: 51px;
  top: 0;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 163px;
  height: 33px;
  top: 0;
  left: 0;
`;

const MeetingWithClient = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 163px;
  height: 26px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const X100011001 = styled.div`
  ${ManropeExtraBoldGeyser10px}
  position: absolute;
  width: 162px;
  height: 20px;
  top: 33px;
  left: 1px;
  letter-spacing: 0;
  line-height: 10px;
`;

export default X3;
