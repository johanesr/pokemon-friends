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

export const searchPokemon = (state = initialState, action = {}) => {
  switch(action.type) {
    case types.CHANGE_SEARCH_FIELD:
      return {...state, searchField: action.payload}
    default:
      return state
  }
}

export const requestPokemon = (state = initialState, action = {}) => {
  switch(action.type) {
    case types.REQUEST_POKEMON_PENDING:
      return {...state, isLoading: true}
    case types.REQUEST_POKEMON_SUCCESS:
      return {...state, pokemons: action.payload, isLoading: false}
    case types.REQUEST_POKEMON_FAILED:
      return {...state, error: action.payload, isLoading: false}
    default:
      return state
  }
};