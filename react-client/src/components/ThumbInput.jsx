import React from 'react';
import ThumbVisualization from './ThumbVisualization.jsx';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class ThumbInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  log (value) {
    console.log(value)
  }

  render () {
    return (
      <div>
        <ThumbSlider />
      </div>
    )
  }
}

export default ThumbInput;
