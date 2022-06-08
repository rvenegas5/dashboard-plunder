import React from "react";
import Search2 from "../Search2";
import styled from "styled-components";
import { CairoSemiBoldShadyLady16px } from "../../styledMixins";


function Searchbox2(props) {
  const { search2Props } = props;

  return (
    <Searchbox>
      <Search2 className={search2Props.className} />
      <SearchHere>Search</SearchHere>
    </Searchbox>
  );
}

const Searchbox = styled.div`
  height: 68px;
  position: relative;
  display: flex;
  padding: 16px 38px;
  align-items: flex-start;
  min-width: 337px;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere = styled.div`
  ${CairoSemiBoldShadyLady16px}
  width: 158px;
  height: 34px;
  margin-left: 25px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Searchbox1 = styled.div`
  height: 68px;
  position: relative;
  display: flex;
  padding: 16px 38px;
  align-items: flex-start;
  min-width: 337px;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere1 = styled.div`
  ${CairoSemiBoldShadyLady16px}
  width: 158px;
  height: 34px;
  margin-left: 25px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Searchbox3 = styled.div`
  height: 68px;
  position: relative;
  display: flex;
  padding: 16px 38px;
  align-items: flex-start;
  min-width: 337px;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere2 = styled.div`
  ${CairoSemiBoldShadyLady16px}
  width: 158px;
  height: 34px;
  margin-left: 25px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Searchbox4 = styled.div`
  height: 68px;
  position: relative;
  display: flex;
  padding: 16px 38px;
  align-items: flex-start;
  min-width: 337px;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere3 = styled.div`
  ${CairoSemiBoldShadyLady16px}
  width: 158px;
  height: 34px;
  margin-left: 25px;
  letter-spacing: 0;
  line-height: 16px;
`;

export default Searchbox2;
