import { handleActions } from 'redux-actions';
import { selectCharacter, clearSelected } from '../actions/characters';
import initialState from './initialState';

const characters = handleActions({
  [selectCharacter](state, action) {
    return {
      ...state,
      selected: action.payload.character,
    };
  },
  [clearSelected](state, action) {
    return {
      ...state,
      selected: {},
    }
  }
}, initialState.characters);

export default characters;
