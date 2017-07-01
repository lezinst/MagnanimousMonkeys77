import React from 'react';
import axios from 'axios'

class LectureMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	name: ''
    };
  }

  handleChange (event) {
  	this.setState({
  		name: event.target.value
  	});
  }

  onLectureStart () {
    axios({
	    method: 'post',
	    url: '/lecture',
	    params: {
	      name: this.state.name
	    }
	  }).then((response) => {
  		this.props.startLecture(response.data.lectureId);
	  }).catch((error) => {
	  	console.log(error);
	  })
  }



	render () {
  	return (
      <div className="lecture-maker">
        <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Enter lecture name" />
      	<div className="button green" onClick={this.onLectureStart.bind(this)}>Start Lecture</div>
      </div>
  	)
	}
}

export default LectureMaker
