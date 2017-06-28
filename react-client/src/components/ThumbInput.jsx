import React from 'react';
import ThumbVisualization from './ThumbVisualization.jsx';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class ThumbInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbRotation: 90
    };
  }

  changeThumbRotation (value) {
    this.setState({
      thumbRotation: value
    })
  }

  render () {
    return (
      <div className="row">
        <div className="col-xs-5" style={{height: 200}}>
          <Slider vertical min={0} marks={{0: '0%', 25: '25%', 50: '50%', 75: '75%', 100: '100%'}} step={null} onChange={this.changeThumbRotation.bind(this)} defaultValue={0} />
        </div>
        <div className="col-xs-5">
          <ThumbVisualization thumbRotation={this.state.thumbRotation} />
        </div>
      </div>
    )
  }
}

export default ThumbInput;
