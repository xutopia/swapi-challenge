import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Modal from 'react-modal';
import { selectCharacter, clearSelected } from '../actions/characters';
import { getFilms, getFilmsDetails, clearFilms } from '../actions/films';
import Character from '../components/Character.jsx';
import ModalContent from '../components/ModalContent.jsx';

export class Selection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.films.errors.length > this.props.films.errors.length) {
      this.setState({
        isModalOpen: true,
      })
    }
  }

  select = (char) => {
    this.props.selectCharacter(char)
      .then(() => {
        this.props.getFilms(this.props.characters.selected.url)
          .then(() => {
            this.props.getFilmsDetails(this.props.films.filmsLinks)
          });
      });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
    this.props.clearFilms();
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
      <Grid fluid>
        <Row center="lg">
          {
            characterList
          }
        </Row>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Modal"
        >
            <ModalContent
              selected={this.props.characters.selected.name}
            />
        </Modal>
      </Grid>
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
    clearSelected: () => dispatch(clearSelected()),
    getFilms: (...args) => dispatch(getFilms(...args)),
    getFilmsDetails: (...args) => dispatch(getFilmsDetails(...args)),
    clearFilms: () => dispatch(clearFilms()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
