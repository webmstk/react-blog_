import React from 'react';

import { Image as ImageUI } from 'semantic-ui-react';


const Image = ({ src, width, height, alt  }) =>
  <ImageUI
    src    = { src }
    width  = { width }
    height = { height }
    alt    = { alt }
  />;

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
