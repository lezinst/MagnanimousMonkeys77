import React from 'react';
import CheckThumbsButton from './CheckThumbsButton.jsx';
import EndLectureButton from './EndLectureButton.jsx'

class LectureButtons extends React.Component {
	constructor (props) {
		super(props);
		this.state = {

		};
	}

	render () {
		return (
			<div>
		     <CheckThumbsButton />
		     <EndLectureButton />
		  </div>
		)
	}

}

export default LectureButtons;