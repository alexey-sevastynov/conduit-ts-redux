import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div max-w-screen-lg mx-auto>
      {children}
    </div>
  );
};

export default Container;
