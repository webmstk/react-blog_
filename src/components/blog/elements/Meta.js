import React from 'react';
import Like  from './Like';

import { formatDate } from 'helpers/date';

import { Item, Divider } from 'semantic-ui-react';


const Meta = ({ author, createdAt, rating, like }) => (
  <Item.Extra>
    <Like
      rating = { rating }
      like   = { like }
      size   = 'mini'
    />

    <Divider />

    <strong>{ author }</strong>
    <span>{ formatDate(createdAt) }</span>
  </Item.Extra>
);

Meta.propTypes = {
  author:    React.PropTypes.string.isRequired,
  createdAt: React.PropTypes.string.isRequired,
  updatedAt: React.PropTypes.string.isRequired,
  rating:    React.PropTypes.number.isRequired,
  like:      React.PropTypes.func
};


export default Meta;
