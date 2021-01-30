import * as types from './types';

export const initialState = {
  display: {
    isMobile: window.innerWidth <= 991
  },
  searchField: ''
};

export const searchPokemon = (state = initialState, action = {}) => {
  switch(action.type) {
    case types.CHANGE_SEARCH_FIELD:
      return {...state, searchField: action.payload}
    default:
      return state
  }
}
