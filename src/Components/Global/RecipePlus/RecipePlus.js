import React from "react";
import Section from "../../UI/Section";
import SectionHeader from "../../UI/SectionHeader";
import Container from "../../UI/Container";
import RecipeCard from "../../Home/Recipe/RecipeCard";

import recipe01 from "../../../assets/images/recipe/recipe01.webp";
import recipe02 from "../../../assets/images/recipe/recipe02.webp";
import recipe03 from "../../../assets/images/recipe/recipe03.webp";
import recipe04 from "../../../assets/images/recipe/recipe04.webp";

import "./RecipePlus.scss";

const recipeData = [
  {
    image: recipe01,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    type: "Snack",
    cardClass: "recipe-card recipeplus-card",
  },
  {
    image: recipe02,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    time: "30 Minutes",
    type: "Fish",
    cardClass: "recipe-card recipeplus-card",
  },
  {
    image: recipe03,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    time: "30 Minutes",
    type: "Breakfast",
    cardClass: "recipe-card recipeplus-card",
  },
  {
    image: recipe04,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    time: "30 Minutes",
    type: "Healthy",
    cardClass: "recipe-card recipeplus-card",
  },
];

const RecipePlus = () => {
  return (
    <Section className="recipe-plus">
      <SectionHeader title="You may like these recipe too" />
      <Container className="recipeplus-container">
        {recipeData.map((recipe, index) => (
          <RecipeCard key={index} image={recipe.image} title={recipe.title} time={recipe.time} type={recipe.type} cardClass={recipe.cardClass} />
        ))}
      </Container>
    </Section>
  );
};

export default RecipePlus;
