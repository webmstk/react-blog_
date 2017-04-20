import React   from 'react';
import Image   from './elements/Image';
import TextBox from './elements/TextBox';
import Meta    from './elements/Meta';
import Link    from 'components/elements/Link';

import { assign } from 'lodash';

import { Item, Divider } from 'semantic-ui-react';


const BlogPost = ({ post, like }) => (
  <Item>
    <Image {...post.image} />

    <Item.Content>
      <Item.Header>
        <Link to={post.url}>{ post.title }</Link>
      </Item.Header>

      <TextBox>{ post.text }</TextBox>

      <Meta { ...(assign({}, post.meta, { like })) } />

      <Divider hidden />
    </Item.Content>
  </Item>
);

BlogPost.propTypes = {
  post: React.PropTypes.object,
  like: React.PropTypes.func,
};

export default BlogPost;
