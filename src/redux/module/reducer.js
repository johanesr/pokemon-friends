import * as types from './types';

export const initialState = {
  display: {
    isMobile: window.innerWidth <= 991
  },
  curPage: 0,
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

export const changePage = (state = initialState, action = {}) => {
  switch(action.type) {
    case types.CHANGE_PAGE:
      return {...state, curPage: action.payload}
    default:
      return state
  }
}
