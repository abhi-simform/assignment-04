import React from "react";

import "./CategoryHeader.scss";

const CategoryHeader = () => {
  return (
    <div className="section-header category-header">
      <h2 className="section-title">Categories</h2>
      <button className="button button-secondary">View All Categories</button>
    </div>
  );
};

export default CategoryHeader;
