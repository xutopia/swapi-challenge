import { createAction } from 'redux-actions';
import axios from 'axios';


export const getFilms = createAction('getFilms', async (url) => {
  let result;

  try {
    result = await axios.get(url);
  } catch (err) {
    result = err;
    throw err;
  }

  return result;
});


export const getFilmsDetails = createAction('getFilmsDetails', async (films) => {
  let result = [];

  for (let i = 0; i < films.length; i += 1) {
    try {
      let filmDetail = await axios.get(films[i]);
      result.push(filmDetail.data);
    } catch (err) {
      throw err;
    }
  }

  return result;
});

export const clearFilms = createAction('clearFilms');
