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
      <div className="row">
        <div className="row">
          <div className="col-xs-5" style={{height: 200}}>
            <Slider vertical min={0} max={4} marks={{0:'Down', 1:'–', 2:'Middle', 3:'–', 4:'Up'}} step={null} onChange={this.props.changeThumbValue} defaultValue={2} />
          </div>
          <div className="col-xs-5">
            <ThumbVisualization thumbValue={this.props.thumbValue} />
          </div>
        </div>
        <div className="row">
          <Countdown />
        </div>
    </div>
    )
  }
}

export default ThumbInput;
