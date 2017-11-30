import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCharacter } from '../actions/characters';
import Character from '../components/Character.jsx';

export class Selection extends Component {
  constructor(props) {
    super(props);
  }

  select = (char) => {
    this.props.selectCharacter(char);
  }

  render() {
    let characterList = this.props.characters.list.map((char, index) => {
      let depth;
      if (char.name === this.props.characters.selected.name) {
        depth = 5;
      }

      return (
        <Character
          name={char.name}
          key={index}
          handleClick={() => this.select(char)}
          depth={depth}
        />
      )
    })
    return (
      <div>
        {
          characterList
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    selectCharacter: (...args) => dispatch(selectCharacter(...args)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
