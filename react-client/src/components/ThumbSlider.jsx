import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class ThumbSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 2, max: 10 }
    };
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

export default ThumbSlider;
