import React from "react";
import Section from "../../UI/Section";
import SectionHeader from "../../UI/SectionHeader";
import Container from "../../UI/Container";
import RecipeCard from "../Recipe/RecipeCard";

import more01 from "../../../assets/images/more/more01.jpg";
import more02 from "../../../assets/images/more/more02.jpg";
import more03 from "../../../assets/images/more/more03.jpg";
import more04 from "../../../assets/images/more/more04.jpg";
import more05 from "../../../assets/images/more/more05.jpg";
import more06 from "../../../assets/images/more/more06.jpg";
import more07 from "../../../assets/images/more/more07.jpg";
import more08 from "../../../assets/images/more/more08.jpg";

import "./MoreRecipe.scss";

const recipeData1 = [
  {
    image: more01,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts ",
    time: "30 Minutes",
    type: "Healthy",
    cardClass: "recipe-card more-card",
  },
  {
    image: more02,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    type: "Western",
    cardClass: "recipe-card more-card",
  },
  {
    image: more03,
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
    type: "Healthy",
    cardClass: "recipe-card more-card",
  },
  {
    image: more04,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
    type: "Eastern",
    cardClass: "recipe-card more-card",
  },
  {
    image: more05,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    time: "30 Minutes",
    type: "Healthy",
    cardClass: "recipe-card more-card",
  },
  {
    image: more06,
    title: "Barbeque Spicy Sandwiches with Chips ",
    time: "30 Minutes",
    type: "Snack",
    cardClass: "recipe-card more-card",
  },
  {
    image: more07,
    title: "Firecracker Vegan Lettuce Wraps - Spicy! ",
    time: "30 Minutes",
    type: "Seafood",
    cardClass: "recipe-card more-card",
  },
  {
    image: more08,
    title: "Chicken Ramen Soup with Mushroom ",
    time: "30 Minutes",
    type: "Japanese",
    cardClass: "recipe-card more-card",
  },
];

const MoreRecipe = () => {
  return (
    <Section className="more-recipe">
      <Container className="more-recipe-container">
        <SectionHeader
          className="more-recipe-header"
          title="Try this delicious recipe to make your day"
          text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        />
        <div className="more-recipe-card-container">
          {recipeData1.map((recipe) => (
            <RecipeCard title={recipe.title} image={recipe.image} time={recipe.time} type={recipe.type} cardClass={recipe.cardClass} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default MoreRecipe;
