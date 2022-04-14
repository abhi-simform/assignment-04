import React from "react";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";
import Container from "../UI/Container";

import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <Section className="subscribe">
      <Container className="subscribe-container">
        <SectionHeader
          title="Deliciousness to your inbox"
          text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        />
        <form action="">
          <input type="text" name="" id="" placeholder="Your Email Address" />
          <input type="submit" value="Subscribe" />
        </form>
      </Container>
    </Section>
  );
};

export default Subscribe;
