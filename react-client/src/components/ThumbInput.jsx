import React from 'react';
import ThumbVisualization from './ThumbVisualization.jsx';
import Countdown from './Countdown.jsx';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class ThumbInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render () {
    return (
      <div className="thumb-input">
        <div className="thumb-input-slider">
          <Slider vertical min={0} max={4} marks={{0:'Down', 1:'–', 2:'Middle', 3:'–', 4:'Up'}} step={null} onChange={this.props.changeThumbValue} defaultValue={2} />
        </div>
        
        <ThumbVisualization thumbValue={this.props.thumbValue} />
        <Countdown countdown={this.props.countdown} />
      </div>
    )
  }
}

export default ThumbInput;
