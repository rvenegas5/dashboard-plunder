import React from "react";
import styled from "styled-components";


function Group100(props) {
  const { className } = props;

  return (
    <Group1001 className={`group-100-1 ${className || ""}`}>
      <IconUser className="icon-user-3" src="/img/icon-13@1x.png" />
    </Group1001>
  );
}

const Group1001 = styled.div`
  height: 39px;
  display: flex;
  padding: 9.2px 12.1px;
  align-items: flex-start;
  min-width: 40px;
  background-color: var(--silver-sand);
  border-radius: 16px;

  &.group-100-1.group-98-3 {
    height: 40px;
    margin-bottom: 1px;
    padding: 10.4px 12.1px;
  }

  &.group-100-1.group-98-4 {
    height: 40px;
    margin-bottom: 1px;
    padding: 10.4px 12.1px;
  }

  &.group-100-1.group-98-5 {
    height: 40px;
    margin-bottom: 1px;
    padding: 10.4px 12.1px;
  }
`;

const IconUser = styled.img`
  width: 16px;
  height: 19px;
  object-fit: cover;
`;

export default Group100;
