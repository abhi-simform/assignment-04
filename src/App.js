import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Global/Header/Header";
import Footer from "./Components/Global/Footer/Footer";
import Home from "./Components/Home/Home";
import Recipes from "./Components/Recipes/Recipes";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";

import "./App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
