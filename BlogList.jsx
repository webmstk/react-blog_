import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({ posts }) => {
  const blogItems = posts.map((obj, key) => {
    obj.key = key;
    return React.createElement(BlogItem, obj);
  });

  return React.createElement('div', null, blogItems);
};

export default BlogList;
