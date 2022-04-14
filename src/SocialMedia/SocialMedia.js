import React from "react";
import Container from "../UI/Container";
import Section from "../UI/Section";
import SectionHeader from "../UI/SectionHeader";
import { BsInstagram } from "react-icons/bs";
import Post1 from "../assets/images/post/post01.jpg";
import Post2 from "../assets/images/post/post02.jpg";
import Post3 from "../assets/images/post/post03.jpg";
import Post4 from "../assets/images/post/post04.jpg";

import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <Section className="social">
      <Container className="social-container">
        <SectionHeader
          className="social-header"
          title="Check out @foodieland on Instagram"
          text="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
        ></SectionHeader>
        <div className="posts-container">
          <div className="post__wrapper">
            <img src={Post1} alt="" className="post" />
          </div>
          <div className="post__wrapper">
            <img src={Post2} alt="" className="post" />
          </div>
          <div className="post__wrapper">
            <img src={Post3} alt="" className="post" />
          </div>
          <div className="post__wrapper">
            <img src={Post4} alt="" className="post" />
          </div>
        </div>
        <a href="#" className="button">
          Visit Our Instagram <BsInstagram />{" "}
        </a>
      </Container>
    </Section>
  );
};

export default SocialMedia;
