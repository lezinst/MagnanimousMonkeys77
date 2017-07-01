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
			<div className="thumbs-checker">
				<ThumbVisualization thumbValue={this.props.thumbValue} />
				{ this.props.countdown !== 0
				? <Countdown countdown={this.props.countdown} />
				: <div onClick={this.props.clearThumbsCheck} className="button red">Clear Thumbs</div> }
			</div>
	  )
   }
}

export default ThumbsChecker;
