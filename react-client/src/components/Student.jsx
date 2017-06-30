import React from 'react';
import Waiting from './Waiting.jsx';
import ThumbInput from './ThumbInput.jsx';

const io = require('socket.io-client');
const socket = io();

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    socket.on('lectureStarted', (data) => {
      props.startLecture(data.lectureId);
    })

    socket.on('checkingThumbs', (data) => {
      props.startThumbsCheck(data.questionId);
    })

    socket.on('lectureEnded', (data) => {
      props.endLectureStudent();
    })
  }

  render () {
    return (
      <div className="col-xs-10">
        {this.props.lectureStatus === 'lectureNotStarted'
        ? <Waiting waitingFor={'lecture'} />
        : this.props.lectureStatus === 'lectureStarted'
        ? <Waiting waitingFor={'question'} />
      : <ThumbInput countdown={this.props.countdown} thumbValue={this.props.thumbValue} changeThumbValue={this.props.changeThumbValue} />}
      </div>
    )
  }
}

export default Student;
