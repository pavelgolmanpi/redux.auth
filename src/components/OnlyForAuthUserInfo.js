import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class OnlyForAuthUserInfo extends Component {
  componentWillMount() {
    console.log("componentWillMount OnlyForAuthUserInfo");
  }

  info(){

    return (
      <span>sdfsfsdf</span>
    )
  }

  render() {
    return (
      <div>
        INFO ONLY FOR AUTH USERS<br />
        {this.info()}
      </div>
    );
  }
}


export default OnlyForAuthUserInfo;
