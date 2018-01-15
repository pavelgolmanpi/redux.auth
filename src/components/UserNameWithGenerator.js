import React, { Component } from 'react'
import "babel-polyfill";

class UserNameWithGenerator extends Component {

  constructor(props) {
    super(props)

  }

  *generateRoleForUser() {
    yield <span key="admin">admin </span>
    yield <span key="manager">manager </span>
    yield <span key="sales">sales</span>
  }

  render() {
    let roles = this.generateRoleForUser()
    return (
      <span>UserName ({Array.from(roles)})</span>
    );
  }
}



export default UserNameWithGenerator;
