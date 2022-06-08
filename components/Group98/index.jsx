import React from "react";
import styled from "styled-components";


function Group98(props) {
  const { className } = props;

  return (
    <Group981 className={`group-98 ${className || ""}`}>
      <IconUser className="icon-user-2" src="/img/icon-2@1x.png" />
    </Group981>
  );
}

const Group981 = styled.div`
  height: 55px;
  align-self: center;
  margin-bottom: 3px;
  display: flex;
  padding: 14.6px 16.3px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 54px;
  background-color: var(--silver-sand);
  border-radius: 16px;

  &.group-98.group-98-1 {
    margin-bottom: 2px;
    padding: 14.5px 16.3px;
  }

  &.group-98.group-98-2 {
    margin-bottom: 2px;
    padding: 14.5px 16.3px;
  }
`;

const IconUser = styled.img`
  width: 21px;
  height: 26px;
  object-fit: cover;
`;

export default Group98;
