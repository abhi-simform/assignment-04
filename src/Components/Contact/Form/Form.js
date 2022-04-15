import React from "react";
import Section from "../../UI/Section";
import Container from "../../UI/Container";
import SectionHeader from "../../UI/SectionHeader";

import "./Form.scss";

import formChef from "./form-chef.png";

const Form = () => {
  return (
    <Section id="contact" className="form-section">
      <Container className="form-container">
        <SectionHeader className="form-header" title="Contact us"></SectionHeader>
        <form className="form">
          <div className="form-top">
            <div className="form__image">
              <img src={formChef} alt="form-chef" />
            </div>
            <div className="form__content">
              <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="subject">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" />
              </div>
              <div className="enquiry-select">
                <label htmlFor="enquiry-select">Enquiry Type</label>
                <select id="enquiry-select">
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="8"></textarea>
              </div>
            </div>
          </div>
          <div className="form__submit">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Container>
    </Section>
  );
};

export default Form;
