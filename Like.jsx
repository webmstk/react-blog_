import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rating: props.rating };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ rating: ++this.state.rating });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <div>Рейтинг: {rating}</div>
        <button onClick={this.update}>нравится</button>
      </div>
    );
  }
}

Like.propTypes = {
  rating: React.PropTypes.number
};

Like.defaultProps = {
  rating: 0
};

export default Like;
