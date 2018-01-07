import React, { Component } from 'react';
import Header from '../containers/HeaderContainer'
import LoginButton from '../containers/LoginButtonContainer'

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <p>Please click button below</p>
        <LoginButton location={this.props.location} />
      </div>
    )
  }
}

export default LoginPage;
