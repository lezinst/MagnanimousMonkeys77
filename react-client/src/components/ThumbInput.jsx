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
        <div style={{height: 200}}>
          <Slider vertical min={0} marks={{0: '0%', 25: '25%', 50: '50%', 75: '75%', 100: '100%'}} step={null} onChange={this.log} defaultValue={0} />
        </div>
    </div>
    )
  }
}

export default ThumbInput;
