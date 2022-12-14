import React, { useEffect, useState } from "react";
import styled from "styled-components";

import movieIcon from "../assets/icon-category-movie.svg";
import seriesIcon from "../assets/icon-category-tv.svg";
import Bookmark from "./Bookmark";
import playIcon from "../assets/icon-play.svg";

const TrendingProduct = ({ movie }) => {
  const { title, thumbnail, year, category, rating, isBookmarked } = movie;
  const [bgImg, setBgImg] = useState();
  const [width, setWidth] = useState();

  useEffect(() => {
    function handleWindowResize() {
      const { innerWidth } = window;
      if (Number(innerWidth > 732)) {
        setBgImg(thumbnail.trending.large.slice(1));
      } else {
        setBgImg(thumbnail.trending.small.slice(1));
      }
      setWidth(Number(innerWidth));
    }
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
  }, []);
  return (
    <Wrapper bgImg={process.env.PUBLIC_URL + bgImg} alt={title}>
      <Bookmark active={isBookmarked} title={title} />
      <Layer>
        <PlayContainer>
          <img src={playIcon} alt="" style={{ marginLeft: 9 }} />
          <span>Play</span>
        </PlayContainer>
      </Layer>
      {width <= 732 && (
        <MobileRating>
          <InfoText style={{ padding: "2px 8px" }}>{rating}</InfoText>
        </MobileRating>
      )}
      <Container>
        <InfoContainer>
          <InfoText>{year}</InfoText>
          <Dot />
          <MovieContainer>
            <CategoryLogo src={category === "Movie" ? movieIcon : seriesIcon} />
            <InfoText>{category}</InfoText>
          </MovieContainer>
          {width > 732 && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Dot style={{ marginRight: 8 }} />
              <InfoText>{rating}</InfoText>
            </div>
          )}
        </InfoContainer>
        <Title>{title}</Title>
      </Container>
    </Wrapper>
  );
};

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

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: url(${(props) => props.bgImg});
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  &:hover {
    ${Layer} {
      display: flex;
    }
  }
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
  @media (max-width: 732px) {
    padding: 16px;
  }
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
  @media (max-width: 732px) {
    font-size: 12px;
    line-height: 15.12px;
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
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 30.24px;
  margin-top: 3px;
  @media (max-width: 732px) {
    font-size: 15px;
    line-height: 18.9px;
  }
`;

const MobileRating = styled.div`
  background-color: rgba(16, 20, 30, 0.5);
  border-radius: 999px;
  position: absolute;
  right: 16px;
  bottom: 24px;
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

export default TrendingProduct;
