import React from 'react';

import { LIKE_BUTTON_TEXT } from 'constants/Blog';

import { Button } from 'semantic-ui-react';


const Like = ({ rating, like, size, content }) => {
  const label = {
    basic:     true,
    content:   rating,
    pointing: 'left',
    as:       'div',
  };

  return (
    <Button
      label   = { label }
      onClick = { like }
      size    = { size }
      content = { content }
      icon    = 'heart'
    />
  );
};

Like.propTypes = {
  rating:  React.PropTypes.number,
  like:    React.PropTypes.func,
  size:    React.PropTypes.string,
  content: React.PropTypes.string
};

Like.defaultProps = {
  rating:   0,
  size:    'medium',
  content: LIKE_BUTTON_TEXT
};


export default Like;
