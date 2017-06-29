import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Student from './components/Student.jsx';
import Instructor from './components/Instructor.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      tokenId: '',
      lectureStatus: 'lectureNotStarted',
      lectureId: '',
      questionId:''
    }
  }

  componentDidMount() {
    this.setState({ view: 'login' });
  }

  onSignIn(googleUser) {
    console.log(googleUser);
    let tokenId = googleUser.tokenId;
    axios({
      method: 'get',
      url: '/login',
      params: {
        tokenId: tokenId
      }
    });
    this.setState({ view: 'user'});
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

  startThumbsCheck (questionId) {
    this.setState({
      lectureStatus: 'checkingThumbs',
      questionId: questionId
    })
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
              ? <Student />
              : <Instructor lectureStatus={this.state.lectureStatus} startLecture={this.startLecture.bind(this)} endLecture={this.endLecture.bind(this)} startThumbsCheck={this.startThumbsCheck.bind(this)} endThumbsCheck={this.endThumbsCheck.bind(this)}/> }
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
