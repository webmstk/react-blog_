import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({ posts }) => {
  const blogItems = posts.map((obj, key) =>
    React.createElement(BlogItem, Object.assign({}, obj, { key: key }))
  );

  return React.createElement('div', null, blogItems);
};

BlogList.propTypes = {
  posts: React.PropTypes.array
};

BlogList.defaultProps = {
  posts: []
};

export default BlogList;
