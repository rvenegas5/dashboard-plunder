import React from "react";
import styled from "styled-components";


function Dashboard1(props) {
  const { dashboard1, className } = props;

  return (
    <Dashboard11 className={`dashboard-1 ${className || ""}`} style={{ backgroundImage: `url(${dashboard1})` }}>
      <Vector className="vector-7" src="/img/vector-9@1x.png" />
    </Dashboard11>
  );
}

const Dashboard11 = styled.div`
  height: 20px;
  margin-bottom: 3.5px;
  display: flex;
  padding: 7px 10.5px;
  align-items: flex-end;
  min-width: 23px;
  background-size: cover;
  background-position: 50% 50%;

  &.dashboard-1.dashboard-1-1 {
    margin-bottom: unset;
  }

  &.dashboard-1.dashboard-1-2 {
    margin-bottom: unset;
  }

  &.dashboard-1.dashboard-1-3 {
    margin-bottom: unset;
  }

  &.dashboard-1.dashboard-1-4 {
    margin-bottom: unset;
  }

  &.dashboard-1.dashboard-1-5 {
    margin-top: 1px;
    background-image: url(/img/vector-61@1x.png);
    margin-bottom: unset;
  }
`;

const Vector = styled.img`
  width: 2px;
  height: 2px;
  object-fit: cover;
`;

export default Dashboard1;
