import React   from 'react';
import request from 'superagent';

import BlogList from './blog/BlogList';
import PieChart from './blog/PieChart';

import { cloneDeep } from 'lodash';
import { BLOG_NAME } from 'constants/Blog';

import { Grid, Container, Header, Icon, Divider } from 'semantic-ui-react';


class Posts extends React.Component {

  constructor (props) {
    super(props);

    this.state = { posts: [] };
    this.like  = this.like.bind(this);
  }

  componentDidMount () {
    this.fetchPosts();
  }

  fetchPosts () {
    request.get(
      'http://localhost:3001',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
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
      <Grid>
        <Grid.Column width={ 12 }>
          <Container>
            <Header as='h1' icon textAlign='center'>
              <Icon name='smile' />
              <Header.Content>{ BLOG_NAME }</Header.Content>
            </Header>

            <BlogList
              posts = { posts }
              like  = { this.like }
            />

            <Divider hidden />
          </Container>
        </Grid.Column>
        <Grid.Column width={ 4 }>
          <PieChart
            columns = {
              posts.map(el => [el.title, el.meta.rating])
            }
          />
        </Grid.Column>
      </Grid>
    );
  }
}


export default Posts;
