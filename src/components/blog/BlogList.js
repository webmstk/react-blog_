import React    from 'react';
import BlogPost from './BlogPost';

import { Item } from 'semantic-ui-react';


const BlogList = ({ posts, like }) => {
  const items = posts.map(obj =>
    <BlogPost
      post = { obj }
      key  = { obj.id }
      like = { () => like(obj.id) }
    />
  );

  return (
    <Item.Group>{ items }</Item.Group>
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
