import React from 'react'
import ThumbVisualization from './ThumbVisualization.jsx';
import Countdown from './Countdown.jsx';

class ThumbsChecker extends React.Component {
	constructor(props) {
    super(props);
    this.state = {

    }

  }

	render () {
		return (
			<div>
				<ThumbVisualization thumbValue={this.props.thumbValue} />
				{this.props.countdown !== 0 ? 
				<Countdown countdown={this.props.countdown} /> :
				<div className="row">
  				  <div className="col-xs-12 text-center">
  				    <a onClick={this.props.clearThumbsCheck} className="btn btn-primary btn-lg">Clear Thumbs</a>
  				  </div>
 				</div>
				}
				
			</div>
	  )
   }
}

export default ThumbsChecker;
