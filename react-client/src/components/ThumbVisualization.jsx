import React from 'react';
 
 class ThumbVisualization extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	    	deg: '45'
	    }
	  }

	 render() {
        const styles = { 
          transform: `rotate(${this.state.deg}deg)` 
        };

	 	return (
		  <div className="row">
		    <div className="col-xs-12 text-center">
		      <div><img style={styles} src={require('../assets/thumb.png')}/></div>
		    </div>
		  </div> 	
	  );
	 }	
 
 }
 
 export default ThumbVisualization; 