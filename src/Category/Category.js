import React from "react";
import Section from "../UI/Section";
import Container from "../UI/Container";
import CategoryCard from "./CategoryCard";
import CategoryHeader from "./CategoryHeader";
import "./Category.scss";

import category01 from "../assets/images/category/category01.svg";
import category02 from "../assets/images/category/category02.svg";
import category03 from "../assets/images/category/category03.svg";
import category04 from "../assets/images/category/category04.svg";
import category05 from "../assets/images/category/category05.svg";
import category06 from "../assets/images/category/category06.svg";

const categoryData = [
  {
    title: "Brakfast",
    image: category01,
  },
  {
    title: "Vegan",
    image: category02,
  },
  {
    title: "Meat",
    image: category03,
  },
  {
    title: "Dessert",
    image: category04,
  },
  {
    title: "Lunch",
    image: category05,
  },
  {
    title: "Chocolate",
    image: category06,
  },
];

const Category = () => {
  return (
    <Section className="category-section">
      <Container className="category-container">
        <CategoryHeader />
        <div className="category-card-container">
          {categoryData.map((category) => (
            <CategoryCard title={category.title} image={category.image} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Category;
