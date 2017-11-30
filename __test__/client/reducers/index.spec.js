import characterReducers from '../../../client/reducers/characters';

describe('reducers -- checking return value', () => {
  it('clearSelected should update state with empty object for characters.selected', () => {
    const mockState = {
        list: [],
        selected: 'mockChar',
    }
    let newState = characterReducers(mockState, {type: 'clearSelected'});
    expect(newState).toEqual({
      list: [],
      selected: {},
    });
  });
});
