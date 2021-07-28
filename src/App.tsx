import React from "react";

import Header from "./components/Header";
import Shelf from "./components/Shelf";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Shelf shelfTitle="Mais Vendidos" />
      <Footer></Footer>
    </div>
  );
}

export default App;
