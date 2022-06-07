import React from "react";
import { RiTimerFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import hero from "../../../assets/images/hero.webp";
import hotrecipes from "../../../assets/images/hot-recipes.svg";
import heroperson from "../../../assets/images/hero-hero.webp";
import { AiFillPlayCircle } from "react-icons/ai";

import "./Slide.scss";

const Slide = () => {
  return (
    <div className="hero-slide">
      <div className="slide-left">
        <div className="slide-left-top">
          <span className="slide__tag">
            <img src={hotrecipes} alt="" /> Hot Recipes
          </span>
          <h1 className="slide__title">Spicy delicious chicken wings</h1>
          <p className="slide__text">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div className="slide__info">
            <div className="slide__info-bit">
              <div>
                <RiTimerFill /> <span>30 Minutes</span>
              </div>
            </div>
            <div className="slide__info-bit">
              <div>
                <ImSpoonKnife /> <span>Chicken</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-left-bottom">
          <div className="hero__person">
            <img src={heroperson} alt="" className="hero__person--image" />
            <div className="hero__person-details">
              <p className="name">John Smith</p>
              <span>15 March 2022</span>
            </div>
          </div>
          <div className="button">
            <a href="">View Recipe</a>
            <AiFillPlayCircle />
          </div>
        </div>
      </div>
      <div className="slide-right">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Slide;
