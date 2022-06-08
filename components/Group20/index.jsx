import React from "react";
import styled from "styled-components";


function Group20(props) {
  const { className } = props;

  return (
    <Group201 className={`group-20 ${className || ""}`}>
      <AddFriend2 className="add-friend-2" src="/img/add-friend-2-2@1x.png" />
    </Group201>
  );
}

const Group201 = styled.div`
  height: 275px;
  display: flex;
  padding: 45.7px 55.4px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 275px;
  background-color: var(--silver-sand);
  border-radius: 14px;

  &.group-20.group-20-2 {
    position: absolute;
    top: 50px;
    left: 13px;
    padding: 45.7px 55.1px;
    align-items: flex-start;
  }
`;

const AddFriend2 = styled.img`
  width: 164px;
  height: 184px;
  object-fit: cover;
`;

export default Group20;
