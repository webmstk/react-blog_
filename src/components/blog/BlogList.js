import React    from 'react';
import BlogItem from './BlogItem';

import { Item } from 'semantic-ui-react';


const BlogList = ({ posts, like }) => {
  const blogItems = posts.map(obj =>
    <BlogItem
      post = { obj }
      key  = { obj.id }
      like = { () => like(obj.id) }
    />
  );

  return (
    <Item.Group>{ blogItems }</Item.Group>
  );
};

BlogList.propTypes = {
  posts: React.PropTypes.array,
  like:  React.PropTypes.func
};

BlogList.defaultProps = {
  posts: []
};


export default BlogList;
