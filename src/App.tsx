import React from "react";

import "./App.css";
import Header from "./components/header/Header";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
