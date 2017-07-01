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
			<div className="state">
				<div onClick={this.onThumbsCheck.bind(this)} className="button green">Check Thumbs</div>
				<div onClick={this.props.endLecture} className="button red">End Lecture</div>
		  </div>
		)
	}

}

export default LectureButtons;
