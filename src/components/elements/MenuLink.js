import React from 'react';
import { Link } from 'react-router';

const MenuLink = (props) =>
  <Link {...props} activeClassName='active' className='item' />;

export default MenuLink;
