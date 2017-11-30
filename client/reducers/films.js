import { handleActions } from 'redux-actions';
import { getFilms, getFilmsDetails } from '../actions/films';
import initialState from './initialState';

const films = handleActions({
  [getFilms](state, action) {
    return {
      ...state,
      filmsLinks: action.payload.films,
    };
  },
  [getFilmsDetails](state, action) {
    return {
      ...state,
      filmsDetails: [...state.filmsDetails, action.payload.film],
    }
  }
}, initialState.films);

export default films;
