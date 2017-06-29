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
        ? <div><p>Welcome to ThumbsCheck.</p><p>Waiting for this lecture to start.</p></div>
        : <div><p>This lecture has begun.</p><p>Waiting for question.</p></div>}
      </div>
    )
  }
}

export default Waiting;
