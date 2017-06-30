import React from 'react';

 class Countdown extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	    	
	    };
	  }

	 render() {
	 	return (
	  <div className="row">
	    <div className="col-xs-12 text-center"><span className="well well-lg">{this.props.countdown}</span></div>
	  </div>
	  );
	 }

 }

 export default Countdown;
