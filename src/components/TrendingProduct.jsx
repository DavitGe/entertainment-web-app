import React from "react";
import styled from "styled-components";

import movieIcon from "../assets/icon-category-movie.svg";
import seriesIcon from "../assets/icon-category-tv.svg";
import Bookmark from "./Bookmark";
const TrendingProduct = ({ movie }) => {
  const { title, thumbnail, year, category, rating, isBookmarked } = movie;
  return (
    <Wrapper
      bgImg={process.env.PUBLIC_URL + thumbnail.regular.large.slice(1)}
      alt={title}
    >
      <Bookmark active={isBookmarked} title={title} />
      <Container>
        <InfoContainer>
          <InfoText>{year}</InfoText>
          <Dot />
          <MovieContainer>
            <CategoryLogo src={category === "Movie" ? movieIcon : seriesIcon} />
            <InfoText>{category}</InfoText>
          </MovieContainer>
          <Dot />
          <InfoText>{rating}</InfoText>
        </InfoContainer>
        <Title>{title}</Title>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: url(${(props) => props.bgImg});
  position: relative;
  cursor: initial;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

const Container = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 99px;
  overflow: hidden;
  background-color: #fff;
  opacity: 0.5;
`;

const InfoText = styled.span`
  font-size: 15px;
  opacity: 0.75;
  white-space: nowrap;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`;

const CategoryLogo = styled.img`
  width: 12px;
  height: 12px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30.24px;
  margin-top: 3px;
`;

export default TrendingProduct;
