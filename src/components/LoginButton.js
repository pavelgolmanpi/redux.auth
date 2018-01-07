import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

class LoginButton extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  login() {
    this.props.loginAction();
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if(this.props.isAuthenticated){
      //console.log("REDIRECT AFTER LOGIN");
      return <Redirect to={from} />
    }

    return (
      <button onClick={ this.login }>LOGIN</button>
    );
  }
}


export default LoginButton;
