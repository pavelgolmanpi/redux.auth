import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderMenu extends Component {
  componentWillMount() {
    this.props.headerAction();
  }


  render() {
    return (
      <div className="container">
        {this.props.loading && !this.props.data && <h2>Loading...</h2> }
        {!this.props.loading && this.props.data && this.props.data.map((item, i) =>
                  <li key={i}>{item.title}</li>
        )}

      </div>
    );
  }
}


export default HeaderMenu;
