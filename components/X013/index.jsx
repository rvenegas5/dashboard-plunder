import React from "react";
import styled from "styled-components";
import { AvenirMediumCodGray10px } from "../../styledMixins";


function X013(props) {
  const { className } = props;

  return (
    <X01 className={`x01-5 ${className || ""}`}>
      <Dashboard className="dashboard-9">COPY LINK</Dashboard>
    </X01>
  );
}

const X01 = styled.div`
  position: absolute;
  width: 93px;
  height: 30px;
  top: 0;
  left: 186px;
  display: flex;
  background-color: var(--bizarre);
  border-radius: 5px;

  &.x01-5.x01-6 {
    left: 0;
    padding: 4px 12px;
    justify-content: flex-end;
    align-items: flex-end;
    min-width: 93px;
    width: unset;
  }
`;

const Dashboard = styled.div`
  ${AvenirMediumCodGray10px}
  margin-top: 7px;
  margin-left: 14px;
  margin-right: 11px;
  flex: 1;
  margin-bottom: 5px;
  width: 68px;
  text-align: center;
  letter-spacing: 0;
  line-height: 10px;
`;

const Dashboard1 = styled.div`
  ${AvenirMediumCodGray10px}

  .x01-5.x01-6  & {
    height: 18px;
    margin-top: unset;
    margin-left: unset;
    margin-right: unset;
    flex: unset;
    margin-bottom: unset;
  }
`;

export default X013;
