import React from 'react';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'waiting',
      waitingFor: 'lecture'
    };
  }

  render () {
    return (
      <div>
        <h1>Student Component</h1>
        {this.state.status === 'waiting'
        ? <Waiting waitingFor={this.status.waitingFor} />
        : <ThumbInput />}
      </div>
    )
  }
}

export default Student;
