import React from 'react'
import ThumbVisualization from './ThumbVisualization.jsx';
import Countdown from './Countdown.jsx';

class ThumbsChecker extends React.Component {
	constructor(props) {
    super(props);
    this.state = {}
  }

	render () {
		return (
			<div>
				<ThumbVisualization thumbValue={this.props.thumbValue} />
				<Countdown countdown={this.props.countdown} />
			</div>
	  )
   }
}

export default ThumbsChecker;
