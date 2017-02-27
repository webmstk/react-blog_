import React   from 'react';
import Image   from './elements/Image';
import TextBox from './elements/TextBox';
import Meta    from './elements/Meta';

import { assign } from 'lodash';

import { Item, Divider } from 'semantic-ui-react';


const BlogItem = ({ post, like }) => (
  <Item>
    <Image {...post.image} />

    <Item.Content>
      <Item.Header>{ post.title }</Item.Header>

      <TextBox>{ post.text }</TextBox>

      <Meta { ...(assign({}, post.meta, { like })) } />

      <Divider hidden />
    </Item.Content>
  </Item>
);

BlogItem.propTypes = {
  post: React.PropTypes.object,
  like: React.PropTypes.func,
};


export default BlogItem;
