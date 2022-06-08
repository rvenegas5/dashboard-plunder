import React from "react";
import styled from "styled-components";
import { ManropeBoldEerieBlack20px } from "../../styledMixins";


function Group40(props) {
  const { className } = props;

  return (
    <Group401 className={`group-40 ${className || ""}`}>
      <Path40 className="path-40" src="/img/path-40-1@1x.png" />
      <ConsecteturAdipiscing className="consectetur-adipiscing">Log Out</ConsecteturAdipiscing>
    </Group401>
  );
}

const Group401 = styled.div`
  position: absolute;
  width: 180px;
  height: 51px;
  top: 157px;
  left: 31px;
  display: flex;

  &.group-40.group-39 {
    top: 267px;
    left: 793px;
  }
`;

const Path40 = styled.img`
  margin-top: 3px;
  width: 22.25244140625px;
  height: 22.24609375px;
  margin-left: 0;
  object-fit: cover;
`;

const ConsecteturAdipiscing = styled.div`
  ${ManropeBoldEerieBlack20px}
  margin-bottom: -2px;
  margin-left: 15.7px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 20px;
`;

export default Group40;
