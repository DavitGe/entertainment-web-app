import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "../assets/icon-search.svg";
import { useNavigate } from "react-router-dom";

const Search = ({ placeholder, category, value = "", setValue }) => {
  const [search, setSearch] = useState(value);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    if (value === "") {
      setSearch(e.target.value);
    } else {
      setValue(e.target.value);
      setSearch(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (search !== "") {
      if (category === "all") {
        navigate(`/search/all/${search}`);
      } else if (category === "movies") {
        navigate(`/search/movies/${search}`);
      } else if (category === "tv-series") {
        navigate(`/search/tv-series/${search}`);
      } else if (category === "bookmarked") {
        navigate(`/search/bookmarked/${search}`);
      }
    }
  };

  return (
    <Container onSubmit={submitHandler}>
      <SearchIconContainer>
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchIconContainer>
      <SearchInput
        placeholder={placeholder}
        onChange={inputHandler}
        value={search}
      />
    </Container>
  );
};

const Container = styled.form`
  margin-top: 36px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  cursor: pointer;
`;

const SearchIconContainer = styled.div`
  height: 32px;
  width: 32px;
  @media (max-width: 732px) {
    width: 24px;
    height: 24px;
  }
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
  @media (max-width: 732px) {
    font-size: 16px;
    line-height: 20.16px;
  }
`;
export default Search;
