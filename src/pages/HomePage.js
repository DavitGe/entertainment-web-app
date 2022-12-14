import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

import { PageWrapper } from "../components/PageWrapper";
import Search from "../components/Search";
import Trending from "../components/Trending";
const HomePage = () => {
  const movies = useSelector((state) => state);
  return (
    <PageWrapper>
      <Search placeholder={"Search for movies or TV series"} category="all" />
      <Trending />
      <MovieList movies={movies} title="Recommended for you" />
    </PageWrapper>
  );
};

export default HomePage;
