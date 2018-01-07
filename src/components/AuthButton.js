import React, { Component } from 'react';
import fakeAuth from '../components/FakeAuth'
import { Link, withRouter } from 'react-router-dom'
import UserName from './UserName'
import LogoutButton from '../containers/LogoutButtonContainer'

const AuthButton = withRouter(({ history }) => {
  return fakeAuth.isAuthenticated() ? (
    <p>
      Welcome <UserName />! <LogoutButton />
    </p>
  ) : (
    <p>
      You are not logged in.
      &nbsp;<Link to="/login">Login</Link>
    </p>
  )
})

export default AuthButton;
