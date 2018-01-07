import React, { Component } from 'react';
import Header from '../containers/HeaderContainer'
import CalledOnce from '../containers/CalledOnceComponentContainer'
import OnlyForAuthUserInfo from '../containers/OnlyForAuthUserInfoContainer'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Index Page</h1>
        <Header />
        <CalledOnce />
        <OnlyForAuthUserInfo />
      </div>
    );
  }
}


export default IndexPage;
