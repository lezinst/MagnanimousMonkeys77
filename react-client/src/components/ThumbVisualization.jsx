import React from 'react';

 class ThumbVisualization extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {}
	  }

	 render() {
	 	return (
		  <div className="thumb-visualization">
        <i style={{transform: `rotate(${(45 * this.props.thumbValue) - 180}deg)`, fontSize: '424px'}} className="fa fa-thumbs-o-up" aria-hidden="true"></i>
		  </div>
	  );
	 }

 }

 export default ThumbVisualization;
