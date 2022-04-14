import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Recipe from "./Recipe/Recipe";
import Kitchen from "./Kitchen/Kitchen";
import SocialMedia from "./SocialMedia/SocialMedia";
import MoreRecipe from "./MoreRecipe/MoreRecipe";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Recipe />
      <Kitchen />
      <SocialMedia />
      <MoreRecipe />
      <Subscribe />
      <Footer />
      <div></div>
    </>
  );
};

export default App;
