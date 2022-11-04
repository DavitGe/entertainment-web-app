import React from "react";
import styled from "styled-components";

import Bookmark from "./Bookmark";
const TrendingProduct = ({ movie }) => {
  const { title, thumbnail, year, category, rating, isBookmarked } = movie;
  return (
    <Container
      bgImg={process.env.PUBLIC_URL + thumbnail.regular.large.slice(1)}
      alt={title}
    >
      <Bookmark active={isBookmarked} title={title} />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: url(${(props) => props.bgImg});
  position: relative;
  cursor: initial;
`;

export default TrendingProduct;
