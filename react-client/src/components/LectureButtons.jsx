import React from 'react';
import axios from 'axios';

class LectureButtons extends React.Component {
	constructor (props) {
		super(props);
		this.state = {

		};
	}

  onThumbsCheck () {
  	console.log('onThumbsCheck is being called');
  	console.log('this.props.lectureId', this.props.lectureId);
    axios({
	    method: 'post',
	    url: '/checkthumbs',
	    params: {
	      lecture_id: this.props.lectureId
	    }
	  }).then((response) => {
  		this.props.startThumbsCheck(response.data.questionId);
	  }).catch((error) => {
	  	console.log(error);
	  })
  }

	render () {
		return (
			<div>
				 <div className="row">
				   <div className="col-xs-12 text-center"><a onClick={this.onThumbsCheck.bind(this)}className="btn btn-danger btn-lg">Check Thumbs</a></div>
				 </div>
				 <div className="row">
				   <div className="col-xs-12 text-center"><a onClick={this.props.endLecture} className="btn btn-danger btn-lg">End Lecture</a></div>
				 </div>			
		  </div>
		)
	}

}

export default LectureButtons;
