import React, { Component } from 'react';
import Header from '../containers/HeaderContainer'
import CalledOnce from '../containers/CalledOnceComponentContainer'

class AnotherPublicPage extends Component {
  render() {
    return (
      <div>
        <h1>Another Public Page</h1>
        <Header />
        <CalledOnce />
      </div>
    );
  }
}


export default AnotherPublicPage;
