import { createAction } from 'redux-actions';
import axios from 'axios';


export const selectCharacter = createAction('selectCharacter', (character) => {
    return character;
});


export const clearSelected = createAction('clearSelected');
