import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../components/Movie.jsx';

export class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('looking at nextProps: ', nextProps);
    if (nextProps.films.filmsDetails.length) {
      this.setState({
        movies: nextProps.films.filmsDetails,
      })
    }
  }

  render() {
    let movies = this.state.movies.map((movie, index) => {
      return (
        <Movie
          title={movie.title}
          releaseDate={movie.release_date}
          key={movie.created}
          />
      )
    });

    return (
      <div>
        {movies}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films,
  }
}

export default connect(mapStateToProps)(Movies);
