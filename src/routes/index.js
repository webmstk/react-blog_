import MainLayout from 'components/layouts/MainLayout';
import Blog from './Blog';
import About from 'components/About';


export default {
  component: MainLayout,
  childRoutes: [
    {
      path: 'About',
      component: About
    },
    Blog
  ]
};
