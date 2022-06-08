import React from "react";
import styled from "styled-components";
import { Border1pxCararra } from "../../styledMixins";


function ButtonCloseCopy2(props) {
  const { className } = props;

  return (
    <ButtonCloseCopy21 className={`button-close-copy-2 ${className || ""}`}>
      <IconClose className="icon-close" src="/img/icon-close-1@1x.png" />
    </ButtonCloseCopy21>
  );
}

const ButtonCloseCopy21 = styled.div`
  ${Border1pxCararra}
  height: 45px;
  margin-left: 401px;
  display: flex;
  padding: 15.6px 15.6px;
  align-items: flex-start;
  min-width: 45px;
  background-color: var(--white);
  border-radius: 19px;

  &.button-close-copy-2.button-close-copy-2-1 {
    margin-left: 363px;
  }

  &.button-close-copy-2.button-close-copy-2-2 {
    position: absolute;
    top: 9px;
    left: 472px;
    margin-left: unset;
  }

  &.button-close-copy-2.button-close-copy-2-3 {
    margin-left: 363px;
  }

  &.button-close-copy-2.button-close-copy-2-4 {
    position: absolute;
    top: 9px;
    left: 319px;
    margin-left: unset;
  }

  &.button-close-copy-2.button-close-copy-2-5 {
    margin-left: 63px;
  }

  &.button-close-copy-2.button-close {
    margin-right: 16px;
    margin-left: unset;
  }
`;

const IconClose = styled.img`
  width: 13px;
  height: 13px;
  object-fit: cover;
`;

export default ButtonCloseCopy2;
