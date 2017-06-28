import React from 'react';
import LectureMaker from './LectureMaker.jsx';
import LectureButtons from './LectureButtons.jsx';
import ThumbsChecker from './ThumbsChecker.jsx';

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lectureStatus: 'lectureNotStarted',
      checkThumbsActivated: false
    };
  }

  changeLectureStatus (lectureStatus) {
    console.log("lectureStatus", lectureStatus);
    this.setState({
      lectureStatus: lectureStatus
    })
  }

 
  render () {
    return (
      <div>
        <h1>Instructor Component</h1>
        {this.state.lectureStatus === 'lectureNotStarted'
         ? <LectureMaker changeLectureStatus={this.changeLectureStatus.bind(this)}/>
         : this.state.lectureStatus === 'lectureStarted'
         ? <LectureButtons changeLectureStatus={this.changeLectureStatus.bind(this)} />
         : <ThumbsChecker />
        }
      </div>
    )
  }
}

export default Instructor;
