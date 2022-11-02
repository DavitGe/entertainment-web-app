import React from "react";
import styled from "styled-components";
import searchIcon from "../assets/icon-search.svg";

const Search = () => {
  return (
    <Container>
      <SearchIconContainer>
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchIconContainer>
      <SearchInput placeholder="Search for movies or TV series" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 36px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  cursor: pointer;
`;

const SearchIconContainer = styled.div`
  height: 32px;
  width: 32px;
`;

const SearchIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const SearchInput = styled.input`
  flex: 1;
  font-size: 24px;
  font-weight: 300;
  line-height: 39.24px;
  caret-color: #fc4747;
  background-color: transparent;
  padding-bottom: 15px;
  border: none;
  outline: none;
  color: #fff;
  &:placeholder {
    opacity: 0.5;
  }
  &:focus {
    border-bottom: 1px solid #5a698f;
  }
`;
export default Search;
