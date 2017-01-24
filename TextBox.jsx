import React from 'react'

const TextBox = props =>
  <span>{props.children}</span>

TextBox.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default TextBox;
