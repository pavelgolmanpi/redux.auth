import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    if(!this.props.isAuthenticated){
      //console.log("REDIRECT AFTER LOGOUT");
      return <Redirect to="/" />
    }

    return (
      <button onClick={ this.logout }>LOGOUT</button>
    );
  }
}


export default LogoutButton;
