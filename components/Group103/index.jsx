import React from "react";
import Date from "../Date";
import styled from "styled-components";
import {
  ManropeExtraBoldBizarre10px,
  AvenirBlackEerieBlack16px,
  ManropeNormalEerieBlack12px,
} from "../../styledMixins";


function Group103(props) {
  const { className, dateProps } = props;

  return (
    <Group1031 className={`group-103 ${className || ""}`}>
      <Group100 className="group-100">
        <IconUser className="icon-user-1" src="/img/icon-2@1x.png" />
      </Group100>
      <OverlapGroup1 className="overlap-group1-5">
        <DueDate className="due-date">
          <X10001100 className="x1000-1100-2">1 pt</X10001100>
        </DueDate>
        <Group102 className="group-102">
          <OverlapGroup className="overlap-group-14">
            <Date className={dateProps.className} />
            <MeetingWithClient className="meeting-with-client-2">Natalie B</MeetingWithClient>
          </OverlapGroup>
          <X100011001 className="x1000-1100-3">Personal Purchase $20</X100011001>
        </Group102>
      </OverlapGroup1>
    </Group1031>
  );
}

const Group1031 = styled.div`
  margin-top: 27px;
  margin-left: 0;
  display: flex;
  align-items: center;
  min-width: 341px;

  &.group-103.group-104 {
    margin-top: 6px;
  }

  &.group-103.group-104-1 {
    margin-top: 6px;
  }
`;

const Group100 = styled.div`
  height: 53px;
  margin-top: 0;
  display: flex;
  padding: 12.4px 16.3px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 54px;
  background-color: var(--silver-sand);
  border-radius: 16px;
`;

const IconUser = styled.img`
  width: 21px;
  height: 26px;
  object-fit: cover;
`;

const OverlapGroup1 = styled.div`
  width: 274px;
  height: 67px;
  position: relative;
  margin-left: 15px;
`;

const DueDate = styled.div`
  position: absolute;
  width: 111px;
  height: 34px;
  top: 16px;
  left: 163px;
  display: flex;
`;

const X10001100 = styled.div`
  ${ManropeNormalEerieBlack12px}
  margin-right: -2px;
  flex: 1;
  margin-bottom: -2px;
  width: 111px;
  text-align: right;
  letter-spacing: 0;
  line-height: 12px;
`;

const Group102 = styled.div`
  position: absolute;
  width: 219px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 67px;
`;

const OverlapGroup = styled.div`
  width: 219px;
  height: 44px;
  position: relative;
`;

const MeetingWithClient = styled.div`
  ${AvenirBlackEerieBlack16px}
  position: absolute;
  width: 219px;
  height: 35px;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: 16px;
`;

const X100011001 = styled.div`
  ${ManropeExtraBoldBizarre10px}
  width: 217px;
  height: 24px;
  margin-top: 1px;
  margin-left: 2px;
  letter-spacing: 0;
  line-height: 10px;
`;

const Group1001 = styled.div`
  .group-103.group-104 & {
    padding: 12.3px 16.3px;
  }
`;

const OverlapGroup3 = styled.div`
  .group-103.group-104 & {
    align-self: flex-end;
    margin-bottom: 0;
  }
`;

const Group1002 = styled.div`
  .group-103.group-104-1 & {
    padding: 12.3px 16.3px;
  }
`;

const OverlapGroup31 = styled.div`
  .group-103.group-104-1 & {
    align-self: flex-end;
    margin-bottom: 0;
  }
`;

export default Group103;
