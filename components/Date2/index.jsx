import React from "react";
import styled from "styled-components";
import { ManropeNormalQuickSilver10px } from "../../styledMixins";


function Date2(props) {
  const { className } = props;

  return (
    <Date className={`date-9 ${className || ""}`}>
      <Calendar className="calendar-2"></Calendar>
      <Date1 className="date-10">January 17, 2021</Date1>
    </Date>
  );
}

const Date = styled.div`
  position: absolute;
  width: 96px;
  height: 13px;
  top: 19px;
  left: 0;
  display: flex;
  align-items: flex-end;

  &.date-9.date-11 {
    height: 14px;
  }

  &.date-9.date-12 {
    height: 14px;
  }

  &.date-9.date-13 {
    height: 14px;
  }
`;

const Calendar = styled.div`
  margin-bottom: 0.6px;
  width: 11.01904296875px;
  height: 9.9521484375px;
  background-image: url(/img/vector-64@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Date1 = styled.div`
  ${ManropeNormalQuickSilver10px}
  margin-bottom: -2px;
  margin-left: 5.6px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 10px;
`;

const Calendar1 = styled.div`
  .date-9.date-11 & {
    margin-bottom: 1.5px;
  }
`;

const Calendar2 = styled.div`
  .date-9.date-12 & {
    margin-bottom: 1.5px;
  }
`;

const Calendar3 = styled.div`
  .date-9.date-13 & {
    margin-bottom: 1.5px;
  }
`;

export default Date2;
