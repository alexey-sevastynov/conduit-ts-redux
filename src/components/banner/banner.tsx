import React from "react";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <main>
      <div>
        <div className="bg-green h-20 w-full shadow text-white p-8 jmb-8"></div>
      </div>
    </main>
  );
};

export default Banner;
