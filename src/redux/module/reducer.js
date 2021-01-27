import * as types from './types';

export const initialState = {
  display: {
    isMobile: window.innerWidth <= 991
  },
  pokemons: [],
  searchField: '',
  isLoading: true,
  error: ''
};

const ACTION_HANDLERS = {
  [types.CHANGE_SEARCH_FIELD]: (state, action) => {
    return {
      ...state,
      searchField: action.payload
    };
  },
  [types.REQUEST_POKEMON_PENDING]: (state) => {
    return {
      ...state,
      isLoading: true
    }
  },
  [types.REQUEST_POKEMON_SUCCESS]: (state, action) => {
    return {
      ...state,
      pokemons: action.payload,
      isLoading: false
    }
  },
  [types.REQUEST_POKEMON_FAILED]: (state, action) => {
    return {
      ...state,
      error: action.payload,
      isLoading: false
    }
  }
};

export default (state = initialState, action = {}) => {
  const handler = ACTION_HANDLERS[action.type];

  // If handler does not exist (NotFound), return the initial state
  return handler ? handler(state, action) : state;
};