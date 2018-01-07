import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthButton from './AuthButton'

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
