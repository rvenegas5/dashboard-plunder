import React from "react";
import styled from "styled-components";


function Group85(props) {
  const { path69, path70, className } = props;

  return (
    <Group851 className={`group-85 ${className || ""}`}>
      <PathContainer className="path-container">
        <Path69 className="path-69" src={path69} />
        <Path70 className="path-70" src={path70} />
      </PathContainer>
    </Group851>
  );
}

const Group851 = styled.div`
  margin-top: 2.9px;
  margin-bottom: 0;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 17.239105224609375px;

  &.group-85.group-85-1 {
    padding: 0px 0px;
    align-items: flex-end;
  }

  &.group-85.group-94 {
    justify-content: center;
    min-width: 17px;
    margin-top: unset;
    margin-bottom: unset;
    padding: unset;
  }

  &.group-85.group-94-1 {
    justify-content: center;
    min-width: 17px;
    margin-top: unset;
    margin-bottom: unset;
    padding: unset;
  }

  &.group-85.group-94-2 {
    justify-content: center;
    min-width: 17px;
    margin-top: unset;
    margin-bottom: unset;
    padding: unset;
  }

  &.group-85.group-94-3 {
    padding: 0px 0;
    justify-content: center;
    align-items: flex-end;
    min-width: 17px;
    margin-top: unset;
    margin-bottom: unset;
  }

  &.group-85.group-85-2 {
    margin-top: 0.13px;
    justify-content: center;
    min-width: 17px;
    margin-bottom: unset;
    padding: unset;
  }
`;

const PathContainer = styled.div`
  width: 17px;
  height: 24px;
  position: relative;
  margin-top: 0;
`;

const Path69 = styled.img`
  position: absolute;
  width: 9px;
  height: 5px;
  top: 0;
  left: 4px;
  object-fit: cover;
`;

const Path70 = styled.img`
  position: absolute;
  width: 17px;
  height: 22px;
  top: 3px;
  left: 0;
  object-fit: cover;
`;

const PathContainer1 = styled.div`
  .group-85.group-85-1 & {
    margin-top: unset;
  }
`;

const PathContainer2 = styled.div`
  .group-85.group-94-3 & {
    margin-top: unset;
  }
`;

export default Group85;
