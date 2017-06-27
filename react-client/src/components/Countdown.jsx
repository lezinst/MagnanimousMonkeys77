import React from 'react';
 
 class Countdown extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	    	seconds: seconds
	    };
	  }

	 render() {
	  <div className="row">
	    <div className="col-xs-12 text-center"><span className="well well-lg">{this.state.seconds}</span></div>
	  </div> 	
	 }	
 
 }
 
 export default Countdown; 