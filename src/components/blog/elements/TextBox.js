import React from 'react';

import { Item } from 'semantic-ui-react';


const TextBox = props =>
  <Item.Description>{ props.children }</Item.Description>;

TextBox.propTypes = {
  children: React.PropTypes.string.isRequired
};


export default TextBox;
