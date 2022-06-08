import React from "react";
import styled from "styled-components";
import { ManropeNormalEerieBlack12px } from "../../styledMixins";


function DueDate2() {
  return (
    <DueDate>
      <X10001100>1 pt</X10001100>
    </DueDate>
  );
}

const DueDate = styled.div`
  position: absolute;
  width: 82px;
  height: 25px;
  top: 12px;
  left: 119px;
  display: flex;
`;

const X10001100 = styled.div`
  ${ManropeNormalEerieBlack12px}
  margin-right: -2px;
  flex: 1;
  margin-bottom: -2px;
  width: 82px;
  text-align: right;
  letter-spacing: 0;
  line-height: 12px;
`;

export default DueDate2;
