import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCharacter } from '../actions/characters';
import { getFilms, getFilmsDetails } from '../actions/films';
import Character from '../components/Character.jsx';

export class Selection extends Component {
  constructor(props) {
    super(props);
  }

  select = (char) => {
    this.props.selectCharacter(char)
      .then(() => {
        this.props.getFilms(this.props.characters.selected.url)
          .then(() => {
            this.props.getFilmsDetails(this.props.films.filmsLinks)
          })
          .catch((err) => {
            throw err;
          })
      })
      .catch((err) => {
        throw err;
      })
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
    films: state.films,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    selectCharacter: (...args) => dispatch(selectCharacter(...args)),
    getFilms: (...args) => dispatch(getFilms(...args)),
    getFilmsDetails: (...args) => dispatch(getFilmsDetails(...args)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
