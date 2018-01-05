import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fakeAuth from '../components/FakeAuth'
import { withRouter } from 'react-router-dom'

const AuthButton = withRouter(({ history }) => {
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>
      You are not logged in.
      &nbsp;<Link to="/login">Login</Link>
    </p>
  )
})

class HeaderMenu extends Component {
  componentWillMount() {
    this.props.headerAction();
  }

  render() {
    return (
      <div className="container">
        <AuthButton />
        {this.props.loading && <h2>Loading...</h2> }
        {!this.props.loading && this.props.data && this.props.data.map((item, i) =>
                  <li key={i}><Link to={item.url}>{item.title}</Link></li>
        )}

      </div>
    );
  }
}


export default HeaderMenu;
