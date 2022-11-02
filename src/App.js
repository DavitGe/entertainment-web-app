import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";

import ScrollToTop from "./helpers/ScrollToTop";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Wrapper>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 32px 36px 52px 32px;
  min-height: 100vh;
`;
