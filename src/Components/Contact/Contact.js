import React from "react";
import Subscribe from "../Global/Subscribe/Subscribe";
import Form from "./Form/Form";
import RecipePlus from "../Global/RecipePlus/RecipePlus";
import PageHeader from "../UI/PageHeader";

import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <PageHeader className="form-header" title="Contact us"></PageHeader>
      <Form />
      <Subscribe />
      <RecipePlus />
    </>
  );
};

export default Contact;
