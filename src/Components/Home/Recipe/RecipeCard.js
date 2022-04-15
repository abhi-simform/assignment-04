import React from "react";
import "./RecipeCard.scss";
// import { BsSuitHeartFill } from "react-icons/bs";
import Heart from "../../UI/Heart";
import { RiTimerFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";

const RecipeCard = (props) => {
  // const heartClass = "recipe-heart " + props.favourite;
  return (
    <div className={props.cardClass}>
      <img src={props.image} alt="" className="recipe__img" />
      <Heart />
      <h3 className="recipe__title">{props.title}</h3>
      <div className="recipe__info">
        <RiTimerFill />
        <span>{props.time}</span>
        <ImSpoonKnife />
        <span>{props.type}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
