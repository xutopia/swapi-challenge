import { selectCharacter, clearSelected } from '../../../client/actions/characters';

describe('actions --- return values', () => {
  it('selectCharacter should have the the expected type: ', () => {
    let selectCharacterAction = selectCharacter();

    expect(selectCharacterAction.type).toEqual('selectCharacter');
  });

  it('clearSelected should have the the expected type: ', () => {
    let clearSelectedAction = clearSelected();

    expect(clearSelectedAction.type).toEqual('clearSelected');
  });
});
