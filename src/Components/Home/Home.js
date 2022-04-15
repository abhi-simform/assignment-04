import React from "react";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Recipe from "./Recipe/Recipe";
import Kitchen from "./Kitchen/Kitchen";
import SocialMedia from "./SocialMedia/SocialMedia";
import MoreRecipe from "./MoreRecipe/MoreRecipe";
import Subscribe from "../Global/Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <Recipe />
      <Kitchen />
      <SocialMedia />
      <MoreRecipe />
      <Subscribe />
    </>
  );
};

export default Home;
