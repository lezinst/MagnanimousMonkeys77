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
      thumbRotation: value
    })
  }

  render () {
    return (
      <div className="row">
        <div className="col-xs-5" style={{height: 200}}>
          <Slider vertical min={-180} max={0} marks={{'-180':'Down', '-135':'–', '-90':'Middle', '-45':'–', 0:'Up'}} step={null} onChange={this.changeThumbRotation.bind(this)} defaultValue={-90} />
        </div>
        <div className="col-xs-5">
          <ThumbVisualization thumbRotation={this.state.thumbRotation} />
        </div>
      </div>
    )
  }
}

export default ThumbInput;
