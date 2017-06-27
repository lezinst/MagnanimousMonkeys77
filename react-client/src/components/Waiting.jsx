import React from 'react';

class Waiting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        {this.props.waitingFor === 'lecture'
        ? <div><p>Welcome to ThumbsCheck.</p><p>Waiting for lecture to start.</p></div>
        : this.props.waitingFor === 'question'
        ? <div><p>The lecture has begun.</p><p>Waiting for first question.</p></div>
        : <div><p>Your thumb has been recorded.</p><p>Waiting for the next question.</p></div>}
      </div>
    )
  }
}

export default Waiting;
