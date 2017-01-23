import React from 'react'

const TextBox = props =>
  React.createElement('span', null, props.children);

TextBox.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default TextBox;
