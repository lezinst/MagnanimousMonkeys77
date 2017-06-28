import React from 'react';

 class ThumbVisualization extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {}
	  }

	 render() {
	 	return (
		  <div className="row">
		    <div className="col-xs-12 text-center">
          <i style={{transform: `rotate(${(45 * this.props.thumbValue) - 180}deg)`, fontSize: '212px'}} className="fa fa-thumbs-o-up" aria-hidden="true"></i>
		    </div>
		  </div>
	  );
	 }

 }

 export default ThumbVisualization;
