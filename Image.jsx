import React from 'react';

const Image = props =>
  React.createElement('img', props);

Image.propTypes = {
  src:    React.PropTypes.string.isRequired,
  width:  React.PropTypes.number,
  height: React.PropTypes.number,
  alt:    React.PropTypes.string
};

Image.defaultProps = {
  alt: 'изображение к посту'
};

export default Image;
