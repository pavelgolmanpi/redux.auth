import React, { Component } from 'react';
import Header from '../containers/HeaderContainer'
import CalledOnce from '../containers/CalledOnceComponentContainer'

export default class ProtectedPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Protected Page</h1>
        <Header />
        <CalledOnce />
      </div>
    )
  }
}
