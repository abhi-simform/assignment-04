import React from "react";
import Section from "../../UI/Section";
import SectionHeader from "../../UI/SectionHeader";
import Container from "../../UI/Container";

import KitchenImage from "../../../assets/images/kitchen/kitchen-chef.png";

import "./Kitchen.scss";

const Kitchen = () => {
  return (
    <Section className="kitchen">
      <Container className="kitchen-container">
        <div className="kitchen-left">
          <SectionHeader
            className="kitchen-header"
            title="Everyone can be a chef in their own kitchen"
            text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
          />
          <a href="" className="button">
            Learn More
          </a>
        </div>
        <div className="kitchen-right">
          <div className="kitchen-img-wrapper">
            <img src={KitchenImage} alt="" className="kitchen__img" />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Kitchen;
