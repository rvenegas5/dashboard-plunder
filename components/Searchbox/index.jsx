import React from "react";
import Search2 from "../Search2";
import styled from "styled-components";
import { CairoSemiBoldShadyLady16px } from "../../styledMixins";


function Searchbox() {
  return (
    <Searchbox1>
      <Search2 />
      <SearchHere>Search</SearchHere>
    </Searchbox1>
  );
}

const Searchbox1 = styled.div`
  width: 713px;
  height: 68px;
  position: relative;
  display: flex;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere = styled.div`
  ${CairoSemiBoldShadyLady16px}
  margin-top: 17px;
  margin-bottom: 1px;
  width: 167px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Searchbox2 = styled.div`
  width: 713px;
  height: 68px;
  position: relative;
  display: flex;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere1 = styled.div`
  ${CairoSemiBoldShadyLady16px}
  margin-top: 17px;
  margin-bottom: 1px;
  width: 167px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Searchbox3 = styled.div`
  width: 713px;
  height: 68px;
  position: relative;
  display: flex;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere2 = styled.div`
  ${CairoSemiBoldShadyLady16px}
  margin-top: 17px;
  margin-bottom: 1px;
  width: 167px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Searchbox4 = styled.div`
  width: 713px;
  height: 68px;
  position: relative;
  display: flex;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere3 = styled.div`
  ${CairoSemiBoldShadyLady16px}
  margin-top: 17px;
  margin-bottom: 1px;
  width: 167px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 16px;
`;

const Searchbox5 = styled.div`
  width: 713px;
  height: 68px;
  position: relative;
  display: flex;
  background-color: var(--alabaster);
  border-radius: 46px;
`;

const SearchHere4 = styled.div`
  ${CairoSemiBoldShadyLady16px}
  margin-top: 17px;
  margin-bottom: 1px;
  width: 167px;
  margin-left: 20px;
  letter-spacing: 0;
  line-height: 16px;
`;

export default Searchbox;
