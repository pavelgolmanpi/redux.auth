import React, { Component } from 'react';
import Header from '../containers/HeaderContainer'
import fakeAuth from '../components/FakeAuth'
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>Please click button below</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default LoginPage;
