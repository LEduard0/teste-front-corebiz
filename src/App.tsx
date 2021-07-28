import React from "react";

import Header from "./components/Header";
import Shelf from "./components/Shelf";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Shelf shelfTitle="Mais Vendidos" />
    </div>
  );
}

export default App;
