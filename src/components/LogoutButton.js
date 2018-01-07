import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fakeAuth from '../components/FakeAuth'
import { Redirect } from 'react-router-dom'

class LogoutButton extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.logoutAction();
  }

  render() {
    if(!fakeAuth.isAuthenticated()){
      return <Redirect to="/" />
    }

    return (
      <button onClick={ this.logout }>LOGOUT</button>
    );
  }
}


export default LogoutButton;
