import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Like from './Like';

const moment = require('moment');
moment.locale('ru');

const formatTime = time =>
  moment(time, 'DD-MM-YYYY H:mm:ss').format('DD-MM-YYYY в H:mm');

const BlogItem = ({ text, image, meta: { author, createdAt, updatedAt, rating } }) => (
  <div>
    <Image {...image} />
    <TextBox>{text}</TextBox>
    <br />
    <br />
    <Like rating={rating} />
    <br />
    <div>Автор: {author}</div>
    <div>Создано: {formatTime(createdAt)}</div>
    <div>Обновлено: {formatTime(updatedAt)}</div>
    <hr />
  </div>
);

BlogItem.propTypes = {
  meta: React.PropTypes.shape({
    author:    React.PropTypes.string.isRequired,
    createdAt: React.PropTypes.string.isRequired,
    updatedAt: React.PropTypes.string.isRequired
  })
};

export default BlogItem;
