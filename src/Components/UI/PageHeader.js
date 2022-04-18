import React from "react";

import "./PageHeader.scss";

const PageHeader = (props) => {
  const headingClass = "container page-header " + props.className;
  return (
    <div className={headingClass}>
      <h1 className="page-title">{props.title}</h1>
      <p className="page-text">{props.text}</p>
    </div>
  );
};

export default PageHeader;
