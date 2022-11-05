import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

import { PageWrapper } from "../components/PageWrapper";
import Search from "../components/Search";

const BookmarkedPage = () => {
  const movies = useSelector((state) => state);
  const BookmarkedMovies = movies.filter((movie) => movie.isBookmarked);
  return (
    <PageWrapper>
      <Search
        placeholder={"Search for bookmarked shows"}
        category="bookmarked"
      />
      <MovieList
        movies={BookmarkedMovies.filter((movie) => movie.category === "Movie")}
        title="Bookmarked Movies"
      />
      <MovieList
        movies={BookmarkedMovies.filter(
          (movie) => movie.category === "TV Series"
        )}
        title="Bookmarked TV Series"
      />
    </PageWrapper>
  );
};

export default BookmarkedPage;
