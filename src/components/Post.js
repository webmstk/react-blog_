import React, { PropTypes } from 'react';
import request from 'superagent';

import BlogPost from './blog/BlogPost';

import { Item } from 'semantic-ui-react';

import { cloneDeep } from 'lodash';


class Post extends React.Component {
  constructor (props) {
    super(props);

    this.state = { post: { src: '' } };
    this.like = this.like.bind(this);
  }

  componentDidMount () {
    this.fetchPost();
  }

  fetchPost () {
    request.get(
      `http://localhost:3001/post/${this.props.params.id}`,
      {},
      (err, res) => this.setState({ post: res.body })
    );
  }

  like () {
    const post = cloneDeep(this.state.post);
    post.meta.rating = post.meta.rating + 1;

    this.setState({ post });
  }

  render () {
    const { post } = this.state;

    return (
      <Item.Group>
        <BlogPost post={ post } like={ this.like } />
      </Item.Group>
    );
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
