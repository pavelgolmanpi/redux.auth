import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, store: Store, ...rest }) => (
  <Route {...rest} render={(props) => (
      Store.getState().authReducer.AUTH.AUTH_TOKEN
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

export default PrivateRoute;
