import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

import { PageWrapper } from "../components/PageWrapper";
import Search from "../components/Search";

const SeriesPage = () => {
  const movies = useSelector((state) => state);
  return (
    <PageWrapper>
      <Search placeholder={"Search for TV series"} category="tv-series" />
      <MovieList
        movies={movies.filter((movie) => movie.category === "TV Series")}
        title="TV Series"
      />
    </PageWrapper>
  );
};

export default SeriesPage;
