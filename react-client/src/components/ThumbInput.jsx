import React from 'react';
import ThumbVisualization from './ThumbVisualization.jsx';
import ThumbSlider from './ThumbSlider.jsx';

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
