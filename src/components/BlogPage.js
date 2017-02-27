import React    from 'react';
import BlogList from './blog/BlogList';
import PieChart from './blog/PieChart';

import { cloneDeep } from 'lodash';
import { BLOG_NAME } from 'constants/Blog';
import posts         from 'constants/static/posts';

import { Container, Header, Icon, Divider } from 'semantic-ui-react';


class BlogPage extends React.Component {

  constructor (props) {
    super(props);

    this.state = { posts };
    this.like  = this.like.bind(this);
  }


  like (postId) {
    const posts = cloneDeep(this.state.posts);

    const newPosts = posts.map(item => {
      if (item.id == postId) {
        item.meta.rating = item.meta.rating + 1;
      }

      return item;
    });

    this.setState({ posts: newPosts });
  }


  render () {
    const { posts } = this.state;

    return (
      <Container>
        <Header as='h1' icon textAlign='center'>
          <Icon name='smile' />
          <Header.Content>{ BLOG_NAME }</Header.Content>
        </Header>

        <BlogList
          posts = { posts }
          like  = { this.like }
        />

        <PieChart
          columns = {
            posts.map(el => [el.title, el.meta.rating])
          }
        />

        <Divider hidden />
      </Container>
    );
  }
}


export default BlogPage;
