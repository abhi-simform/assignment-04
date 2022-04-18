import React from "react";

import "./BlogSearch.scss";

const BlogSearch = () => {
  return (
    <div className="blog-search">
      <form action="" className="search-form">
        <input type="text" className="search-input" placeholder="Search article, news or recipe..." />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;
