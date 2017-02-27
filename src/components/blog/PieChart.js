import React    from 'react';
import ReactDOM from 'react-dom';

import c3 from 'c3';


class PieChart extends React.Component {

  componentDidMount () {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),

      data: {
        columns: this.props.columns,
        type:   'donut'
      },

      donut: {
        title: 'Рейтинг постов'
      }
    });
  }


  componentWillUnmount () {
    this.chart.destroy();
  }


  componentWillReceiveProps (newProps) {
    this.chart.load({
      columns: newProps.columns
    });
  }


  render () {
    return (
      <div ref='chart' />
    );
  }
}

PieChart.propTypes = {
  columns: React.PropTypes.array
};


export default PieChart;
