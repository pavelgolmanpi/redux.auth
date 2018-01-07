import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class OnlyForAuthUserInfo extends Component {
  componentWillMount() {
    if(this.props.isAuthenticated){
      this.props.onlyForAuthUserInfoAction();
    }
  }

  componentWillReceiveProps(nextProps){
    if(!this.props.isAuthenticated && nextProps.isAuthenticated){
      this.props.onlyForAuthUserInfoAction();
    }
  }

  info(){
    if(!this.props.loading && this.props.data){
      return this.props.data.map((item, i) => <li key={i}>{item.title}</li>)
    }
    return <p>INFO ONLY FOR AUTH USERS</p>
  }

  render() {
    return (
      <div>
        {this.info()}
      </div>
    );
  }
}


export default OnlyForAuthUserInfo;
