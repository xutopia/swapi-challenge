import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Movies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Movies
      </div>
    )
  }
}

export default connect()(Movies);
