import charactersList from '../assets/charactersList';

const initialState = {
  characters: {
    list: charactersList,
    selected: {},
    errors: [],
  },
  films: {
    filmsLinks: [],
    filmsDetails: [],
    errors: [],
  },
}

export default initialState;
