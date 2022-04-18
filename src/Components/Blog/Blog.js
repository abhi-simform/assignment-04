import React from "react";
import Subscribe from "../Global/Subscribe/Subscribe";
import RecipePlus from "../Global/RecipePlus/RecipePlus";
import PageHeader from "../UI/PageHeader";
import BlogSearch from "./BlogSearch";

const Blog = () => {
  return (
    <>
      <PageHeader
        title="Blog & Article"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <BlogSearch />
      <Subscribe />
      <RecipePlus />
    </>
  );
};

export default Blog;
