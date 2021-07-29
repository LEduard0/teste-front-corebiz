import React from "react";

import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Shelf from "./components/Shelf";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Shelf shelfTitle="Mais Vendidos" />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
