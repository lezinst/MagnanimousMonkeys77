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
  }

  render () {
    return (
      <div className="col-xs-10">
        {this.props.lectureStatus === 'lectureNotStarted'
        ? <Waiting waitingFor={'lecture'} />
        : this.props.lectureStatus === 'lectureStarted'
        ? <Waiting waitingFor={'question'} />
        : <ThumbInput />}
      </div>
    )
  }
}

export default Student;
