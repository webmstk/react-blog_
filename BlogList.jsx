import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({ posts }) => {
  const blogItems = posts.map((obj, key) =>
    <BlogItem {...obj, key: key} />
  );

  return <div>{blogItems}</div>;
};

BlogList.propTypes = {
  posts: React.PropTypes.array
};

BlogList.defaultProps = {
  posts: []
};

export default BlogList;
