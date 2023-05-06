import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/banner";
import Article from "./components/article/Article";
import ArticleList from "./components/article-list/ArticleList";
import Feed from "./components/feed/Feed";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};

export default App;
