import React from "react";
import { PageWrapper } from "../components/PageWrapper";
import Search from "../components/Search";
import Trending from "../components/Trending";
const HomePage = () => {
  return (
    <PageWrapper>
      <Search />
      <Trending />
    </PageWrapper>
  );
};

export default HomePage;
