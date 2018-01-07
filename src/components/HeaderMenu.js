import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserName from './UserName'
import LogoutButton from '../containers/LogoutButtonContainer'

class HeaderMenu extends Component {
  componentWillMount() {
    this.props.headerAction();
  }

  authInfo(){
    return this.props.isAuthenticated ? (
      <p>
        Welcome <UserName />! <LogoutButton />
      </p>
    ) : (
      <p>
        You are not logged in.
        &nbsp;<Link to="/login">Login</Link>
      </p>
    )
  }


  render() {
    return (
      <div className="container">
        { this.authInfo() }
        {this.props.loading && <h2>Loading...</h2> }
        {!this.props.loading && this.props.data && this.props.data.map((item, i) =>
                  <li key={i}><Link to={item.url}>{item.title}</Link></li>
        )}

      </div>
    );
  }
}


export default HeaderMenu;
