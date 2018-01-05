import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class CalledOnceComponent extends Component {
  componentWillMount() {
    this.props.calledOnceAction();
  }


  render() {
    return (
      <div>
        <h3>Called Once Info</h3>
      {this.props.loading && <h2>Loading...</h2> }
      {!this.props.loading && this.props.data && this.props.data.map((item, i) =>
                <li key={i}>{item.title}: {item.description}</li>
      )}

      </div>
    );
  }
}


export default CalledOnceComponent;
