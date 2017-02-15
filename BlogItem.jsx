import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Like from './Like';

const moment = require('moment');
moment.locale('ru');

const formatTime = time =>
  moment(time, 'DD-MM-YYYY H:mm:ss').format('DD-MM-YYYY в H:mm');

const BlogItem = ({ post, like }) => (
  <div id={`blog-id-${id}`}>
    <Image {...post.image} />
    <TextBox>{post.text}</TextBox>
    <br />
    <br />
    <Like rating={post.meta.rating} />
    <br />
    <div>Автор: {post.meta.author}</div>
    <div>Создано: {formatTime(post.meta.createdAt)}</div>
    <div>Обновлено: {formatTime(post.meta.updatedAt)}</div>
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
