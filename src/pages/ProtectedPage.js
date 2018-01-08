import React, { Component } from 'react';
import Header from '../containers/HeaderContainer'
import CalledOnce from '../containers/CalledOnceComponentContainer'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class ProtectedPage extends React.Component {

  render() {
    if(!this.props.isAuthenticated){
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Protected Page</h1>
        <Header />
        <CalledOnce />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let isAuthenticated = state.authReducer.AUTH.AUTH_TOKEN != null;

  return {
    isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedPage);
