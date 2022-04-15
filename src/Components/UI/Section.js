import React from "react";

import "./Section.scss";

const Section = (props) => {
  const classes = props.className;
  return <section className={classes}>{props.children}</section>;
};

export default Section;
