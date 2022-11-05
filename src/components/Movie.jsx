import React, { useEffect, useState } from "react";
import styled from "styled-components";

import movieIcon from "../assets/icon-category-movie.svg";
import seriesIcon from "../assets/icon-category-tv.svg";
import Bookmark from "./Bookmark";
import playIcon from "../assets/icon-play.svg";
const Movie = ({ movie }) => {
  const { title, thumbnail, year, category, rating, isBookmarked } = movie;
  const [movieImg, setMovieImg] = useState();

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = window;
      if (Number(innerWidth) > 1064) {
        setMovieImg(thumbnail.regular.large.slice(1));
      } else if (Number(innerWidth > 732)) {
        setMovieImg(thumbnail.regular.medium.slice(1));
      } else {
        setMovieImg(thumbnail.regular.small.slice(1));
      }
    }
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Wrapper>
      <Bookmark active={isBookmarked} title={title} />
      <Image
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + movieImg})` }}
        alt={title}
      >
        <Layer>
          <PlayContainer>
            <img src={playIcon} alt="" style={{ marginLeft: 9 }} />
            <span>Play</span>
          </PlayContainer>
        </Layer>
      </Image>
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
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 1064px) {
    width: 220px;
  }
  @media (max-width: 732px) {
    width: 164px;
  }
`;

const Layer = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 7;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  width: 280px;
  height: 174px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  @media (max-width: 1064px) {
    width: 220px;
    height: 140px;
  }
  @media (max-width: 732px) {
    width: 164px;
    height: 110px;
  }
  &:hover {
    ${Layer} {
      display: flex;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  @media (max-width: 1064px) {
    font-size: 13px;
    line-height: 16.38px;
  }
  @media (max-width: 732px) {
    font-size: 11px;
    line-height: 13.86px;
  }
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
  @media (max-width: 732px) {
    width: 10px;
    height: 10px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30.24px;
  margin-top: 3px;
  @media (max-width: 1064px) {
    font-size: 18px;
    line-height: 22.68px;
  }
  @media (max-width: 732px) {
    font-size: 14px;
    line-height: 22.68px;
  }
`;

export const PlayContainer = styled.div`
  width: 117px;
  height: 48px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 19px;
  border-radius: 99px;
  background-color: rgba(255, 255, 255, 0.25);
`;

export default Movie;
