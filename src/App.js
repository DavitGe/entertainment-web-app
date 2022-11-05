import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";

import ScrollToTop from "./helpers/ScrollToTop";
import BookmarkedPage from "./pages/BookmarkedPage";

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SearchResult from "./pages/SearchResult";
import SeriesPage from "./pages/SeriesPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Wrapper>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/tv-series" element={<SeriesPage />} />
          <Route path="/bookmarked" element={<BookmarkedPage />} />
          <Route path="/search/:category/:search" element={<SearchResult />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 32px 36px 52px 32px;
  min-height: 100vh;
  @media (max-width: 1064px) {
    padding: 24px;
  }
  @media (max-width: 732px) {
    padding: 16px;
  }
`;
