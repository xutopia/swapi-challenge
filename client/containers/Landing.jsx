import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Landing
      </div>
    )
  }
}

export default connect()(Landing);
