import Posts   from 'components/Posts';
import Post    from 'components/Post';

import { postsPath } from 'helpers/routes';


const Index = {
  path: '/',
  component: Posts
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default {
  childRoutes: [
    Index,
    PostRoute
  ]
};
