import React from 'react';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tokenId: '' };
  }

  componentDidMount() {
    console.log(this.props, 'didmount');
  }

  responseGoogle(response) {
    console.log(this.props);
    console.log(response);
    this.setState({ tokenId: response.tokenId})
  }

  render () {
    return (
      <div>
        <GoogleLogin
          clientId="430160456638-mmtpqlu3h8t0nkum0tlo167d492gvbmf.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.props.onSignIn}
          onFailure={this.responseGoogle.bind(this)}
          isSignedIn={true}
        />
      </div>
    )
  }
}

export default Login;