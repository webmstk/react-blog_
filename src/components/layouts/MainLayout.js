import React from 'react';

import Link from 'components/elements/Link';
import MenuLink from 'components/elements/MenuLink';

import history from 'helpers/history';

import { Menu, Segment, Header, Container, Button } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    <Menu secondary>
      <MenuLink to='/'>Блог</MenuLink>
      <MenuLink to='/about'>О Сайте</MenuLink>
    </Menu>
    <GoBackButton />

    { children }

    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: React.PropTypes.node
};

export default MainLayout;

const GoBackButton = () => (
  <Button onClick={ () => history.goBack() }>Назад</Button>
);

const Logo = () => (
  <Segment>
    <Header>
      <Link to='/'>Thinknetica Blog</Link>
    </Header>
  </Segment>
);

const Footer = () => (
  <Segment>
    Powered by React Course.
  </Segment>
);
