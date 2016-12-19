import React from 'react';
import BlogList from './BlogList';

const BlogPage = ({ posts }) =>
  React.createElement(BlogList, { posts });

export default BlogPage;
