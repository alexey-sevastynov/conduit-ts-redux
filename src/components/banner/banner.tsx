import React from "react";
import Container from "../container/Container";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="bg-green  w-full shadow text-white p-8 jmb-8">
      <Container>
        <h1 className="drob-shadow text-6xl font-bold text-center">Conduit</h1>
        <p className="text-2xl font-light text-center">
          A place to share your knowledge.
        </p>
      </Container>
    </div>
  );
};

export default Banner;
