import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Student from './components/Student.jsx';
import Instructor from './components/Instructor.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login'
    }
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-default">
          <span className="navbar-brand">Thumbs Check</span>
        </nav>
        <div className="row">
          <div className="col-xs-10">
            {this.state.view === 'login'
              ? <Login />
              : this.state.view === 'student'
              ? <Student />
              : <Instructor /> }
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
