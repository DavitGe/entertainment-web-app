import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const MovieList = ({ movies, title }) => {
  if (!movies[0]) {
    return (
      <Wrapper>
        <Title>No movies found</Title>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Container>
        {movies.map((movie) => {
          return <Movie movie={movie} key={movie.title} />;
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 52px;
  @media (max-width: 732px) {
    margin-top: 24px;
  }
`;
const Container = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: space-between;
  grid-gap: 32px 12px;
  @media (max-width: 1064px) {
    grid-template-columns: repeat(auto-fill, 220px);
  }
  @media (max-width: 732px) {
    grid-template-columns: repeat(auto-fill, 164px);
    grid-gap: 8px;
    justify-content: space-around;
  }
`;

const Title = styled.h2``;

export default MovieList;
