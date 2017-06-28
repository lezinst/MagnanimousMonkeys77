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
          <i style={{transform: `rotate(${this.props.thumbRotation}deg)`}} className="fa fa-thumbs-o-up" aria-hidden="true"></i>
		    </div>
		  </div>
	  );
	 }

 }

 export default ThumbVisualization;
