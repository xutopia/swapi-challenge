import React, { Component } from 'react';
import { connect } from 'react-redux';
import Selection from './Selection.jsx';
import Movies from './Movies.jsx';
import Info from '../components/Info.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMovieList: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.films.filmsDetails.length) {
      this.setState({
        hasMovieList: true,
      })
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Selection />
        <br />
        <div>
          {
            !this.state.hasMovieList ? <Info /> : <div></div>
          }
        </div>
        <Movies />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    films: state.films,
  };
}

export default connect(mapStateToProps)(Landing);
