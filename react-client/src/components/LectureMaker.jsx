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
      <div className="row">
      	<div className="col-xs-12">
      	  <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
      	</div>
      	<div className="col-xs-12 text-center">
      	  <a className="btn btn-lg" onClick={this.onLectureStart.bind(this)}>Start Lecture</a>
      	</div>
      </div>
  	)
	}
}

export default LectureMaker
