import React from "react";
import "./CategoryCard.scss";

const CategoryCard = (props) => {
  const cateImage = props.image;
  const cateTitle = props.title;
  return (
    <div className="category-card">
      <img src={cateImage} alt="" className="category-card__img" />
      <p className="category__title">{cateTitle}</p>
    </div>
  );
};

export default CategoryCard;
