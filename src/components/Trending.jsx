import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import TrendingProduct from "./TrendingProduct";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Trending = () => {
  const movies = useSelector((state) => state);
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Container>
      <Title>Trending</Title>
      <Carousel ref={carousel}>
        <InnerCarousel
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width,
          }}
        >
          {trendingMovies.map((movie) => {
            return (
              <ProductContainer>
                <TrendingProduct
                  movie={movie}
                  key={movie.title}
                  className="card"
                />
              </ProductContainer>
            );
          })}
        </InnerCarousel>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2``;

const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
  position: relative;
  height: 230px;
  margin-top: 25px;
`;
const InnerCarousel = styled(motion.div)`
  display: flex;
  height: 100%;
`;
const ProductContainer = styled(motion.div)`
  min-width: 470px;
  width: 470px;
  height: 100%;
  margin-right: 40px;
`;

export default Trending;
