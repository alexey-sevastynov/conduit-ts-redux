import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/banner";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
};

export default App;
