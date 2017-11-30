import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Selection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello Selection
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    films: state.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    selectCharacter: (...args) => dispatch(selectCharacter(...args)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
