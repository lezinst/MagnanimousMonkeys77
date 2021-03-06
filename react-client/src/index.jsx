import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Student from './components/Student.jsx';
import Instructor from './components/Instructor.jsx';
import axios from 'axios';

const io = require('socket.io-client');
const socket = io();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      tokenId: '',
      lectureStatus: 'lectureNotStarted',
      lectureId: '',
      questionId:'',
      thumbValue: 2,
      countdown: 10
    }
  }

  componentDidMount() {
    this.setState({ view: 'login' });
  }

  onSignIn(googleUser) {
    let tokenId = googleUser.tokenId;
    axios({
      method: 'get',
      url: '/login',
      params: {
        tokenId: tokenId
      }
    })
    .then(result => {
      if (result.data[0].user_type === 'STUDENT') {
        this.setState({ view: 'student'});
      } else if (result.data[0].user_type === 'INSTRUCTOR') {
        this.setState({ view: 'instructor'});
      }
      socket.emit('username', { username: googleUser.profileObj.email })
    });

  }

  startLecture (lectureId) {
    this.setState({
      lectureStatus: 'lectureStarted',
      lectureId: lectureId,
    })
  }

  endLecture () {
    this.setState({
      lectureStatus: 'lectureNotStarted',
      lectureId: ''
    })
  }

  setInterval () {
    setInterval (() => {
      this.state.countdown === 0
      ? clearInterval(this.setInterval)
      : this.setState({ countdown: this.state.countdown - 1 }, () => {
        console.log('this.state.countdown', this.state.countdown);
        socket.emit('thumbValue', { thumbValue: this.state.thumbValue });
      });
    }, 1000)
  }

  startThumbsCheck (questionId) {
    this.setState({
      lectureStatus: 'checkingThumbs',
      questionId: questionId
    }, this.setInterval)
  }

  endThumbsCheck () {
    this.setState({
      lectureStatus: 'lectureStarted',
      questionId: ''
    })
  }

  clearThumbsCheck () {
    this.setState({
      lectureStatus: 'lectureStarted'
    })
  }

  changeThumbValue (value) {
    this.setState({
      thumbValue: value
    })
  }


  render () {
    return (
      <div>
        <nav className="navbar navbar-default">
          <span className="navbar-brand">ThumbsCheck</span>
        </nav>
        <div className="row">
          <div className="col-xs-10">
            {this.state.view === 'login'
              ? <Login onSignIn={this.onSignIn.bind(this)}/>
              : this.state.view === 'student'
              ? <Student thumbValue={this.state.thumbValue} changeThumbValue={this.changeThumbValue.bind(this)} startThumbsCheck={this.startThumbsCheck.bind(this)} startLecture={this.startLecture.bind(this)} lectureStatus={this.state.lectureStatus} />
            : <Instructor thumbValue={this.state.thumbValue} lectureId={this.state.lectureId} lectureStatus={this.state.lectureStatus} startLecture={this.startLecture.bind(this)} endLecture={this.endLecture.bind(this)} startThumbsCheck={this.startThumbsCheck.bind(this)} endThumbsCheck={this.endThumbsCheck.bind(this)}/> }
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
