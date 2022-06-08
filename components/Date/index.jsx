import React from "react";
import styled from "styled-components";
import { ManropeNormalQuickSilver10px } from "../../styledMixins";


function Date(props) {
  const { className } = props;

  return (
    <Date1 className={`date-2 ${className || ""}`}>
      <Calendar className="calendar-1"></Calendar>
      <Date2 className="date-3">January 17, 2021</Date2>
    </Date1>
  );
}

const Date1 = styled.div`
  position: absolute;
  width: 130px;
  height: 18px;
  top: 26px;
  left: 1px;
  display: flex;
  align-items: flex-end;

  &.date-2.date-5 {
    height: 19px;
    top: 25px;
  }

  &.date-2.date-8 {
    height: 19px;
    top: 25px;
  }
`;

const Calendar = styled.div`
  margin-bottom: 1.3px;
  width: 15.00732421875px;
  height: 13.5546875px;
  background-image: url(/img/vector-10@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Date2 = styled.div`
  ${ManropeNormalQuickSilver10px}
  margin-bottom: -2px;
  margin-left: 8px;
  margin-right: -2px;
  flex: 1;
  letter-spacing: 0;
  line-height: 10px;
`;

const Calendar1 = styled.div`
  .date-2.date-4 & {
    margin-bottom: 1.4px;
  }
`;

const Calendar2 = styled.div`
  .date-2.date-5 & {
    margin-bottom: 1.6px;
  }
`;

const Date3 = styled.div`
  ${ManropeNormalQuickSilver10px}

  .date-2.date-5  & {
    margin-right: -2px;
  }
`;

const Calendar3 = styled.div`
  .date-2.date-7 & {
    margin-bottom: 1.4px;
  }
`;

const Calendar4 = styled.div`
  .date-2.date-8 & {
    margin-bottom: 1.6px;
  }
`;

const Date4 = styled.div`
  ${ManropeNormalQuickSilver10px}

  .date-2.date-8  & {
    margin-right: -2px;
  }
`;

export default Date;
