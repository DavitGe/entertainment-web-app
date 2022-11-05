import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

import { PageWrapper } from "../components/PageWrapper";
import Search from "../components/Search";

const MoviePage = () => {
  const movies = useSelector((state) => state);
  return (
    <PageWrapper>
      <Search placeholder={"Search for movies"} category="movies" />
      <MovieList
        movies={movies.filter((movie) => movie.category === "Movie")}
        title="Movies"
      />
    </PageWrapper>
  );
};

export default MoviePage;
