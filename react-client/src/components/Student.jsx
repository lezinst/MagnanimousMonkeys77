import React from 'react';
import Waiting from './Waiting.jsx';
import ThumbInput from './ThumbInput.jsx';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWaiting: false,
      waitingFor: 'lecture'
    };
  }

  render () {
    return (
      <div className="col-xs-10">
        {this.state.isWaiting === true
        ? <Waiting waitingFor={this.state.waitingFor} />
        : <ThumbInput />}
      </div>
    )
  }
}

export default Student;
