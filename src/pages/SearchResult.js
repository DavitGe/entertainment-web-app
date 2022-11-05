import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import MovieList from "../components/MovieList";
import { PageWrapper } from "../components/PageWrapper";
import Search from "../components/Search";

const SearchResult = () => {
  const { category, search } = useParams();
  const allMovies = useSelector((state) => state);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(search);

  useEffect(() => {
    if (category === "all") {
      const choosenMovies = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setMovies(choosenMovies);
    } else if (category === "movies") {
      const chosenMovies = allMovies.filter(
        (movie) =>
          movie.category === "Movie" &&
          movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setMovies(chosenMovies);
    } else if (category === "tv-series") {
      const chosenMovies = allMovies.filter(
        (movie) =>
          movie.category === "TV Series" &&
          movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setMovies(chosenMovies);
    } else if (category === "bookmarked") {
      const chosenMovies = allMovies.filter(
        (movie) =>
          movie.isBookmarked &&
          movie.title.toLowerCase().includes(value.toLowerCase())
      );
      setMovies(chosenMovies);
    }
  }, [value]);

  return (
    <PageWrapper>
      <Search value={search} category={category} setValue={setValue} />
      <MovieList
        title={`Found ${movies.length} results for '${value}'`}
        movies={movies}
      />
    </PageWrapper>
  );
};

export default SearchResult;
