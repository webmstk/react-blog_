import React from 'react';

const Like = ({ rating, like }) => (
  <div>
    <div>Рейтинг: {rating}</div>
    <button onClick={like}>нравится</button>
  </div>
);

Like.propTypes = {
  rating: React.PropTypes.number,
  like:   React.PropTypes.func
};

Like.defaultProps = {
  rating: 0
};

export default Like;
