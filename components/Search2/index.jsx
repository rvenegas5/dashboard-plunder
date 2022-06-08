import React from "react";
import styled from "styled-components";


function Search2(props) {
  const { className } = props;

  return (
    <Search21 className={`search-2 ${className || ""}`}>
      <VectorContainer className="vector-container">
        <Vector className="vector" src="/img/vector@1x.png" />
        <Vector1 className="vector-1" src="/img/vector-1@1x.png" />
      </VectorContainer>
    </Search21>
  );
}

const Search21 = styled.div`
  margin-top: -14px;
  height: 27.989856719970703px;
  margin-left: 38px;
  display: flex;
  align-items: flex-start;
  min-width: 28.0000057220459px;

  &.search-2.search-2-2 {
    align-self: center;
    margin-bottom: 0;
    min-width: 28px;
    margin-top: unset;
    height: unset;
    margin-left: unset;
  }

  &.search-2.search-2-3 {
    align-self: center;
    margin-bottom: 0;
    min-width: 28px;
    margin-top: unset;
    height: unset;
    margin-left: unset;
  }

  &.search-2.search-2-4 {
    align-self: center;
    margin-bottom: 0;
    min-width: 28px;
    margin-top: unset;
    height: unset;
    margin-left: unset;
  }

  &.search-2.search-2-5 {
    align-self: center;
    margin-bottom: 0;
    min-width: 28px;
    margin-top: unset;
    height: unset;
    margin-left: unset;
  }
`;

const VectorContainer = styled.div`
  width: 28px;
  height: 28px;
  position: relative;
  margin-top: 0;
`;

const Vector = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  left: 4px;
  object-fit: cover;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 18px;
  left: 0;
  object-fit: cover;
`;

export default Search2;
