import { createAction } from 'redux-actions';
import axios from 'axios';


export const selectCharacter = createAction('selectCharacter', async (character) => {
  return await character;
});


export const clearSelected = createAction('clearSelected');
