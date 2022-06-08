import React from "react";
import styled from "styled-components";
import { ManropeNormalEerieBlack12px } from "../../styledMixins";


function DueDate() {
  return (
    <DueDate1>
      <X10001100>3pt</X10001100>
    </DueDate1>
  );
}

const DueDate1 = styled.div`
  position: absolute;
  width: 114px;
  height: 34px;
  top: 17px;
  left: 160px;
  display: flex;
`;

const X10001100 = styled.div`
  ${ManropeNormalEerieBlack12px}
  margin-right: -2px;
  flex: 1;
  margin-bottom: -2px;
  width: 114px;
  text-align: right;
  letter-spacing: 0;
  line-height: 12px;
`;

const DueDate2 = styled.div`
  position: absolute;
  width: 114px;
  height: 34px;
  top: 17px;
  left: 160px;
  display: flex;
`;

const X100011001 = styled.div`
  ${ManropeNormalEerieBlack12px}
  margin-right: -2px;
  flex: 1;
  margin-bottom: -2px;
  width: 114px;
  text-align: right;
  letter-spacing: 0;
  line-height: 12px;
`;

export default DueDate;
