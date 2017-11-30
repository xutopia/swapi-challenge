import { handleActions } from 'redux-actions';
import { getFilms, getFilmsDetails } from '../actions/films';
import initialState from './initialState';

const films = handleActions({
  [getFilms](state, action) {
    if (action.payload.data) {
      return {
        ...state,
        filmsLinks: action.payload.data.films,
      };
    } else {
      return {
        ...state,
        errors: [...state.errors, action.payload.response.data],
      }
    }
  },
  [getFilmsDetails](state, action) {
    return {
      ...state,
      filmsDetails: action.payload,
    }
  }
}, initialState.films);

export default films;
