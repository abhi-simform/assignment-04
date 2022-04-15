import React from "react";

import "./SectionHeader.scss";

const SectionHeader = (props) => {
  const headingClass = "section-header " + props.className;
  return (
    <div className={headingClass}>
      <h2 className="section-title">{props.title}</h2>
      <p className="section-text">{props.text}</p>
    </div>
  );
};

export default SectionHeader;
