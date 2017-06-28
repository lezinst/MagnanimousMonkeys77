import React from 'react';
import ThumbVisualization from './ThumbVisualization.jsx';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class ThumbInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbRotation: -90
    };
  }

  changeThumbRotation (value) {
    this.setState({
      thumbRotation: (45 * value) - 180
    })
  }

  render () {
    return (
      <div className="row">
        <div className="col-xs-5" style={{height: 200}}>
          <Slider vertical min={0} max={4} marks={{0:'Down', 1:'–', 2:'Middle', 3:'–', 4:'Up'}} step={null} onChange={this.changeThumbRotation.bind(this)} defaultValue={2} />
        </div>
        <div className="col-xs-5">
          <ThumbVisualization thumbRotation={this.state.thumbRotation} />
        </div>
      </div>
    )
  }
}

export default ThumbInput;
