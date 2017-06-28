import React from 'react';
import CheckThumbsButton from './CheckThumbsButton.jsx';
import EndLectureButton from './EndLectureButton.jsx'

class LectureButtons extends React.Component {
	constructor (props) {
		super(props);
		this.state = {

		};
	}

  onCheckThumbsButtonClick () {
    axios({
	    method: 'post',
	    url: '/lecture',
	    params: {
	      name: this.state.name
	    }
	  }).then((response) => {
  		this.props.changeLectureStatus('lectureStarted');	
	  }).catch((error) => {
	  	console.log(error);
	  })
  }

	render () {
		return (
			<div>
		     <CheckThumbsButton onCheckThumbsButtonClick={this.onCheckThumbsButtonClick.bind(this)} />
		     <EndLectureButton />
		  </div>
		)
	}

}

export default LectureButtons;