import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import fakeAuth from '../components/FakeAuth'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

export default PrivateRoute;
