import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/banner";
import Article from "./components/article/Article";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Article />
    </div>
  );
};

export default App;
