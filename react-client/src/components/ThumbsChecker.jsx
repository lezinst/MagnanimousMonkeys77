import React from 'react'
import ThumbVisualization from './ThumbVisualization.jsx'

class ThumbsChecker extends React.Component {
	constructor(props) {
    super(props);
    this.state = {}
  }

	render () {
		return (
			<div>
				<ThumbVisualization thumbValue={this.props.thumbValue} />
			</div>
	  )
   }
}

export default ThumbsChecker;
