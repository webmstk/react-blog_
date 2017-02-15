import React from 'react'
import BlogItem from './BlogItem'

const BlogList = ({ posts, like }) => {
  const blogItems = posts.map(obj =>
    <BlogItem post={obj} key={obj.id} like={() => like(obj.id)} />
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
