import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserNameWithGenerator from './UserNameWithGenerator'
import LogoutButton from '../containers/LogoutButtonContainer'

class HeaderMenu extends Component {


  componentWillMount() {
    this.props.headerAction();
  }

  authInfo(){
    return this.props.isAuthenticated ? (
      <p>
        Welcome <UserNameWithGenerator />! <LogoutButton />
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
        {this.props.loading && !this.props.error && <h2>Loading...</h2> }
        {!this.props.loading && !this.props.error && this.props.data && this.props.data.map((item, i) =>
                  <li key={i}><Link to={item.url}>{item.title}</Link></li>
        )}

      </div>
    );
  }
}


export default HeaderMenu;
