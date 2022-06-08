import React from "react";
import Dashboard1 from "../Dashboard1";
import styled from "styled-components";
import { AvenirMediumCodGray18px } from "../../styledMixins";


function X01(props) {
  const { dashboard1Props } = props;

  return (
    <X011>
      <Dashboard1 dashboard1={dashboard1Props.dashboard1} />
      <Dashboard>Dashboard</Dashboard>
    </X011>
  );
}

const X011 = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  padding: 9px 22.3px;
  align-items: center;
  min-width: 285px;
  background-color: var(--bizarre);
  border-radius: 10px;
`;

const Dashboard = styled.div`
  ${AvenirMediumCodGray18px}
  width: 98px;
  height: 31px;
  align-self: flex-end;
  margin-left: 28px;
  letter-spacing: 0;
  line-height: 18px;
`;

const X012 = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  padding: 9px 22.3px;
  align-items: center;
  min-width: 285px;
  background-color: var(--bizarre);
  border-radius: 10px;
`;

const Dashboard2 = styled.div`
  ${AvenirMediumCodGray18px}
  width: 98px;
  height: 31px;
  align-self: flex-end;
  margin-left: 28px;
  letter-spacing: 0;
  line-height: 18px;
`;

export default X01;
